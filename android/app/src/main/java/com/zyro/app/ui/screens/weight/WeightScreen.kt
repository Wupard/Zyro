package com.zyro.app.ui.screens.weight

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.WeightEntry
import com.zyro.app.ui.theme.*
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun WeightScreen(
    authViewModel: AuthViewModel,
    viewModel: WeightViewModel = viewModel()
) {
    val uid = authViewModel.currentUserId ?: return
    val weightEntries by viewModel.weightEntries.collectAsState()
    val isSaving by viewModel.isSaving.collectAsState()
    val saveSuccess by viewModel.saveSuccess.collectAsState()
    val error by viewModel.error.collectAsState()

    var showAddDialog by remember { mutableStateOf(false) }
    var showGoalDialog by remember { mutableStateOf(false) }

    LaunchedEffect(uid) { viewModel.loadData(uid) }

    LaunchedEffect(saveSuccess) {
        if (saveSuccess) {
            showAddDialog = false
            viewModel.clearSaveSuccess()
        }
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(ZyroBackground)
    ) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Weight Log",
                        style = MaterialTheme.typography.headlineMedium,
                        color = ZyroOnBackground,
                        fontWeight = FontWeight.ExtraBold
                    )
                    TextButton(onClick = { showGoalDialog = true }) {
                        Text("Set Goals", color = ZyroPrimary)
                    }
                }
            }

            if (weightEntries.isEmpty()) {
                item {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(top = 60.dp),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text("📊", fontSize = androidx.compose.ui.unit.TextUnit(48f, androidx.compose.ui.unit.TextUnitType.Sp))
                            Spacer(modifier = Modifier.height(16.dp))
                            Text(
                                text = "No weight entries yet",
                                style = MaterialTheme.typography.titleMedium,
                                color = ZyroOnBackground
                            )
                            Text(
                                text = "Tap + to log your first weight",
                                style = MaterialTheme.typography.bodyMedium,
                                color = ZyroOnSurfaceVariant,
                                textAlign = TextAlign.Center
                            )
                        }
                    }
                }
            } else {
                items(weightEntries, key = { it.id }) { entry ->
                    WeightLogCard(
                        entry = entry,
                        onDelete = { viewModel.deleteEntry(uid, entry.id) }
                    )
                }
            }
        }

        // FAB
        FloatingActionButton(
            onClick = { showAddDialog = true },
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(24.dp),
            containerColor = ZyroPrimary,
            contentColor = ZyroOnBackground
        ) {
            Icon(Icons.Filled.Add, contentDescription = "Add weight entry")
        }
    }

    // Error snackbar
    if (error != null) {
        LaunchedEffect(error) {
            kotlinx.coroutines.delay(3000)
            viewModel.clearError()
        }
    }

    // Add Entry Dialog
    if (showAddDialog) {
        AddWeightDialog(
            isSaving = isSaving,
            onDismiss = { showAddDialog = false },
            onSave = { weight, date, notes ->
                viewModel.addWeightEntry(uid, weight, date, notes)
            }
        )
    }

    // Set Goals Dialog
    if (showGoalDialog) {
        SetGoalsDialog(
            onDismiss = { showGoalDialog = false },
            onSave = { current, target ->
                viewModel.updateWeightGoals(uid, current, target)
                showGoalDialog = false
            }
        )
    }
}

@Composable
fun WeightLogCard(entry: WeightEntry, onDelete: () -> Unit) {
    val dateFormat = SimpleDateFormat("EEE, MMM dd yyyy", Locale.getDefault())
    var showDeleteConfirm by remember { mutableStateOf(false) }

    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = "${entry.weight} kg",
                    style = MaterialTheme.typography.headlineSmall,
                    color = ZyroPrimary,
                    fontWeight = FontWeight.ExtraBold
                )
                Text(
                    text = dateFormat.format(entry.date.toDate()),
                    style = MaterialTheme.typography.bodySmall,
                    color = ZyroOnSurfaceVariant
                )
                if (entry.notes.isNotEmpty()) {
                    Text(
                        text = entry.notes,
                        style = MaterialTheme.typography.bodySmall,
                        color = ZyroOnSurfaceVariant
                    )
                }
            }

            IconButton(
                onClick = { showDeleteConfirm = true }
            ) {
                Icon(
                    Icons.Filled.Delete,
                    contentDescription = "Delete",
                    tint = ZyroError.copy(alpha = 0.7f)
                )
            }
        }
    }

    if (showDeleteConfirm) {
        AlertDialog(
            onDismissRequest = { showDeleteConfirm = false },
            title = { Text("Delete Entry") },
            text = { Text("Remove ${entry.weight} kg from ${dateFormat.format(entry.date.toDate())}?") },
            confirmButton = {
                TextButton(onClick = {
                    onDelete()
                    showDeleteConfirm = false
                }) {
                    Text("Delete", color = ZyroError)
                }
            },
            dismissButton = {
                TextButton(onClick = { showDeleteConfirm = false }) {
                    Text("Cancel")
                }
            },
            containerColor = ZyroSurfaceVariant
        )
    }
}

