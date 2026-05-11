package com.zyro.app.ui.screens.admin

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ExposedDropdownMenu
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material3.ExposedDropdownMenuDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.compose.viewModel
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.SystemAnnouncement
import com.zyro.app.data.model.UserProfile
import com.zyro.app.data.repository.AdminRepository
import com.zyro.app.ui.theme.ZyroBackground
import com.zyro.app.ui.theme.ZyroOnBackground
import com.zyro.app.ui.theme.ZyroOnSurfaceVariant
import com.zyro.app.ui.theme.ZyroPrimary
import com.zyro.app.ui.theme.ZyroSurfaceVariant
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

class AdminViewModel : ViewModel() {
    private val repo = AdminRepository()
    private val _users = MutableStateFlow<List<UserProfile>>(emptyList())
    val users: StateFlow<List<UserProfile>> = _users.asStateFlow()
    private val _announcements = MutableStateFlow<List<SystemAnnouncement>>(emptyList())
    val announcements: StateFlow<List<SystemAnnouncement>> = _announcements.asStateFlow()
    private val _busy = MutableStateFlow(false)
    val busy: StateFlow<Boolean> = _busy.asStateFlow()
    private val _msg = MutableStateFlow<String?>(null)
    val msg: StateFlow<String?> = _msg.asStateFlow()

    init {
        viewModelScope.launch {
            repo.announcementsFlow(15).collect { _announcements.value = it }
        }
    }

    fun refreshUsers() {
        viewModelScope.launch {
            _busy.value = true
            try {
                _users.value = repo.listUsers()
                _msg.value = null
            } catch (e: Exception) {
                _msg.value = e.message
            } finally {
                _busy.value = false
            }
        }
    }

    fun setBanned(uid: String, banned: Boolean) {
        viewModelScope.launch {
            _busy.value = true
            try {
                repo.setBanned(uid, banned)
                refreshUsers()
            } catch (e: Exception) {
                _msg.value = e.message
            } finally {
                _busy.value = false
            }
        }
    }

    fun applyRank(uid: String, rank: String, progress: Int) {
        viewModelScope.launch {
            _busy.value = true
            try {
                repo.setRank(uid, rank, progress)
                refreshUsers()
            } catch (e: Exception) {
                _msg.value = e.message
            } finally {
                _busy.value = false
            }
        }
    }

    fun broadcast(title: String, body: String) {
        viewModelScope.launch {
            _busy.value = true
            try {
                repo.broadcastNotification(title, body)
                _msg.value = "Bildirimler gönderildi"
            } catch (e: Exception) {
                _msg.value = e.message
            } finally {
                _busy.value = false
            }
        }
    }

    fun publishAnnouncement(title: String, body: String) {
        viewModelScope.launch {
            _busy.value = true
            try {
                repo.publishSystemAnnouncement(title, body)
                _msg.value = "Duyuru yayınlandı"
            } catch (e: Exception) {
                _msg.value = e.message
            } finally {
                _busy.value = false
            }
        }
    }

