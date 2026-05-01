package com.zyro.app.ui.screens.photos

import android.net.Uri
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.zyro.app.data.model.ProgressPhoto
import com.zyro.app.data.repository.PhotoRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class PhotosViewModel : ViewModel() {

    private val photoRepository = PhotoRepository()

    private val _photos = MutableStateFlow<List<ProgressPhoto>>(emptyList())
    val photos: StateFlow<List<ProgressPhoto>> = _photos

    private val _isUploading = MutableStateFlow(false)
    val isUploading: StateFlow<Boolean> = _isUploading

    private val _uploadProgress = MutableStateFlow(0f)
    val uploadProgress: StateFlow<Float> = _uploadProgress

    private val _error = MutableStateFlow<String?>(null)
    val error: StateFlow<String?> = _error

    private val _uploadSuccess = MutableStateFlow(false)
    val uploadSuccess: StateFlow<Boolean> = _uploadSuccess

    fun loadPhotos(uid: String) {
        viewModelScope.launch {
            photoRepository.getProgressPhotosFlow(uid).collect { photos ->
                _photos.value = photos
            }
        }
    }

    fun uploadPhoto(uid: String, imageUri: Uri, type: String, notes: String = "") {
        viewModelScope.launch {
            _isUploading.value = true
            _error.value = null
            try {
                photoRepository.uploadProgressPhoto(uid, imageUri, type, notes)
                _uploadSuccess.value = true
            } catch (e: Exception) {
                _error.value = e.localizedMessage ?: "Upload failed"
            } finally {
                _isUploading.value = false
            }
        }
    }

    fun deletePhoto(uid: String, photo: ProgressPhoto) {
        viewModelScope.launch {
            try {
                photoRepository.deleteProgressPhoto(uid, photo)
            } catch (e: Exception) {
                _error.value = e.localizedMessage ?: "Delete failed"
            }
        }
    }

    fun clearError() { _error.value = null }
    fun clearUploadSuccess() { _uploadSuccess.value = false }
}
