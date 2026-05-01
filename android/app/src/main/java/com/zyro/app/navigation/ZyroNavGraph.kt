package com.zyro.app.navigation

import androidx.compose.animation.AnimatedContentTransitionScope
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Dashboard
import androidx.compose.material.icons.filled.FitnessCenter
import androidx.compose.material.icons.filled.PhotoLibrary
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.ui.screens.dashboard.DashboardScreen
import com.zyro.app.ui.screens.photos.PhotosScreen
import com.zyro.app.ui.screens.profile.ProfileScreen
import com.zyro.app.ui.screens.weight.WeightScreen
import com.zyro.app.ui.theme.ZyroPrimary
import com.zyro.app.ui.theme.ZyroSurface
import com.zyro.app.ui.theme.ZyroSurfaceVariant

sealed class Screen(val route: String, val label: String, val icon: ImageVector) {
    object Dashboard : Screen("dashboard", "Dashboard", Icons.Filled.Dashboard)
    object Weight : Screen("weight", "Weight", Icons.Filled.FitnessCenter)
    object Photos : Screen("photos", "Photos", Icons.Filled.PhotoLibrary)
    object Profile : Screen("profile", "Profile", Icons.Filled.Person)
}

val bottomNavItems = listOf(
    Screen.Dashboard,
    Screen.Weight,
    Screen.Photos,
    Screen.Profile
)

@Composable
fun ZyroNavGraph(authViewModel: AuthViewModel) {
    val navController = rememberNavController()

    Scaffold(
        bottomBar = {
            val navBackStackEntry by navController.currentBackStackEntryAsState()
            val currentDestination = navBackStackEntry?.destination

            NavigationBar(
                containerColor = ZyroSurface,
                contentColor = ZyroPrimary
            ) {
                bottomNavItems.forEach { screen ->
                    val selected = currentDestination?.hierarchy?.any {
                        it.route == screen.route
                    } == true

                    NavigationBarItem(
                        icon = { Icon(screen.icon, contentDescription = screen.label) },
                        label = { Text(screen.label, style = MaterialTheme.typography.labelSmall) },
                        selected = selected,
                        onClick = {
                            navController.navigate(screen.route) {
                                popUpTo(navController.graph.findStartDestination().id) {
                                    saveState = true
                                }
                                launchSingleTop = true
                                restoreState = true
                            }
                        },
                        colors = NavigationBarItemDefaults.colors(
                            selectedIconColor = ZyroPrimary,
                            selectedTextColor = ZyroPrimary,
                            unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                            unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant,
                            indicatorColor = ZyroSurfaceVariant
                        )
                    )
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.Dashboard.route,
            modifier = Modifier.padding(innerPadding),
            enterTransition = {
                slideIntoContainer(
                    AnimatedContentTransitionScope.SlideDirection.Left,
                    tween(300)
                )
            },
            exitTransition = {
                slideOutOfContainer(
                    AnimatedContentTransitionScope.SlideDirection.Left,
                    tween(300)
                )
            },
            popEnterTransition = {
                slideIntoContainer(
                    AnimatedContentTransitionScope.SlideDirection.Right,
                    tween(300)
                )
            },
            popExitTransition = {
                slideOutOfContainer(
                    AnimatedContentTransitionScope.SlideDirection.Right,
                    tween(300)
                )
            }
        ) {
            composable(Screen.Dashboard.route) {
                DashboardScreen(authViewModel = authViewModel)
            }
            composable(Screen.Weight.route) {
                WeightScreen(authViewModel = authViewModel)
            }
            composable(Screen.Photos.route) {
                PhotosScreen(authViewModel = authViewModel)
            }
            composable(Screen.Profile.route) {
                ProfileScreen(authViewModel = authViewModel)
            }
        }
    }
}
