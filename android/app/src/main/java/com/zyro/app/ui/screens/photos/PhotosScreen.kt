package com.zyro.app.ui.screens.photos

import android.Manifest
import android.net.Uri
import android.os.Build
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AddAPhoto
import androidx.compose.material.icons.filled.CameraAlt
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Image
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.core.content.FileProvider
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.ProgressPhoto
import com.zyro.app.ui.theme.*
import java.io.File
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PhotosScreen(
    authViewModel: AuthViewModel,
    viewModel: PhotosViewModel = viewModel()
) {
    val uid = authViewModel.currentUserId ?: return
    val context = LocalContext.current
    val photos by viewModel.photos.collectAsState()
    val isUploading by viewModel.isUploading.collectAsState()
    val uploadSuccess by viewModel.uploadSuccess.collectAsState()

    var showUploadDialog by remember { mutableStateOf(false) }
    var pendingUri by remember { mutableStateOf<Uri?>(null) }
    var selectedTab by remember { mutableIntStateOf(0) }  // 0=All, 1=Before, 2=After
    var expandedPhoto by remember { mutableStateOf<ProgressPhoto?>(null) }

    // Camera URI
    var cameraImageUri by remember { mutableStateOf<Uri?>(null) }

    LaunchedEffect(uid) { viewModel.loadPhotos(uid) }

    LaunchedEffect(uploadSuccess) {
        if (uploadSuccess) {
            showUploadDialog = false
            pendingUri = null
            viewModel.clearUploadSuccess()
        }
    }

    // Camera launcher
    val cameraLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.TakePicture()
    ) { success ->
        if (success && cameraImageUri != null) {
            pendingUri = cameraImageUri
            showUploadDialog = true
        }
    }

    // Gallery launcher
    val galleryLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.GetContent()
    ) { uri ->
        if (uri != null) {
            pendingUri = uri
            showUploadDialog = true
        }
    }

    // Camera permission
    val cameraPermissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        if (granted) {
            val photoFile = File.createTempFile(
                "PHOTO_${System.currentTimeMillis()}_", ".jpg",
                context.getExternalFilesDir("Pictures")
            )
            val uri = FileProvider.getUriForFile(
                context, "${context.packageName}.fileprovider", photoFile
            )
            cameraImageUri = uri
            cameraLauncher.launch(uri)
        }
    }

    // Storage permission launcher
    val storagePermissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { _ -> galleryLauncher.launch("image/*") }

    var showSourcePicker by remember { mutableStateOf(false) }

    val filteredPhotos = when (selectedTab) {
        1 -> photos.filter { it.type == "before" }
        2 -> photos.filter { it.type == "after" }
        else -> photos
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(ZyroBackground)
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            // Header
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "Progress Photos",
                    style = MaterialTheme.typography.headlineMedium,
                    color = ZyroOnBackground,
                    fontWeight = FontWeight.ExtraBold
                )
                Text(
                    text = "${photos.size} photos",
                    style = MaterialTheme.typography.bodySmall,
                    color = ZyroOnSurfaceVariant
                )
            }

            // Filter Tabs
            TabRow(
                selectedTabIndex = selectedTab,
                containerColor = ZyroSurface,
                contentColor = ZyroPrimary,
                modifier = Modifier.fillMaxWidth()
            ) {
                listOf("All", "Before", "After").forEachIndexed { index, label ->
                    Tab(
                        selected = selectedTab == index,
                        onClick = { selectedTab = index },
                        text = {
                            Text(
                                label,
                                style = MaterialTheme.typography.labelLarge
                            )
                        }
                    )
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            if (filteredPhotos.isEmpty()) {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(bottom = 80.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text("📸", fontSize = androidx.compose.ui.unit.TextUnit(48f, androidx.compose.ui.unit.TextUnitType.Sp))
                        Spacer(modifier = Modifier.height(16.dp))
                        Text(
                            text = "No photos yet",
                            style = MaterialTheme.typography.titleMedium,
                            color = ZyroOnBackground
                        )
                        Text(
                            text = "Tap + to add a before or after photo",
                            style = MaterialTheme.typography.bodyMedium,
                            color = ZyroOnSurfaceVariant
                        )
                    }
                }
            } else {
                LazyVerticalGrid(
                    columns = GridCells.Fixed(2),
                    contentPadding = PaddingValues(horizontal = 12.dp, vertical = 8.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp),
                    modifier = Modifier.fillMaxSize()
                ) {
                    items(filteredPhotos, key = { it.id }) { photo ->
                        PhotoCard(
                            photo = photo,
                            onClick = { expandedPhoto = photo },
                            onDelete = { viewModel.deletePhoto(uid, photo) }
                        )
                    }
                }
            }
        }

        // FAB
        FloatingActionButton(
            onClick = { showSourcePicker = true },
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(24.dp),
            containerColor = ZyroPrimary,
            contentColor = ZyroOnBackground
        ) {
            if (isUploading) {
                CircularProgressIndicator(
                    color = ZyroOnBackground,
                    modifier = Modifier.size(24.dp),
                    strokeWidth = 2.dp
                )
            } else {
                Icon(Icons.Filled.AddAPhoto, contentDescription = "Add photo")
            }
        }
    }

    // Source Picker Dialog (Camera / Gallery)
    if (showSourcePicker) {
        AlertDialog(
            onDismissRequest = { showSourcePicker = false },
            containerColor = ZyroSurfaceVariant,
            title = {
                Text(
                    "Add Photo",
                    style = MaterialTheme.typography.titleLarge,
                    color = ZyroOnBackground,
                    fontWeight = FontWeight.Bold
                )
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Button(
                        onClick = {
                            showSourcePicker = false
                            cameraPermissionLauncher.launch(Manifest.permission.CAMERA)
                        },
                        modifier = Modifier.fillMaxWidth(),
                        colors = ButtonDefaults.buttonColors(containerColor = ZyroSurfaceContainer)
                    ) {
                        Icon(Icons.Filled.CameraAlt, contentDescription = null, tint = ZyroPrimary)
                        Spacer(modifier = Modifier.width(8.dp))
                        Text("Camera", color = ZyroOnBackground)
                    }
                    Button(
                        onClick = {
                            showSourcePicker = false
                            val permission = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                                Manifest.permission.READ_MEDIA_IMAGES
                            } else {
                                Manifest.permission.READ_EXTERNAL_STORAGE
                            }
                            storagePermissionLauncher.launch(permission)
                        },
                        modifier = Modifier.fillMaxWidth(),
                        colors = ButtonDefaults.buttonColors(containerColor = ZyroSurfaceContainer)
                    ) {
                        Icon(Icons.Filled.Image, contentDescription = null, tint = ZyroSecondary)
                        Spacer(modifier = Modifier.width(8.dp))
                        Text("Gallery", color = ZyroOnBackground)
                    }
                }
            },
            confirmButton = {},
            dismissButton = {
                TextButton(onClick = { showSourcePicker = false }) {
                    Text("Cancel", color = ZyroOnSurfaceVariant)
                }
            }
        )
    }

    // Upload Type Dialog
    if (showUploadDialog && pendingUri != null) {
        UploadPhotoDialog(
            isUploading = isUploading,
            onDismiss = {
                showUploadDialog = false
                pendingUri = null
            },
            onUpload = { type, notes ->
                viewModel.uploadPhoto(uid, pendingUri!!, type, notes)
            }
        )
    }

    // Expanded photo viewer
    if (expandedPhoto != null) {
        PhotoDetailDialog(
            photo = expandedPhoto!!,
            onDismiss = { expandedPhoto = null },
            onDelete = {
                viewModel.deletePhoto(uid, expandedPhoto!!)
                expandedPhoto = null
            }
        )
    }
}

