package com.zyro.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import com.zyro.app.auth.AuthState
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.navigation.ZyroNavGraph
import com.zyro.app.ui.screens.auth.LoginScreen
import com.zyro.app.ui.theme.ZyroTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ZyroTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    ZyroApp()
                }
            }
        }
    }
}

@Composable
fun ZyroApp() {
    val authViewModel: AuthViewModel = viewModel()
    val authState by authViewModel.authState.collectAsState()

    when (authState) {
        is AuthState.Authenticated -> {
            ZyroNavGraph(authViewModel = authViewModel)
        }
        is AuthState.Unauthenticated, is AuthState.Error -> {
            LoginScreen(authViewModel = authViewModel)
        }
        is AuthState.Loading -> {
            // Splash/loading — handled inside LoginScreen
            LoginScreen(authViewModel = authViewModel)
        }
    }
}
