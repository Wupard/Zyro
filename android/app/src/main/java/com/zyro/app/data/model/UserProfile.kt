package com.zyro.app.data.model

data class UserProfile(
    val uid: String = "",
    val displayName: String = "",
    val email: String = "",
    val photoUrl: String = "",
    val currentWeight: Double = 0.0,
    val targetWeight: Double = 0.0,
    val heightCm: Double = 0.0,
    val createdAt: Long = 0L
) {
    constructor() : this("", "", "", "", 0.0, 0.0, 0.0, 0L)
}