@Composable
fun AddWeightDialog(
    isSaving: Boolean,
    onDismiss: () -> Unit,
    onSave: (Double, Date, String) -> Unit
) {
    var weightText by remember { mutableStateOf("") }
    var notes by remember { mutableStateOf("") }
    val today = remember { Date() }

    AlertDialog(
        onDismissRequest = onDismiss,
        containerColor = ZyroSurfaceVariant,
        title = {
            Text(
                "Log Weight",
                style = MaterialTheme.typography.titleLarge,
                color = ZyroOnBackground,
                fontWeight = FontWeight.Bold
            )
        },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                OutlinedTextField(
                    value = weightText,
                    onValueChange = { weightText = it },
                    label = { Text("Weight (kg)") },
                    placeholder = { Text("e.g. 75.5") },
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth(),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = ZyroPrimary,
                        focusedLabelColor = ZyroPrimary,
                        cursorColor = ZyroPrimary,
                        unfocusedTextColor = ZyroOnBackground,
                        focusedTextColor = ZyroOnBackground
                    )
                )
                OutlinedTextField(
                    value = notes,
                    onValueChange = { notes = it },
                    label = { Text("Notes (optional)") },
                    singleLine = false,
                    maxLines = 2,
                    modifier = Modifier.fillMaxWidth(),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = ZyroPrimary,
                        focusedLabelColor = ZyroPrimary,
                        cursorColor = ZyroPrimary,
                        unfocusedTextColor = ZyroOnBackground,
                        focusedTextColor = ZyroOnBackground
                    )
                )
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    val w = weightText.toDoubleOrNull()
                    if (w != null && w > 0) {
                        onSave(w, today, notes)
                    }
                },
                enabled = !isSaving && weightText.toDoubleOrNull() != null,
                colors = ButtonDefaults.buttonColors(containerColor = ZyroPrimary)
            ) {
                if (isSaving) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(18.dp),
                        color = ZyroOnBackground,
                        strokeWidth = 2.dp
                    )
                } else {
                    Text("Save")
                }
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel", color = ZyroOnSurfaceVariant)
            }
        }
    )
}

@Composable
fun SetGoalsDialog(
    onDismiss: () -> Unit,
    onSave: (Double, Double) -> Unit
) {
    var currentText by remember { mutableStateOf("") }
    var targetText by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        containerColor = ZyroSurfaceVariant,
        title = {
            Text(
                "Set Weight Goals",
                style = MaterialTheme.typography.titleLarge,
                color = ZyroOnBackground,
                fontWeight = FontWeight.Bold
            )
        },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                OutlinedTextField(
                    value = currentText,
                    onValueChange = { currentText = it },
                    label = { Text("Current Weight (kg)") },
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth(),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = ZyroPrimary,
                        focusedLabelColor = ZyroPrimary,
                        cursorColor = ZyroPrimary,
                        unfocusedTextColor = ZyroOnBackground,
                        focusedTextColor = ZyroOnBackground
                    )
                )
                OutlinedTextField(
                    value = targetText,
                    onValueChange = { targetText = it },
                    label = { Text("Target Weight (kg)") },
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth(),
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedBorderColor = ZyroSecondary,
                        focusedLabelColor = ZyroSecondary,
                        cursorColor = ZyroSecondary,
                        unfocusedTextColor = ZyroOnBackground,
                        focusedTextColor = ZyroOnBackground
                    )
                )
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    val c = currentText.toDoubleOrNull()
                    val t = targetText.toDoubleOrNull()
                    if (c != null && t != null) onSave(c, t)
                },
                enabled = currentText.toDoubleOrNull() != null && targetText.toDoubleOrNull() != null,
                colors = ButtonDefaults.buttonColors(containerColor = ZyroPrimary)
            ) {
                Text("Save Goals")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel", color = ZyroOnSurfaceVariant)
            }
        }
    )
}
