package com.zyro.app.ui.theme

import android.app.Activity
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

private val ZyroDarkColorScheme = darkColorScheme(
    primary = ZyroPrimary,
    onPrimary = ZyroOnBackground,
    primaryContainer = ZyroPrimaryVariant,
    secondary = ZyroSecondary,
    onSecondary = ZyroBackground,
    tertiary = ZyroTertiary,
    background = ZyroBackground,
    onBackground = ZyroOnBackground,
    surface = ZyroSurface,
    onSurface = ZyroOnSurface,
    surfaceVariant = ZyroSurfaceVariant,
    onSurfaceVariant = ZyroOnSurfaceVariant,
    surfaceContainer = ZyroSurfaceContainer,
    outline = ZyroDivider,
    error = ZyroError,
    onError = ZyroOnBackground,
)

@Composable
fun ZyroTheme(
    content: @Composable () -> Unit
) {
    val colorScheme = ZyroDarkColorScheme
    val view = LocalView.current

    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = ZyroBackground.toArgb()
            WindowCompat.getInsetsController(window, view).isAppearanceLightStatusBars = false
        }
    }

    MaterialTheme(
        colorScheme = colorScheme,
        typography = ZyroTypography,
        content = content
    )
}
