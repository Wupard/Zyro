package com.zyro.app.data.model

import com.google.firebase.Timestamp

data class ProgressPhoto(
    val id: String = "",
    val userId: String = "",
    val type: String = "before",   // "before" or "after"
    val storageUrl: String = "",
    val date: Timestamp = Timestamp.now(),
    val notes: String = ""
) {
    constructor() : this("", "", "before", "", Timestamp.now(), "")
}
