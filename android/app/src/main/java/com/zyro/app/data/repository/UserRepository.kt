package com.zyro.app.data.repository

import com.google.firebase.auth.FirebaseUser
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import com.zyro.app.data.model.UserProfile
import com.zyro.app.data.model.WeightEntry
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await

class UserRepository {

    private val firestore = FirebaseFirestore.getInstance()

    // ── User Profile ─────────────────────────────────────────────────────────

    suspend fun createOrUpdateUserProfile(user: FirebaseUser) {
        val docRef = firestore.collection("users").document(user.uid)
        val snapshot = docRef.get().await()

        if (!snapshot.exists()) {
            val profile = UserProfile(
                uid = user.uid,
                displayName = user.displayName ?: "",
                email = user.email ?: "",
                photoUrl = user.photoUrl?.toString() ?: "",
                createdAt = System.currentTimeMillis(),
                isAdmin = false,
                isBanned = false,
                rank = "Bronze",
                rankProgress = 0
            )
            docRef.set(profile).await()
        } else {
            docRef.update(
                "displayName", user.displayName ?: "",
                "photoUrl", user.photoUrl?.toString() ?: "",
                "email", user.email ?: ""
            ).await()
        }
    }

    fun getUserProfileFlow(uid: String): Flow<UserProfile?> = callbackFlow {
        val listener = firestore.collection("users").document(uid)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }
                trySend(snapshot?.toObject(UserProfile::class.java))
            }
        awaitClose { listener.remove() }
    }

    suspend fun updateWeightGoals(uid: String, currentWeight: Double, targetWeight: Double) {
        firestore.collection("users").document(uid)
            .update(
                "currentWeight", currentWeight,
                "targetWeight", targetWeight
            ).await()
    }

    // ── Weight Entries ────────────────────────────────────────────────────────

    suspend fun addWeightEntry(entry: WeightEntry): String {
        val docRef = firestore
            .collection("users")
            .document(entry.userId)
            .collection("weightLogs")
            .add(entry)
            .await()

        // Also update currentWeight on user profile
        firestore.collection("users").document(entry.userId)
            .update("currentWeight", entry.weight)
            .await()

        return docRef.id
    }

    fun getWeightEntriesFlow(uid: String): Flow<List<WeightEntry>> = callbackFlow {
        val listener = firestore
            .collection("users")
            .document(uid)
            .collection("weightLogs")
            .orderBy("date", Query.Direction.DESCENDING)
            .limit(30)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }
                val entries = snapshot?.documents?.mapNotNull { doc ->
                    doc.toObject(WeightEntry::class.java)?.copy(id = doc.id)
                } ?: emptyList()
                trySend(entries)
            }
        awaitClose { listener.remove() }
    }

    suspend fun deleteWeightEntry(uid: String, entryId: String) {
        firestore
            .collection("users")
            .document(uid)
            .collection("weightLogs")
            .document(entryId)
            .delete()
            .await()
    }
}
