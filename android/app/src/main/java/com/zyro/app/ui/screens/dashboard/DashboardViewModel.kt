package com.zyro.app.ui.screens.dashboard

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.zyro.app.data.model.UserProfile
import com.zyro.app.data.model.WeightEntry
import com.zyro.app.data.repository.UserRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class DashboardViewModel : ViewModel() {

    private val userRepository = UserRepository()

    private val _userProfile = MutableStateFlow<UserProfile?>(null)
    val userProfile: StateFlow<UserProfile?> = _userProfile

    private val _recentWeightEntries = MutableStateFlow<List<WeightEntry>>(emptyList())
    val recentWeightEntries: StateFlow<List<WeightEntry>> = _recentWeightEntries

    private val _isLoading = MutableStateFlow(true)
    val isLoading: StateFlow<Boolean> = _isLoading

    fun loadData(uid: String) {
        viewModelScope.launch {
            userRepository.getUserProfileFlow(uid).collect { profile ->
                _userProfile.value = profile
                _isLoading.value = false
            }
        }
        viewModelScope.launch {
            userRepository.getWeightEntriesFlow(uid).collect { entries ->
                _recentWeightEntries.value = entries
            }
        }
    }
}
