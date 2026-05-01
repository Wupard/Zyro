# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.

# Firebase - keep all Firebase classes
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }

# Firestore data models - keep all fields for deserialization
-keep class com.zyro.app.data.model.** { *; }

# Kotlin coroutines
-keepnames class kotlinx.coroutines.internal.MainDispatcherFactory {}
-keepnames class kotlinx.coroutines.CoroutineExceptionHandler {}
-dontwarn kotlinx.coroutines.**

# Coil
-dontwarn okhttp3.**

# Keep Compose runtime
-keep class androidx.compose.** { *; }
-dontwarn androidx.compose.**
