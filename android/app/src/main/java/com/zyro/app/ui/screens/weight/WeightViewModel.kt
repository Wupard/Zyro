package com.zyro.app.ui.screens.weight

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.firebase.Timestamp
import com.zyro.app.data.model.WeightEntry
import com.zyro.app.data.model.UserProfile
import com.zyro.app.data.repository.UserRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import java.util.Date

class WeightViewModel : ViewModel() {

    private val userRepository = UserRepository()

    private val _weightEntries = MutableStateFlow<List<WeightEntry>>(emptyList())
    val weightEntries: StateFlow<List<WeightEntry>> = _weightEntries

    private val _userProfile = MutableStateFlow<UserProfile?>(null)
    val userProfile: StateFlow<UserProfile?> = _userProfile

    private val _isSaving = MutableStateFlow(false)
    val isSaving: StateFlow<Boolean> = _isSaving

    private val _saveSuccess = MutableStateFlow(false)
    val saveSuccess: StateFlow<Boolean> = _saveSuccess

    private val _error = MutableStateFlow<String?>(null)
    val error: StateFlow<String?> = _error

    fun loadData(uid: String) {
        viewModelScope.launch {
            userRepository.getWeightEntriesFlow(uid).collect { entries ->
                _weightEntries.value = entries
            }
        }
        viewModelScope.launch {
            userRepository.getUserProfileFlow(uid).collect { profile ->
                _userProfile.value = profile
            }
        }
    }

    fun addWeightEntry(uid: String, weight: Double, date: Date, notes: String) {
        if (weight <= 0) {
            _error.value = "Please enter a valid weight"
            return
        }
        viewModelScope.launch {
            _isSaving.value = true
            try {
                val entry = WeightEntry(
                    userId = uid,
                    weight = weight,
                    date = Timestamp(date),
                    notes = notes
                )
                userRepository.addWeightEntry(entry)
                _saveSuccess.value = true
            } catch (e: Exception) {
                _error.value = e.localizedMessage ?: "Failed to save entry"
            } finally {
                _isSaving.value = false
            }
        }
    }

    fun deleteEntry(uid: String, entryId: String) {
        viewModelScope.launch {
            try {
                userRepository.deleteWeightEntry(uid, entryId)
            } catch (e: Exception) {
                _error.value = e.localizedMessage ?: "Failed to delete"
            }
        }
    }

    fun updateWeightGoals(uid: String, currentWeight: Double, targetWeight: Double) {
        viewModelScope.launch {
            try {
                userRepository.updateWeightGoals(uid, currentWeight, targetWeight)
            } catch (e: Exception) {
                _error.value = e.localizedMessage ?: "Failed to update goals"
            }
        }
    }

    fun clearError() { _error.value = null }
    fun clearSaveSuccess() { _saveSuccess.value = false }
}
