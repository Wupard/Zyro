package com.zyro.app.auth

import android.content.Context
import androidx.credentials.CredentialManager
import androidx.credentials.CustomCredential
import androidx.credentials.GetCredentialRequest
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.android.libraries.identity.googleid.GetGoogleIdOption
import com.google.android.libraries.identity.googleid.GetSignInWithGoogleOption
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthProvider
import com.zyro.app.data.model.UserProfile
import com.zyro.app.data.repository.UserRepository
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.tasks.await

sealed class AuthState {
    object Loading : AuthState()
    object Unauthenticated : AuthState()
    data class Authenticated(val uid: String) : AuthState()
    data class Error(val message: String) : AuthState()
}

class AuthViewModel : ViewModel() {

    private val auth = FirebaseAuth.getInstance()
    private val userRepository = UserRepository()

    private val _authState = MutableStateFlow<AuthState>(AuthState.Loading)
    val authState: StateFlow<AuthState> = _authState

    private val _meProfile = MutableStateFlow<UserProfile?>(null)
    val meProfile: StateFlow<UserProfile?> = _meProfile

    private var profileListenJob: Job? = null

    init {
        // Check current auth state immediately
        val currentUser = auth.currentUser
        _authState.value = if (currentUser != null) {
            AuthState.Authenticated(currentUser.uid)
        } else {
            AuthState.Unauthenticated
        }
        if (currentUser != null) {
            startProfileListener(currentUser.uid)
        }

        // Listen for auth state changes
        auth.addAuthStateListener { firebaseAuth ->
            val user = firebaseAuth.currentUser
            profileListenJob?.cancel()
            profileListenJob = null
            _meProfile.value = null
            if (user != null) {
                _authState.value = AuthState.Authenticated(user.uid)
                startProfileListener(user.uid)
            } else {
                _authState.value = AuthState.Unauthenticated
            }
        }
    }

    private fun startProfileListener(uid: String) {
        profileListenJob?.cancel()
        profileListenJob = viewModelScope.launch {
            userRepository.getUserProfileFlow(uid).collect { profile ->
                _meProfile.value = profile
                if (profile?.isBanned == true) {
                    auth.signOut()
                    _authState.value = AuthState.Error("Hesabınız yönetici tarafından askıya alındı.")
                }
            }
        }
    }

    fun signInWithGoogle(context: Context, webClientId: String) {
        viewModelScope.launch {
            try {
                _authState.value = AuthState.Loading

                val credentialManager = CredentialManager.create(context)
                val googleIdOption = GetGoogleIdOption.Builder()
                    .setFilterByAuthorizedAccounts(false)
                    .setServerClientId(webClientId)
                    .build()

                val signInWithGoogleOption = GetSignInWithGoogleOption.Builder(webClientId)
                    .build()

                val request = GetCredentialRequest.Builder()
                    .addCredentialOption(googleIdOption)
                    .addCredentialOption(signInWithGoogleOption)
                    .build()

                val result = credentialManager.getCredential(context, request)
                val credential = result.credential

                if (credential is CustomCredential &&
                    credential.type == GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL
                ) {
                    val googleIdTokenCredential = GoogleIdTokenCredential.createFrom(credential.data)
                    val authCredential = GoogleAuthProvider.getCredential(
                        googleIdTokenCredential.idToken, null
                    )
                    val authResult = auth.signInWithCredential(authCredential).await()
                    val user = authResult.user

                    if (user != null) {
                        userRepository.createOrUpdateUserProfile(user)
                        _authState.value = AuthState.Authenticated(user.uid)
                    } else {
                        _authState.value = AuthState.Error("Sign-in failed: no user returned")
                    }
                } else {
                    _authState.value = AuthState.Error("Unexpected credential type")
                }
            } catch (e: Exception) {
                _authState.value = AuthState.Error(e.localizedMessage ?: "Sign-in failed")
            }
        }
    }

    fun signOut() {
        auth.signOut()
        _authState.value = AuthState.Unauthenticated
    }

    val currentUserId: String?
        get() = auth.currentUser?.uid

    val currentUser
        get() = auth.currentUser
}