    fun sendToUser(uid: String, title: String, body: String) {
        viewModelScope.launch {
            _busy.value = true
            try {
                repo.sendUserNotification(uid, title, body)
                _msg.value = "Kullanıcıya gönderildi"
            } catch (e: Exception) {
                _msg.value = e.message
            } finally {
                _busy.value = false
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AdminScreen(
    authViewModel: AuthViewModel,
    viewModel: AdminViewModel = viewModel()
) {
    val me by authViewModel.meProfile.collectAsState()
    if (me?.isAdmin != true) {
        Column(
            Modifier
                .fillMaxSize()
                .background(ZyroBackground)
                .padding(24.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text("Bu alan yalnızca yöneticiler içindir.", color = ZyroOnBackground)
        }
        return
    }

    val users by viewModel.users.collectAsState()
    val announcements by viewModel.announcements.collectAsState()
    val busy by viewModel.busy.collectAsState()
    val feedback by viewModel.msg.collectAsState()

    var broadcastTitle by remember { mutableStateOf("") }
    var broadcastBody by remember { mutableStateOf("") }
    var annTitle by remember { mutableStateOf("") }
    var annBody by remember { mutableStateOf("") }

    var pickUser by remember { mutableStateOf<UserProfile?>(null) }
    var directTitle by remember { mutableStateOf("") }
    var directBody by remember { mutableStateOf("") }

    var rankUser by remember { mutableStateOf<UserProfile?>(null) }
    var rankPick by remember { mutableStateOf("Bronze") }
    var rankProgress by remember { mutableStateOf("50") }
    var rankMenu by remember { mutableStateOf(false) }
    val ranks = listOf("Bronze", "Silver", "Gold", "Platinum", "Diamond")

    LaunchedEffect(Unit) { viewModel.refreshUsers() }

    LazyColumn(
        Modifier
            .fillMaxSize()
            .background(ZyroBackground)
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        item {
            Text(
                "Yönetici",
                style = MaterialTheme.typography.headlineMedium,
                color = ZyroOnBackground,
                fontWeight = FontWeight.ExtraBold
            )
        }
        item {
            feedback?.let {
                Text(it, color = ZyroPrimary, style = MaterialTheme.typography.bodySmall)
            }
        }
        item {
            Card(
                Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
            ) {
                Column(Modifier.padding(16.dp)) {
                    Text("Toplu bildirim", fontWeight = FontWeight.Bold, color = ZyroOnBackground)
                    Spacer(Modifier.height(8.dp))
                    OutlinedTextField(
                        broadcastTitle,
                        { broadcastTitle = it },
                        Modifier.fillMaxWidth(),
                        label = { Text("Başlık") }
                    )
                    Spacer(Modifier.height(6.dp))
                    OutlinedTextField(
                        broadcastBody,
                        { broadcastBody = it },
                        Modifier.fillMaxWidth(),
                        label = { Text("Mesaj") },
                        minLines = 2
                    )
                    Spacer(Modifier.height(8.dp))
                    Button(
                        onClick = { viewModel.broadcast(broadcastTitle, broadcastBody) },
                        enabled = !busy && broadcastTitle.isNotBlank() && broadcastBody.isNotBlank()
                    ) { Text("Tüm kullanıcılara gönder") }
                }
            }
        }
        item {
            Card(
                Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
            ) {
                Column(Modifier.padding(16.dp)) {
                    Text("Sistem duyurusu", fontWeight = FontWeight.Bold, color = ZyroOnBackground)
                    Spacer(Modifier.height(8.dp))
                    OutlinedTextField(
                        annTitle,
                        { annTitle = it },
                        Modifier.fillMaxWidth(),
                        label = { Text("Başlık") }
                    )
                    Spacer(Modifier.height(6.dp))
                    OutlinedTextField(
                        annBody,
                        { annBody = it },
                        Modifier.fillMaxWidth(),
                        label = { Text("İçerik") },
                        minLines = 3
                    )
                    Spacer(Modifier.height(8.dp))
                    Button(
                        onClick = { viewModel.publishAnnouncement(annTitle, annBody) },
                        enabled = !busy && annTitle.isNotBlank() && annBody.isNotBlank()
                    ) { Text("Duyuruyu yayınla ve bildir") }
                }
            }
        }
        item {
            Text("Son duyurular", style = MaterialTheme.typography.titleMedium, color = ZyroOnBackground)
        }
        items(announcements.take(5), key = { it.id }) { a ->
            Text(
                "• ${a.title}",
                style = MaterialTheme.typography.bodySmall,
                color = ZyroOnSurfaceVariant
            )
        }
        item { HorizontalDivider() }
        item {
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Text("Kullanıcılar", style = MaterialTheme.typography.titleMedium, color = ZyroOnBackground)
                TextButton(onClick = { viewModel.refreshUsers() }, enabled = !busy) { Text("Yenile") }
            }
        }
        if (busy && users.isEmpty()) {
            item { CircularProgressIndicator(Modifier.padding(16.dp), color = ZyroPrimary) }
        }
        items(users, key = { it.uid }) { u ->
            Card(
                Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = ZyroSurfaceVariant)
            ) {
                Column(Modifier.padding(12.dp)) {
                    Text(u.displayName.ifEmpty { "—" }, fontWeight = FontWeight.SemiBold, color = ZyroOnBackground)
                    Text(u.email, style = MaterialTheme.typography.bodySmall, color = ZyroOnSurfaceVariant)
                    Text(
                        "Rank: ${u.rank} (${u.rankProgress}%) · Admin: ${u.isAdmin} · Ban: ${u.isBanned}",
                        style = MaterialTheme.typography.labelSmall,
                        color = ZyroOnSurfaceVariant
                    )
                    Spacer(Modifier.height(8.dp))
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        TextButton(onClick = { viewModel.setBanned(u.uid, !u.isBanned) }) {
                            Text(if (u.isBanned) "Banı kaldır" else "Banla")
                        }
                        TextButton(onClick = { pickUser = u }) { Text("Bildirim") }
                        TextButton(onClick = {
                            rankUser = u
                            rankPick = u.rank
                            rankProgress = u.rankProgress.toString()
                        }) { Text("Rank") }
                    }
                }
            }
        }
    }

    if (pickUser != null) {
        AlertDialog(
            onDismissRequest = { pickUser = null },
            title = { Text("Bildirim: ${pickUser!!.displayName}") },
            text = {
                Column {
                    OutlinedTextField(directTitle, { directTitle = it }, label = { Text("Başlık") })
                    Spacer(Modifier.height(8.dp))
                    OutlinedTextField(directBody, { directBody = it }, label = { Text("Mesaj") }, minLines = 2)
                }
            },
            confirmButton = {
                TextButton(
                    onClick = {
                        viewModel.sendToUser(pickUser!!.uid, directTitle, directBody)
                        pickUser = null
                        directTitle = ""
                        directBody = ""
                    }
                ) { Text("Gönder") }
            },
            dismissButton = { TextButton(onClick = { pickUser = null }) { Text("İptal") } }
        )
    }

    if (rankUser != null) {
        AlertDialog(
            onDismissRequest = { rankUser = null },
            title = { Text("Rank: ${rankUser!!.displayName}") },
            text = {
                Column {
                    ExposedDropdownMenuBox(expanded = rankMenu, onExpandedChange = { rankMenu = !rankMenu }) {
                        OutlinedTextField(
                            rankPick,
                            { },
                            readOnly = true,
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor(),
                            label = { Text("Rank") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(rankMenu) }
                        )
                        ExposedDropdownMenu(expanded = rankMenu, onDismissRequest = { rankMenu = false }) {
                            ranks.forEach { r ->
                                DropdownMenuItem(
                                    text = { Text(r) },
                                    onClick = {
                                        rankPick = r
                                        rankMenu = false
                                    }
                                )
                            }
                        }
                    }
                    Spacer(Modifier.height(8.dp))
                    OutlinedTextField(
                        rankProgress,
                        { rankProgress = it.filter { ch -> ch.isDigit() }.take(3) },
                        label = { Text("İlerleme % (0-100)") }
                    )
                }
            },
            confirmButton = {
                TextButton(
                    onClick = {
                        val p = rankProgress.toIntOrNull()?.coerceIn(0, 100) ?: 0
                        viewModel.applyRank(rankUser!!.uid, rankPick, p)
                        rankUser = null
                    }
                ) { Text("Kaydet") }
            },
            dismissButton = { TextButton(onClick = { rankUser = null }) { Text("İptal") } }
        )
    }
}
