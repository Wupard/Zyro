package com.zyro.app.data.model

import com.google.firebase.Timestamp

data class WeightEntry(
    val id: String = "",
    val userId: String = "",
    val weight: Double = 0.0,
    val date: Timestamp = Timestamp.now(),
    val notes: String = ""
) {
    // Needed for Firestore deserialization
    constructor() : this("", "", 0.0, Timestamp.now(), "")
}
