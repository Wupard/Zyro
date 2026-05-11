package com.zyro.app.navigation

import androidx.compose.animation.AnimatedContentTransitionScope
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AdminPanelSettings
import androidx.compose.material.icons.filled.ChatBubbleOutline
import androidx.compose.material.icons.filled.Dashboard
import androidx.compose.material.icons.filled.FitnessCenter
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material.icons.filled.PhotoLibrary
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Badge
import androidx.compose.material3.BadgedBox
import androidx.compose.material3.DrawerValue
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.ModalDrawerSheet
import androidx.compose.material3.ModalNavigationDrawer
import androidx.compose.material3.NavigationDrawerItem
import androidx.compose.material3.NavigationDrawerItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.material3.rememberDrawerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.AppNotification
import com.zyro.app.data.model.NotificationType
import com.zyro.app.data.repository.NotificationRepository
import com.zyro.app.ui.screens.admin.AdminScreen
import com.zyro.app.ui.screens.comments.CommentsScreen
import com.zyro.app.ui.screens.dashboard.DashboardScreen
import com.zyro.app.ui.screens.photos.PhotosScreen
import com.zyro.app.ui.screens.profile.ProfileScreen
import com.zyro.app.ui.screens.weight.WeightScreen
import com.zyro.app.ui.theme.ZyroOnBackground
import com.zyro.app.ui.theme.ZyroPrimary
import com.zyro.app.ui.theme.ZyroSurface
import kotlinx.coroutines.launch

sealed class Screen(val route: String, val label: String, val icon: ImageVector) {
    object Dashboard : Screen("dashboard", "Panel", Icons.Filled.Dashboard)
    object Weight : Screen("weight", "Kilo", Icons.Filled.FitnessCenter)
    object Photos : Screen("photos", "Fotoğraflar", Icons.Filled.PhotoLibrary)
    object Comments : Screen("comments", "Yorumlar", Icons.Filled.ChatBubbleOutline)
    object Profile : Screen("profile", "Profil", Icons.Filled.Person)
    object Admin : Screen("admin", "Yönetici", Icons.Filled.AdminPanelSettings)
}

