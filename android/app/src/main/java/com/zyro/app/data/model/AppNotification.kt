package com.zyro.app.data.model

import com.google.firebase.Timestamp

enum class NotificationType {
    COMMENT_REPLY,
    ADMIN_MESSAGE,
    SYSTEM_UPDATE
}

data class AppNotification(
    val id: String = "",
    val title: String = "",
    val body: String = "",
    val type: String = NotificationType.ADMIN_MESSAGE.name,
    val read: Boolean = false,
    val createdAt: Timestamp = Timestamp.now(),
    val relatedCommentId: String = "",
    val relatedRootCommentId: String = "",
    val fromUserId: String = "",
    val fromDisplayName: String = ""
) {
    constructor() : this("", "", "", NotificationType.ADMIN_MESSAGE.name, false, Timestamp.now(), "", "", "", "")

    fun typeEnum(): NotificationType = try {
        NotificationType.valueOf(type)
    } catch (_: Exception) {
        NotificationType.ADMIN_MESSAGE
    }
}