@Composable
fun PhotoCard(
    photo: ProgressPhoto,
    onClick: () -> Unit,
    onDelete: () -> Unit
) {
    val dateFormat = SimpleDateFormat("MMM dd", Locale.getDefault())
    val typeBadgeColor = if (photo.type == "before") ZyroWarning else ZyroSuccess

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .aspectRatio(0.75f)
            .clickable(onClick = onClick),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = ZyroSurface)
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            AsyncImage(
                model = photo.storageUrl,
                contentDescription = "${photo.type} photo",
                contentScale = ContentScale.Crop,
                modifier = Modifier
                    .fillMaxSize()
                    .clip(RoundedCornerShape(16.dp))
            )

            // Type badge
            Box(
                modifier = Modifier
                    .align(Alignment.TopStart)
                    .padding(8.dp)
                    .background(typeBadgeColor, RoundedCornerShape(8.dp))
                    .padding(horizontal = 8.dp, vertical = 4.dp)
            ) {
                Text(
                    text = photo.type.replaceFirstChar { it.uppercase() },
                    style = MaterialTheme.typography.labelSmall,
                    color = ZyroBackground,
                    fontWeight = FontWeight.Bold
                )
            }

            // Date at bottom
            Box(
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .fillMaxWidth()
                    .background(ZyroBackground.copy(alpha = 0.6f))
                    .padding(8.dp)
            ) {
                Text(
                    text = dateFormat.format(photo.date.toDate()),
                    style = MaterialTheme.typography.labelSmall,
                    color = ZyroOnBackground
                )
            }
        }
    }
}

