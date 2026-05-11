package com.zyro.app.data.repository

import com.google.firebase.Timestamp
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import com.zyro.app.data.model.AppNotification
import com.zyro.app.data.model.Comment
import com.zyro.app.data.model.NotificationType
import kotlinx.coroutines.channels.awaitClose
import com.zyro.app.data.model.UserProfile
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

class CommentRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance()
) {

    private val commentsCol get() = firestore.collection("comments")
    private fun notifCol(uid: String) =
        firestore.collection("users").document(uid).collection("notifications")

    fun commentsFlow(limit: Long = 200): Flow<List<Comment>> = callbackFlow {
        val listener = commentsCol
            .orderBy("createdAt", Query.Direction.DESCENDING)
            .limit(limit)
            .addSnapshotListener { snap, err ->
                if (err != null) {
                    close(err)
                    return@addSnapshotListener
                }
                val list = snap?.documents?.mapNotNull { d ->
                    d.toObject(Comment::class.java)?.copy(id = d.id)
                } ?: emptyList()
                trySend(list)
            }
        awaitClose { listener.remove() }
    }

    suspend fun fetchAuthorProfile(uid: String): UserProfile? =
        firestore.collection("users").document(uid).get().await()
            .toObject(UserProfile::class.java)

    suspend fun postComment(
        authorUid: String,
        displayName: String,
        photoUrl: String,
        text: String,
        parentId: String
    ): String {
        val trimmed = text.trim()
        require(trimmed.isNotEmpty()) { "empty" }

        val authorProfile = fetchAuthorProfile(authorUid)
            ?: UserProfile(uid = authorUid, displayName = displayName)

        val parent: Comment? = if (parentId.isNotEmpty()) {
            commentsCol.document(parentId).get().await().toObject(Comment::class.java)
                ?.copy(id = parentId)
        } else null

        val rootId = when {
            parent == null -> ""
            parent.parentId.isEmpty() -> parent.id
            else -> parent.rootId.ifEmpty { parent.id }
        }

        val doc = Comment(
            id = "",
            userId = authorUid,
            displayName = displayName.ifEmpty { authorProfile.displayName },
            photoUrl = photoUrl.ifEmpty { authorProfile.photoUrl },
            text = trimmed,
            createdAt = Timestamp.now(),
            parentId = parentId,
            rootId = if (parent == null) "" else rootId,
            authorIsAdmin = authorProfile.isAdmin
        )

        val ref = commentsCol.document()
        val finalRoot = if (parent == null) ref.id else rootId
        ref.set(
            doc.copy(id = ref.id, rootId = finalRoot)
        ).await()

        if (parent != null && parent.userId != authorUid) {
            val notif = AppNotification(
                id = "",
                title = "Yorumunuza cevap",
                body = "${doc.displayName}: ${trimmed.take(120)}${if (trimmed.length > 120) "…" else ""}",
                type = NotificationType.COMMENT_REPLY.name,
                read = false,
                createdAt = Timestamp.now(),
                relatedCommentId = ref.id,
                relatedRootCommentId = finalRoot,
                fromUserId = authorUid,
                fromDisplayName = doc.displayName
            )
            val nRef = notifCol(parent.userId).document()
            nRef.set(notif.copy(id = nRef.id)).await()
        }

        return ref.id
    }

    private suspend fun collectReplyIds(commentId: String, acc: MutableList<String>) {
        val children = commentsCol.whereEqualTo("parentId", commentId).get().await()
        for (d in children.documents) {
            acc.add(d.id)
            collectReplyIds(d.id, acc)
        }
    }

    suspend fun deleteCommentChain(commentId: String, requestUid: String, requestIsAdmin: Boolean) {
        val doc = commentsCol.document(commentId).get().await()
        val c = doc.toObject(Comment::class.java)?.copy(id = doc.id)
            ?: return
        if (c.userId != requestUid && !requestIsAdmin) {
            throw SecurityException("not_allowed")
        }
        val toDelete = mutableListOf<String>()
        collectReplyIds(commentId, toDelete)
        toDelete.add(commentId)
        for (id in toDelete.distinct()) {
            commentsCol.document(id).delete().await()
        }
    }
}
