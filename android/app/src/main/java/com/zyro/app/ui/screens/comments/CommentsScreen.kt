package com.zyro.app.ui.screens.comments

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.animateScrollToItem
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Reply
import androidx.compose.material.icons.filled.Send
import androidx.compose.material3.AssistChip
import androidx.compose.material3.AssistChipDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
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
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.zyro.app.auth.AuthViewModel
import com.zyro.app.data.model.Comment
import com.zyro.app.data.repository.CommentRepository
import com.zyro.app.ui.theme.ZyroBackground
import com.zyro.app.ui.theme.ZyroDivider
import com.zyro.app.ui.theme.ZyroOnBackground
import com.zyro.app.ui.theme.ZyroOnSurfaceVariant
import com.zyro.app.ui.theme.ZyroPrimary
import com.zyro.app.ui.theme.ZyroSurface
import com.zyro.app.ui.theme.ZyroSurfaceVariant
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

data class ThreadRow(val comment: Comment, val depth: Int)

class CommentsViewModel : ViewModel() {
    private val repo = CommentRepository()
    private val _comments = MutableStateFlow<List<Comment>>(emptyList())
    val comments: StateFlow<List<Comment>> = _comments.asStateFlow()
    private val _error = MutableStateFlow<String?>(null)
    val error: StateFlow<String?> = _error.asStateFlow()
    private val _busy = MutableStateFlow(false)
    val busy: StateFlow<Boolean> = _busy.asStateFlow()

    init {
        viewModelScope.launch {
            repo.commentsFlow().collect { _comments.value = it }
        }
    }

    fun post(uid: String, name: String, photo: String, text: String, parentId: String) {
        viewModelScope.launch {
            _busy.value = true
            _error.value = null
            try {
                repo.postComment(uid, name, photo, text, parentId)
            } catch (e: Exception) {
                _error.value = e.message ?: "Gönderilemedi"
            } finally {
                _busy.value = false
            }
        }
    }

    fun delete(commentId: String, uid: String, isAdmin: Boolean) {
        viewModelScope.launch {
            _busy.value = true
            _error.value = null
            try {
                repo.deleteCommentChain(commentId, uid, isAdmin)
            } catch (e: Exception) {
                _error.value = e.message ?: "Silinemedi"
            } finally {
                _busy.value = false
            }
        }
    }
}

private fun buildThreadRows(flat: List<Comment>): List<ThreadRow> {
    val byParent = flat.groupBy { it.parentId }
    val tops = flat.filter { it.parentId.isEmpty() }
        .sortedByDescending { it.createdAt.toDate().time }
    val out = mutableListOf<ThreadRow>()
    fun appendReplies(parentId: String, depth: Int) {
        val kids = (byParent[parentId] ?: emptyList()).sortedBy { it.createdAt.toDate().time }
        for (c in kids) {
            out.add(ThreadRow(c, depth))
            appendReplies(c.id, depth + 1)
        }
    }
    for (t in tops) {
        out.add(ThreadRow(t, 0))
        appendReplies(t.id, 1)
    }
    return out
}

