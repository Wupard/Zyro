package com.zyro.app.data.repository

import android.net.Uri
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import com.google.firebase.storage.FirebaseStorage
import com.zyro.app.data.model.ProgressPhoto
import kotlinx.coroutines.channels.awaitClose
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.callbackFlow
import kotlinx.coroutines.tasks.await
import java.util.UUID

class PhotoRepository {

    private val firestore = FirebaseFirestore.getInstance()
    private val storage = FirebaseStorage.getInstance()

    /**
     * Uploads a photo to Firebase Storage and saves metadata to Firestore.
     * @param uid User's UID
     * @param imageUri Local URI of the photo
     * @param type "before" or "after"
     * @param notes Optional caption/notes
     */
    suspend fun uploadProgressPhoto(
        uid: String,
        imageUri: Uri,
        type: String,
        notes: String = ""
    ): ProgressPhoto {
        val fileName = "${UUID.randomUUID()}.jpg"
        val storageRef = storage.reference
            .child("users/$uid/progress_photos/$fileName")

        // Upload to Storage
        storageRef.putFile(imageUri).await()
        val downloadUrl = storageRef.downloadUrl.await().toString()

        // Save metadata to Firestore
        val photo = ProgressPhoto(
            userId = uid,
            type = type,
            storageUrl = downloadUrl,
            notes = notes
        )
        val docRef = firestore
            .collection("users")
            .document(uid)
            .collection("progressPhotos")
            .add(photo)
            .await()

        return photo.copy(id = docRef.id)
    }

    fun getProgressPhotosFlow(uid: String): Flow<List<ProgressPhoto>> = callbackFlow {
        val listener = firestore
            .collection("users")
            .document(uid)
            .collection("progressPhotos")
            .orderBy("date", Query.Direction.DESCENDING)
            .addSnapshotListener { snapshot, error ->
                if (error != null) {
                    close(error)
                    return@addSnapshotListener
                }
                val photos = snapshot?.documents?.mapNotNull { doc ->
                    doc.toObject(ProgressPhoto::class.java)?.copy(id = doc.id)
                } ?: emptyList()
                trySend(photos)
            }
        awaitClose { listener.remove() }
    }

    suspend fun deleteProgressPhoto(uid: String, photo: ProgressPhoto) {
        // Delete from Storage
        try {
            storage.getReferenceFromUrl(photo.storageUrl).delete().await()
        } catch (e: Exception) {
            // Ignore if already deleted from storage
        }
        // Delete from Firestore
        firestore
            .collection("users")
            .document(uid)
            .collection("progressPhotos")
            .document(photo.id)
            .delete()
            .await()
    }
}
