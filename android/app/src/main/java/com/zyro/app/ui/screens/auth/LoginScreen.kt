package com.zyro.app.ui.screens.auth

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.FitnessCenter
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zyro.app.auth.AuthState
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.ui.theme.*

@Composable
fun LoginScreen(authViewModel: AuthViewModel) {
    val authState by authViewModel.authState.collectAsState()
    val context = LocalContext.current
    val isLoading = authState is AuthState.Loading

    // Fade-in animation
    var visible by remember { mutableStateOf(false) }
    val alpha by animateFloatAsState(
        targetValue = if (visible) 1f else 0f,
        animationSpec = tween(durationMillis = 800),
        label = "fadeIn"
    )
    LaunchedEffect(Unit) { visible = true }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                Brush.verticalGradient(
                    colors = listOf(ZyroBackground, ZyroSurface, ZyroBackground)
                )
            )
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(32.dp)
                .alpha(alpha),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            // Logo / Brand Icon
            Box(
                modifier = Modifier
                    .size(100.dp)
                    .background(
                        Brush.radialGradient(
                            colors = listOf(ZyroPrimary.copy(alpha = 0.3f), ZyroPrimary.copy(alpha = 0f))
                        ),
                        shape = RoundedCornerShape(32.dp)
                    ),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Filled.FitnessCenter,
                    contentDescription = "Zyro Logo",
                    tint = ZyroPrimary,
                    modifier = Modifier.size(56.dp)
                )
            }

            Spacer(modifier = Modifier.height(28.dp))

            Text(
                text = "Zyro",
                style = MaterialTheme.typography.displayMedium,
                color = ZyroOnBackground,
                fontWeight = FontWeight.ExtraBold,
                letterSpacing = (-2).sp
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "Track your fitness journey.\nEvery rep. Every pound.",
                style = MaterialTheme.typography.bodyLarge,
                color = ZyroOnSurfaceVariant,
                textAlign = TextAlign.Center,
                lineHeight = 24.sp
            )

            Spacer(modifier = Modifier.height(64.dp))

            // Google Sign-In Button
            Button(
                onClick = {
                    // Replace with your Web Client ID from google-services.json
                    val webClientId = context.getString(
                        com.zyro.app.R.string.default_web_client_id
                    )
                    authViewModel.signInWithGoogle(context, webClientId)
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                enabled = !isLoading,
                shape = RoundedCornerShape(16.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = ZyroPrimary,
                    contentColor = ZyroOnBackground
                ),
                elevation = ButtonDefaults.buttonElevation(defaultElevation = 8.dp)
            ) {
                if (isLoading) {
                    CircularProgressIndicator(
                        color = ZyroOnBackground,
                        modifier = Modifier.size(24.dp),
                        strokeWidth = 2.dp
                    )
                } else {
                    Text(
                        text = "Continue with Google",
                        style = MaterialTheme.typography.labelLarge,
                        fontWeight = FontWeight.Bold
                    )
                }
            }

            // Error message
            val errorState = authState as? AuthState.Error
            if (errorState != null) {
                Spacer(modifier = Modifier.height(16.dp))
                Card(
                    colors = CardDefaults.cardColors(
                        containerColor = ZyroError.copy(alpha = 0.15f)
                    ),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text(
                        text = errorState.message,
                        color = ZyroError,
                        style = MaterialTheme.typography.bodySmall,
                        modifier = Modifier.padding(12.dp),
                        textAlign = TextAlign.Center
                    )
                }
            }

            Spacer(modifier = Modifier.height(40.dp))

            Text(
                text = "By continuing, you agree to our Terms of Service\nand Privacy Policy.",
                style = MaterialTheme.typography.bodySmall,
                color = ZyroOnSurfaceVariant.copy(alpha = 0.6f),
                textAlign = TextAlign.Center
            )
        }
    }
}
