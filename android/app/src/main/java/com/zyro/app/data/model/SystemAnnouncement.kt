package com.zyro.app.data.model

import com.google.firebase.Timestamp

data class SystemAnnouncement(
    val id: String = "",
    val title: String = "",
    val body: String = "",
    val createdAt: Timestamp = Timestamp.now()
) {
    constructor() : this("", "", "", Timestamp.now())
}