@Composable
fun CommentsScreen(
    authViewModel: AuthViewModel,
    highlightRootId: String?,
    onConsumedHighlight: () -> Unit,
    viewModel: CommentsViewModel = viewModel()
) {
    val uid = authViewModel.currentUserId ?: return
    val user = authViewModel.currentUser
    val me by authViewModel.meProfile.collectAsState()
    val isAdmin = me?.isAdmin == true

    val flat by viewModel.comments.collectAsState()
    val busy by viewModel.busy.collectAsState()
    val err by viewModel.error.collectAsState()

    var draft by remember { mutableStateOf("") }
    var replyTo by remember { mutableStateOf<Comment?>(null) }

    val rows = remember(flat) { buildThreadRows(flat) }
    val listState = rememberLazyListState()

    LaunchedEffect(highlightRootId, rows) {
        val hid = highlightRootId ?: return@LaunchedEffect
        val idx = rows.indexOfFirst { it.comment.id == hid || it.comment.rootId == hid }
        if (idx >= 0) {
            listState.animateScrollToItem(idx.coerceAtLeast(0))
            onConsumedHighlight()
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(ZyroBackground)
            .padding(16.dp)
    ) {
        Text(
            text = "Yorumlar",
            style = MaterialTheme.typography.headlineMedium,
            color = ZyroOnBackground,
            fontWeight = FontWeight.ExtraBold
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Topluluk yorumları ve cevaplar",
            style = MaterialTheme.typography.bodyMedium,
            color = ZyroOnSurfaceVariant
        )
        Spacer(modifier = Modifier.height(12.dp))

        if (replyTo != null) {
            AssistChip(
                onClick = { replyTo = null },
                label = { Text("Cevap: ${replyTo!!.displayName} — İptal") },
                colors = AssistChipDefaults.assistChipColors(labelColor = ZyroPrimary)
            )
            Spacer(modifier = Modifier.height(8.dp))
        }

        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.Bottom
        ) {
            OutlinedTextField(
                value = draft,
                onValueChange = { draft = it },
                modifier = Modifier.weight(1f),
                placeholder = { Text("Yorum yaz…") },
                maxLines = 4
            )
            Spacer(modifier = Modifier.width(8.dp))
            IconButton(
                onClick = {
                    if (draft.isNotBlank()) {
                        viewModel.post(
                            uid,
                            user?.displayName ?: "",
                            user?.photoUrl?.toString() ?: "",
                            draft,
                            replyTo?.id ?: ""
                        )
                        draft = ""
                        replyTo = null
                    }
                },
                enabled = !busy && draft.isNotBlank()
            ) {
                Icon(Icons.Default.Send, contentDescription = "Gönder", tint = ZyroPrimary)
            }
        }

        err?.let {
            Text(it, color = MaterialTheme.colorScheme.error, style = MaterialTheme.typography.bodySmall)
            Spacer(modifier = Modifier.height(4.dp))
        }

        HorizontalDivider(color = ZyroDivider, modifier = Modifier.padding(vertical = 8.dp))

        if (flat.isEmpty() && !busy) {
            Box(Modifier.fillMaxWidth().weight(1f), contentAlignment = Alignment.Center) {
                Text("Henüz yorum yok. İlk siz yazın.", color = ZyroOnSurfaceVariant)
            }
        } else {
            LazyColumn(
                state = listState,
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(8.dp),
                contentPadding = PaddingValues(bottom = 24.dp)
            ) {
                items(rows, key = { it.comment.id }) { row ->
                    CommentCard(
                        row = row,
                        currentUid = uid,
                        isAdmin = isAdmin,
                        onReply = { replyTo = it },
                        onDelete = { viewModel.delete(it, uid, isAdmin) }
                    )
                }
            }
        }

        if (busy) {
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Center) {
                CircularProgressIndicator(color = ZyroPrimary, modifier = Modifier.size(28.dp))
            }
        }
    }
}

@Composable
private fun CommentCard(
    row: ThreadRow,
    currentUid: String,
    isAdmin: Boolean,
    onReply: (Comment) -> Unit,
    onDelete: (String) -> Unit
) {
    val c = row.comment
    val canDelete = c.userId == currentUid || isAdmin
    val df = remember { SimpleDateFormat("dd MMM HH:mm", Locale.getDefault()) }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(start = (row.depth * 12).dp),
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = ZyroSurface)
    ) {
        Column(Modifier.padding(12.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                if (c.photoUrl.isNotEmpty()) {
                    AsyncImage(
                        model = c.photoUrl,
                        contentDescription = null,
                        modifier = Modifier
                            .size(36.dp)
                            .clip(CircleShape)
                    )
                } else {
                    Box(
                        Modifier
                            .size(36.dp)
                            .clip(CircleShape)
                            .background(ZyroSurfaceVariant),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            c.displayName.firstOrNull()?.uppercase() ?: "?",
                            fontWeight = FontWeight.Bold,
                            color = ZyroOnBackground
                        )
                    }
                }
                Spacer(Modifier.width(10.dp))
                Column(Modifier.weight(1f)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            c.displayName.ifEmpty { "Kullanıcı" },
                            style = MaterialTheme.typography.titleSmall,
                            fontWeight = FontWeight.SemiBold,
                            color = ZyroOnBackground
                        )
                        if (c.authorIsAdmin) {
                            Spacer(Modifier.width(6.dp))
                            Surface(
                                shape = RoundedCornerShape(6.dp),
                                color = ZyroPrimary.copy(0.2f)
                            ) {
                                Text(
                                    "Admin",
                                    Modifier.padding(horizontal = 6.dp, vertical = 2.dp),
                                    style = MaterialTheme.typography.labelSmall,
                                    color = ZyroPrimary,
                                    fontWeight = FontWeight.Bold
                                )
                            }
                        }
                    }
                    Text(
                        df.format(c.createdAt.toDate()),
                        style = MaterialTheme.typography.labelSmall,
                        color = ZyroOnSurfaceVariant
                    )
                }
                IconButton(onClick = { onReply(c) }) {
                    Icon(Icons.Default.Reply, contentDescription = "Cevapla", tint = ZyroOnSurfaceVariant)
                }
                if (canDelete) {
                    IconButton(onClick = { onDelete(c.id) }) {
                        Icon(Icons.Default.Delete, contentDescription = "Sil", tint = MaterialTheme.colorScheme.error)
                    }
                }
            }
            Spacer(Modifier.height(6.dp))
            Text(c.text, style = MaterialTheme.typography.bodyMedium, color = ZyroOnBackground)
        }
    }
}
