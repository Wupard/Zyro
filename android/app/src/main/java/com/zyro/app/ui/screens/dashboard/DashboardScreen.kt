package com.zyro.app.ui.screens.dashboard

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.TrendingDown
import androidx.compose.material.icons.filled.TrendingUp
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.WeightEntry
import com.zyro.app.ui.theme.*
import java.text.SimpleDateFormat
import java.util.Locale
import kotlin.math.abs

@Composable
fun DashboardScreen(
    authViewModel: AuthViewModel,
    viewModel: DashboardViewModel = viewModel()
) {
    val uid = authViewModel.currentUserId ?: return
    val userProfile by viewModel.userProfile.collectAsState()
    val recentEntries by viewModel.recentWeightEntries.collectAsState()
    val isLoading by viewModel.isLoading.collectAsState()

    LaunchedEffect(uid) { viewModel.loadData(uid) }

    val currentWeight = userProfile?.currentWeight ?: 0.0
    val targetWeight = userProfile?.targetWeight ?: 0.0

    // Progress calculation
    val startWeight = recentEntries.lastOrNull()?.weight ?: currentWeight
    val totalToLose = if (startWeight > targetWeight) startWeight - targetWeight else 1.0
    val lost = if (startWeight > targetWeight) startWeight - currentWeight else 0.0
    val progressFraction = (lost / totalToLose).coerceIn(0.0, 1.0).toFloat()

    val animatedProgress by animateFloatAsState(
        targetValue = progressFraction,
        animationSpec = tween(1200),
        label = "progressAnim"
    )

    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .background(ZyroBackground),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Header
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "Welcome back,",
                        style = MaterialTheme.typography.bodyMedium,
                        color = ZyroOnSurfaceVariant
                    )
                    Text(
                        text = userProfile?.displayName?.split(" ")?.firstOrNull() ?: "Athlete",
                        style = MaterialTheme.typography.headlineMedium,
                        color = ZyroOnBackground,
                        fontWeight = FontWeight.ExtraBold
                    )
                }

                if (userProfile?.photoUrl?.isNotEmpty() == true) {
                    AsyncImage(
                        model = userProfile!!.photoUrl,
                        contentDescription = "Profile photo",
                        modifier = Modifier
                            .size(48.dp)
                            .clip(CircleShape)
                    )
                } else {
                    Box(
                        modifier = Modifier
                            .size(48.dp)
                            .clip(CircleShape)
                            .background(ZyroPrimary),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = userProfile?.displayName?.firstOrNull()?.uppercase() ?: "Z",
                            style = MaterialTheme.typography.titleMedium,
                            color = ZyroOnBackground,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }
        }

        // Weight Cards Row
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                WeightStatCard(
                    label = "Current",
                    value = if (currentWeight > 0) "${currentWeight}kg" else "--",
                    gradient = listOf(ZyroPrimary.copy(0.8f), ZyroPrimary.copy(0.4f)),
                    modifier = Modifier.weight(1f)
                )
                WeightStatCard(
                    label = "Target",
                    value = if (targetWeight > 0) "${targetWeight}kg" else "--",
                    gradient = listOf(ZyroSecondary.copy(0.8f), ZyroSecondary.copy(0.4f)),
                    modifier = Modifier.weight(1f)
                )
            }
        }

        // Progress to Goal Card
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(20.dp),
                colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
            ) {
                Column(modifier = Modifier.padding(20.dp)) {
                    Text(
                        text = "Progress to Goal",
                        style = MaterialTheme.typography.titleMedium,
                        color = ZyroOnSurface,
                        fontWeight = FontWeight.Bold
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = if (targetWeight > 0 && currentWeight > 0) {
                            val diff = currentWeight - targetWeight
                            if (diff > 0) "${String.format("%.1f", diff)} kg to go"
                            else "Goal reached! 🎉"
                        } else "Set your target weight to track progress",
                        style = MaterialTheme.typography.bodySmall,
                        color = ZyroOnSurfaceVariant
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    LinearProgressIndicator(
                        progress = { animatedProgress },
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(10.dp)
                            .clip(RoundedCornerShape(50.dp)),
                        color = ZyroPrimary,
                        trackColor = ZyroSurfaceContainer,
                        strokeCap = StrokeCap.Round
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(
                            text = "${String.format("%.0f", progressFraction * 100)}%",
                            style = MaterialTheme.typography.labelMedium,
                            color = ZyroPrimary,
                            fontWeight = FontWeight.Bold
                        )
                        Text(
                            text = if (lost >= 0) "−${String.format("%.1f", abs(lost))} kg lost" else "",
                            style = MaterialTheme.typography.labelMedium,
                            color = ZyroSecondary
                        )
                    }
                }
            }
        }

        // Recent Entries Header
        item {
            Text(
                text = "Recent Logs",
                style = MaterialTheme.typography.titleMedium,
                color = ZyroOnBackground,
                fontWeight = FontWeight.Bold
            )
        }

        if (isLoading) {
            item {
                Box(modifier = Modifier.fillMaxWidth(), contentAlignment = Alignment.Center) {
                    CircularProgressIndicator(color = ZyroPrimary)
                }
            }
        } else if (recentEntries.isEmpty()) {
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(32.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = "No weight entries yet.\nTap Weight to log your first entry!",
                            style = MaterialTheme.typography.bodyMedium,
                            color = ZyroOnSurfaceVariant,
                            textAlign = androidx.compose.ui.text.style.TextAlign.Center
                        )
                    }
                }
            }
        } else {
            items(recentEntries.take(5)) { entry ->
                WeightEntryRow(entry = entry, targetWeight = targetWeight)
            }
        }
    }
}

@Composable
fun WeightStatCard(
    label: String,
    value: String,
    gradient: List<androidx.compose.ui.graphics.Color>,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    Brush.verticalGradient(gradient),
                    RoundedCornerShape(20.dp)
                )
                .padding(20.dp)
        ) {
            Column {
                Text(
                    text = label,
                    style = MaterialTheme.typography.labelMedium,
                    color = ZyroOnBackground.copy(alpha = 0.7f)
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = value,
                    style = MaterialTheme.typography.headlineSmall,
                    color = ZyroOnBackground,
                    fontWeight = FontWeight.ExtraBold
                )
            }
        }
    }
}

@Composable
fun WeightEntryRow(entry: WeightEntry, targetWeight: Double) {
    val dateFormat = SimpleDateFormat("MMM dd, yyyy", Locale.getDefault())
    val isAboveTarget = entry.weight > targetWeight && targetWeight > 0
    val icon = if (isAboveTarget) Icons.Filled.TrendingDown else Icons.Filled.TrendingUp
    val iconTint = if (isAboveTarget) ZyroWarning else ZyroSuccess

    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = ZyroSurface)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = iconTint,
                    modifier = Modifier.size(20.dp)
                )
                Spacer(modifier = Modifier.width(12.dp))
                Column {
                    Text(
                        text = "${entry.weight} kg",
                        style = MaterialTheme.typography.titleMedium,
                        color = ZyroOnBackground,
                        fontWeight = FontWeight.SemiBold
                    )
                    if (entry.notes.isNotEmpty()) {
                        Text(
                            text = entry.notes,
                            style = MaterialTheme.typography.bodySmall,
                            color = ZyroOnSurfaceVariant
                        )
                    }
                }
            }
            Text(
                text = dateFormat.format(entry.date.toDate()),
                style = MaterialTheme.typography.labelMedium,
                color = ZyroOnSurfaceVariant
            )
        }
    }
}