private val drawerScreens = listOf(
    Screen.Dashboard,
    Screen.Weight,
    Screen.Photos,
    Screen.Comments,
    Screen.Profile
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ZyroNavGraph(authViewModel: AuthViewModel) {
    val uid = authViewModel.currentUserId ?: return
    val navController = rememberNavController()
    val drawerState = rememberDrawerState(DrawerValue.Closed)
    val scope = rememberCoroutineScope()
    val me by authViewModel.meProfile.collectAsState()

    val notifRepo = remember { NotificationRepository() }
    val notifications by notifRepo.notificationsFlow(uid).collectAsState(initial = emptyList())
    val unread = notifications.count { !it.read }

    var highlightCommentRoot by remember { mutableStateOf<String?>(null) }
    var notifDetail by remember { mutableStateOf<AppNotification?>(null) }
    var notifListOpen by remember { mutableStateOf(false) }

    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route ?: Screen.Dashboard.route

    fun navigate(route: String) {
        navController.navigate(route) {
            popUpTo(navController.graph.findStartDestination().id) { saveState = true }
            launchSingleTop = true
            restoreState = true
        }
        scope.launch { drawerState.close() }
    }

    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent = {
            ModalDrawerSheet {
                Text(
                    "Zyro",
                    style = MaterialTheme.typography.titleLarge,
                    modifier = Modifier.padding(horizontal = 28.dp, vertical = 24.dp),
                    color = ZyroPrimary,
                    fontWeight = FontWeight.Bold
                )
                drawerScreens.forEach { screen ->
                    NavigationDrawerItem(
                        icon = { Icon(screen.icon, contentDescription = null) },
                        label = { Text(screen.label) },
                        selected = currentRoute == screen.route,
                        onClick = { navigate(screen.route) },
                        modifier = Modifier.padding(NavigationDrawerItemDefaults.ItemPadding)
                    )
                }
                if (me?.isAdmin == true) {
                    NavigationDrawerItem(
                        icon = { Icon(Screen.Admin.icon, contentDescription = null) },
                        label = { Text(Screen.Admin.label) },
                        selected = currentRoute == Screen.Admin.route,
                        onClick = { navigate(Screen.Admin.route) },
                        modifier = Modifier.padding(NavigationDrawerItemDefaults.ItemPadding)
                    )
                }
            }
        }
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = {
                        Text(
                            drawerScreens.find { it.route == currentRoute }?.label
                                ?: if (currentRoute == Screen.Admin.route) Screen.Admin.label
                                else Screen.Dashboard.label
                        )
                    },
                    navigationIcon = {
                        IconButton(onClick = { scope.launch { drawerState.open() } }) {
                            Icon(Icons.Filled.Menu, contentDescription = "Menü")
                        }
                    },
                    actions = {
                        BadgedBox(
                            badge = {
                                if (unread > 0) Badge { Text(if (unread > 9) "9+" else unread.toString()) }
                            }
                        ) {
                            IconButton(onClick = { notifListOpen = true }) {
                                Icon(Icons.Filled.Notifications, contentDescription = "Bildirimler")
                            }
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = ZyroSurface,
                        titleContentColor = ZyroOnBackground
                    )
                )
            }
        ) { innerPadding ->
            Box(Modifier.padding(innerPadding)) {
                NavHostWithTransitions(
                    navController = navController,
                    authViewModel = authViewModel,
                    highlightCommentRoot = highlightCommentRoot,
                    onConsumedHighlight = { highlightCommentRoot = null }
                )
            }
        }
    }

    if (notifListOpen) {
        AlertDialog(
            onDismissRequest = { notifListOpen = false },
            title = { Text("Bildirimler") },
            text = {
                if (notifications.isEmpty()) {
                    Text("Bildirim yok.")
                } else {
                    Column(
                        Modifier
                            .heightIn(max = 400.dp)
                            .verticalScroll(rememberScrollState())
                    ) {
                        notifications.forEach { n ->
                            TextButton(
                                onClick = {
                                    notifListOpen = false
                                    notifDetail = n
                                    scope.launch {
                                        if (!n.read) notifRepo.markRead(uid, n.id)
                                    }
                                },
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Column(Modifier.fillMaxWidth()) {
                                    Text(
                                        n.title,
                                        fontWeight = FontWeight.SemiBold,
                                        color = if (n.read) MaterialTheme.colorScheme.onSurfaceVariant else ZyroOnBackground
                                    )
                                    Text(
                                        n.body.take(80) + if (n.body.length > 80) "…" else "",
                                        style = MaterialTheme.typography.bodySmall
                                    )
                                }
                            }
                        }
                    }
                }
            },
            confirmButton = {
                TextButton(onClick = { notifListOpen = false }) { Text("Kapat") }
            }
        )
    }

    notifDetail?.let { n ->
        AlertDialog(
            onDismissRequest = { notifDetail = null },
            title = { Text(n.title) },
            text = { Text(n.body) },
            confirmButton = {
                if (n.typeEnum() == NotificationType.COMMENT_REPLY && n.relatedRootCommentId.isNotEmpty()) {
                    TextButton(
                        onClick = {
                            highlightCommentRoot = n.relatedRootCommentId
                            navigate(Screen.Comments.route)
                            notifDetail = null
                        }
                    ) { Text("Yoruma git") }
                } else {
                    TextButton(onClick = { notifDetail = null }) { Text("Tamam") }
                }
            },
            dismissButton = {
                TextButton(onClick = { notifDetail = null }) { Text("Kapat") }
            }
        )
    }
}

@Composable
private fun NavHostWithTransitions(
    navController: NavHostController,
    authViewModel: AuthViewModel,
    highlightCommentRoot: String?,
    onConsumedHighlight: () -> Unit
) {
    NavHost(
        navController = navController,
        startDestination = Screen.Dashboard.route,
        modifier = Modifier.fillMaxSize(),
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
        composable(Screen.Comments.route) {
            CommentsScreen(
                authViewModel = authViewModel,
                highlightRootId = highlightCommentRoot,
                onConsumedHighlight = onConsumedHighlight
            )
        }
        composable(Screen.Profile.route) {
            ProfileScreen(authViewModel = authViewModel)
        }
        composable(Screen.Admin.route) {
            AdminScreen(authViewModel = authViewModel)
        }
    }
}
