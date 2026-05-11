package com.zyro.app.data.repository

import com.google.firebase.Timestamp
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import com.zyro.app.data.model.AppNotification
import com.zyro.app.data.model.NotificationType
import com.zyro.app.data.model.SystemAnnouncement
import com.zyro.app.data.model.UserProfile
import kotlinx.coroutines.tasks.await
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow

class AdminRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance()
) {

    private val usersCol get() = firestore.collection("users")
    private val announcementsCol get() = firestore.collection("systemAnnouncements")

    suspend fun listUsers(limit: Long = 200): List<UserProfile> =
        usersCol.orderBy("createdAt", Query.Direction.DESCENDING)
            .limit(limit)
            .get().await()
            .documents.mapNotNull { d -> d.toObject(UserProfile::class.java)?.copy(uid = d.id) }

    suspend fun setBanned(uid: String, banned: Boolean) {
        usersCol.document(uid).update("isBanned", banned).await()
    }

    suspend fun setRank(uid: String, rank: String, rankProgress: Int) {
        usersCol.document(uid).update(
            "rank", rank,
            "rankProgress", rankProgress.coerceIn(0, 100)
        ).await()
    }

    suspend fun setAdmin(uid: String, admin: Boolean) {
        usersCol.document(uid).update("isAdmin", admin).await()
    }

    suspend fun sendUserNotification(targetUid: String, title: String, body: String) {
        val ref = usersCol.document(targetUid).collection("notifications").document()
        val n = AppNotification(
            id = ref.id,
            title = title.trim(),
            body = body.trim(),
            type = NotificationType.ADMIN_MESSAGE.name,
            read = false,
            createdAt = Timestamp.now()
        )
        ref.set(n).await()
    }

    suspend fun broadcastNotification(title: String, body: String) {
        val users = listUsers(500)
        for (u in users) {
            sendUserNotification(u.uid, title, body)
        }
    }

    suspend fun publishSystemAnnouncement(title: String, body: String) {
        val ref = announcementsCol.document()
        ref.set(
            SystemAnnouncement(
                id = ref.id,
                title = title.trim(),
                body = body.trim(),
                createdAt = Timestamp.now()
            )
        ).await()
        broadcastNotification("Sistem güncellemesi", title.trim() + "\n\n" + body.trim())
    }

    fun announcementsFlow(limit: Long = 20): Flow<List<SystemAnnouncement>> = callbackFlow {
        val l = announcementsCol
            .orderBy("createdAt", Query.Direction.DESCENDING)
            .limit(limit)
            .addSnapshotListener { snap, err ->
                if (err != null) {
                    close(err)
                    return@addSnapshotListener
                }
                val list = snap?.documents?.mapNotNull { d ->
                    d.toObject(SystemAnnouncement::class.java)?.copy(id = d.id)
                } ?: emptyList()
                trySend(list)
            }
        awaitClose { l.remove() }
    }
}
