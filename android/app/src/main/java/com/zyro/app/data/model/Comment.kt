package com.zyro.app.data.model

import com.google.firebase.Timestamp

data class Comment(
    val id: String = "",
    val userId: String = "",
    val displayName: String = "",
    val photoUrl: String = "",
    val text: String = "",
    val createdAt: Timestamp = Timestamp.now(),
    /** Empty string when this is a top-level comment */
    val parentId: String = "",
    /** Thread root id (self id for top-level) */
    val rootId: String = "",
    val authorIsAdmin: Boolean = false
) {
    constructor() : this("", "", "", "", "", Timestamp.now(), "", "", false)
}