@Composable
fun UploadPhotoDialog(
    isUploading: Boolean,
    onDismiss: () -> Unit,
    onUpload: (String, String) -> Unit
) {
    var selectedType by remember { mutableStateOf("before") }
    var notes by remember { mutableStateOf("") }

    AlertDialog(
        onDismissRequest = onDismiss,
        containerColor = ZyroSurfaceVariant,
        title = {
            Text(
                "Add Progress Photo",
                style = MaterialTheme.typography.titleLarge,
                color = ZyroOnBackground,
                fontWeight = FontWeight.Bold
            )
        },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text(
                    "Photo type:",
                    style = MaterialTheme.typography.labelLarge,
                    color = ZyroOnSurfaceVariant
                )
                Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = selectedType == "before",
                        onClick = { selectedType = "before" },
                        label = { Text("Before") },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = ZyroWarning.copy(alpha = 0.3f),
                            selectedLabelColor = ZyroWarning
                        )
                    )
                    FilterChip(
                        selected = selectedType == "after",
                        onClick = { selectedType = "after" },
                        label = { Text("After") },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = ZyroSuccess.copy(alpha = 0.3f),
                            selectedLabelColor = ZyroSuccess
                        )
                    )
                }
                OutlinedTextField(
                    value = notes,
                    onValueChange = { notes = it },
                    label = { Text("Notes (optional)") },
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
            }
        },
        confirmButton = {
            Button(
                onClick = { onUpload(selectedType, notes) },
                enabled = !isUploading,
                colors = ButtonDefaults.buttonColors(containerColor = ZyroPrimary)
            ) {
                if (isUploading) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(18.dp),
                        color = ZyroOnBackground,
                        strokeWidth = 2.dp
                    )
                } else {
                    Text("Upload")
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
fun PhotoDetailDialog(
    photo: ProgressPhoto,
    onDismiss: () -> Unit,
    onDelete: () -> Unit
) {
    val dateFormat = SimpleDateFormat("MMM dd, yyyy", Locale.getDefault())
    var showDeleteConfirm by remember { mutableStateOf(false) }

    if (showDeleteConfirm) {
        AlertDialog(
            onDismissRequest = { showDeleteConfirm = false },
            title = { Text("Delete Photo") },
            text = { Text("Are you sure you want to delete this photo?") },
            confirmButton = {
                TextButton(onClick = {
                    onDelete()
                    showDeleteConfirm = false
                }) { Text("Delete", color = ZyroError) }
            },
            dismissButton = {
                TextButton(onClick = { showDeleteConfirm = false }) {
                    Text("Cancel")
                }
            },
            containerColor = ZyroSurfaceVariant
        )
    } else {
        AlertDialog(
            onDismissRequest = onDismiss,
            containerColor = ZyroSurface,
            modifier = Modifier.fillMaxWidth(0.95f),
            title = {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        "${photo.type.replaceFirstChar { it.uppercase() }} Photo",
                        color = ZyroOnBackground,
                        fontWeight = FontWeight.Bold
                    )
                    IconButton(onClick = { showDeleteConfirm = true }) {
                        Icon(Icons.Filled.Delete, contentDescription = "Delete", tint = ZyroError)
                    }
                }
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    AsyncImage(
                        model = photo.storageUrl,
                        contentDescription = "Progress photo",
                        contentScale = ContentScale.FillWidth,
                        modifier = Modifier
                            .fillMaxWidth()
                            .clip(RoundedCornerShape(12.dp))
                    )
                    Text(
                        text = dateFormat.format(photo.date.toDate()),
                        style = MaterialTheme.typography.bodySmall,
                        color = ZyroOnSurfaceVariant
                    )
                    if (photo.notes.isNotEmpty()) {
                        Text(
                            text = photo.notes,
                            style = MaterialTheme.typography.bodyMedium,
                            color = ZyroOnSurface
                        )
                    }
                }
            },
            confirmButton = {
                TextButton(onClick = onDismiss) {
                    Text("Close", color = ZyroPrimary)
                }
            }
        )
    }
}
