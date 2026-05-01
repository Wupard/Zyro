package com.zyro.app.ui.screens.profile

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.ExitToApp
import androidx.compose.material.icons.filled.FitnessCenter
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.UserProfile
import com.zyro.app.data.repository.UserRepository
import com.zyro.app.ui.theme.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch

class ProfileViewModel : ViewModel() {
    private val userRepository = UserRepository()
    private val _profile = MutableStateFlow<UserProfile?>(null)
    val profile: StateFlow<UserProfile?> = _profile

    fun loadProfile(uid: String) {
        viewModelScope.launch {
            userRepository.getUserProfileFlow(uid).collect { _profile.value = it }
        }
    }
}

@Composable
fun ProfileScreen(
    authViewModel: AuthViewModel,
    viewModel: ProfileViewModel = viewModel()
) {
    val uid = authViewModel.currentUserId ?: return
    val profile by viewModel.profile.collectAsState()
    val user = authViewModel.currentUser
    var showSignOutDialog by remember { mutableStateOf(false) }

    LaunchedEffect(uid) { viewModel.loadProfile(uid) }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(ZyroBackground)
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text(
            text = "Profile",
            style = MaterialTheme.typography.headlineMedium,
            color = ZyroOnBackground,
            fontWeight = FontWeight.ExtraBold
        )

        // Profile Card
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(24.dp),
            colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(
                        Brush.verticalGradient(
                            listOf(ZyroPrimary.copy(0.2f), ZyroSurfaceVariant)
                        )
                    )
                    .padding(24.dp)
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    // Avatar
                    if (user?.photoUrl != null) {
                        AsyncImage(
                            model = user.photoUrl,
                            contentDescription = "Profile photo",
                            modifier = Modifier
                                .size(88.dp)
                                .clip(CircleShape)
                        )
                    } else {
                        Box(
                            modifier = Modifier
                                .size(88.dp)
                                .clip(CircleShape)
                                .background(ZyroPrimary),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = user?.displayName?.firstOrNull()?.uppercase() ?: "Z",
                                style = MaterialTheme.typography.headlineLarge,
                                color = ZyroOnBackground,
                                fontWeight = FontWeight.ExtraBold
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Text(
                        text = user?.displayName ?: "Athlete",
                        style = MaterialTheme.typography.headlineSmall,
                        color = ZyroOnBackground,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        text = user?.email ?: "",
                        style = MaterialTheme.typography.bodyMedium,
                        color = ZyroOnSurfaceVariant
                    )
                }
            }
        }

        // Stats Row
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            ProfileStatCard(
                label = "Current",
                value = if ((profile?.currentWeight ?: 0.0) > 0)
                    "${profile?.currentWeight} kg" else "--",
                modifier = Modifier.weight(1f)
            )
            ProfileStatCard(
                label = "Target",
                value = if ((profile?.targetWeight ?: 0.0) > 0)
                    "${profile?.targetWeight} kg" else "--",
                modifier = Modifier.weight(1f)
            )
        }

        // Info Items
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(20.dp),
            colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
        ) {
            Column(modifier = Modifier.padding(4.dp)) {
                ProfileInfoRow(
                    icon = Icons.Filled.Person,
                    label = "Name",
                    value = user?.displayName ?: "--"
                )
                HorizontalDivider(color = ZyroDivider, modifier = Modifier.padding(horizontal = 16.dp))
                ProfileInfoRow(
                    icon = Icons.Filled.Email,
                    label = "Email",
                    value = user?.email ?: "--"
                )
                HorizontalDivider(color = ZyroDivider, modifier = Modifier.padding(horizontal = 16.dp))
                ProfileInfoRow(
                    icon = Icons.Filled.FitnessCenter,
                    label = "Firebase UID",
                    value = uid.take(12) + "…"
                )
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Sign Out Button
        Button(
            onClick = { showSignOutDialog = true },
            modifier = Modifier
                .fillMaxWidth()
                .height(52.dp),
            shape = RoundedCornerShape(16.dp),
            colors = ButtonDefaults.buttonColors(
                containerColor = ZyroError.copy(alpha = 0.15f),
                contentColor = ZyroError
            )
        ) {
            Icon(Icons.Filled.ExitToApp, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Sign Out", fontWeight = FontWeight.Bold)
        }
    }

    // Sign Out Confirmation Dialog
    if (showSignOutDialog) {
        AlertDialog(
            onDismissRequest = { showSignOutDialog = false },
            containerColor = ZyroSurfaceVariant,
            title = { Text("Sign Out?", color = ZyroOnBackground) },
            text = { Text("You'll need to sign in again to access your data.", color = ZyroOnSurfaceVariant) },
            confirmButton = {
                TextButton(onClick = {
                    authViewModel.signOut()
                    showSignOutDialog = false
                }) {
                    Text("Sign Out", color = ZyroError, fontWeight = FontWeight.Bold)
                }
            },
            dismissButton = {
                TextButton(onClick = { showSignOutDialog = false }) {
                    Text("Cancel")
                }
            }
        )
    }
}

@Composable
fun ProfileStatCard(label: String, value: String, modifier: Modifier = Modifier) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = ZyroSurface)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = value,
                style = MaterialTheme.typography.headlineSmall,
                color = ZyroPrimary,
                fontWeight = FontWeight.ExtraBold
            )
            Text(
                text = label,
                style = MaterialTheme.typography.labelMedium,
                color = ZyroOnSurfaceVariant
            )
        }
    }
}

@Composable
fun ProfileInfoRow(icon: ImageVector, label: String, value: String) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(icon, contentDescription = null, tint = ZyroPrimary, modifier = Modifier.size(20.dp))
        Spacer(modifier = Modifier.width(12.dp))
        Column {
            Text(label, style = MaterialTheme.typography.labelSmall, color = ZyroOnSurfaceVariant)
            Text(value, style = MaterialTheme.typography.bodyMedium, color = ZyroOnBackground)
        }
    }
}
