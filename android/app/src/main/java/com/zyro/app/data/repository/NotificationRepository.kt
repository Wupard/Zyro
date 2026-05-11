package com.zyro.app.data.repository

import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import com.zyro.app.data.model.AppNotification
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

class NotificationRepository(
    private val firestore: FirebaseFirestore = FirebaseFirestore.getInstance()
) {

    private fun col(uid: String) =
        firestore.collection("users").document(uid).collection("notifications")

    fun notificationsFlow(uid: String, limit: Long = 50): Flow<List<AppNotification>> = callbackFlow {
        val listener = col(uid)
            .orderBy("createdAt", Query.Direction.DESCENDING)
            .limit(limit)
            .addSnapshotListener { snap, err ->
                if (err != null) {
                    close(err)
                    return@addSnapshotListener
                }
                val list = snap?.documents?.mapNotNull { d ->
                    d.toObject(AppNotification::class.java)?.copy(id = d.id)
                } ?: emptyList()
                trySend(list)
            }
        awaitClose { listener.remove() }
    }

    suspend fun markRead(uid: String, notificationId: String) {
        col(uid).document(notificationId).update("read", true).await()
    }
}
