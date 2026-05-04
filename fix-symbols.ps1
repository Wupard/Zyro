$files = @("index.html", "app.js", "styles.css")
foreach ($f in $files) {
    if (Test-Path $f) {
        $content = Get-Content -Path $f -Raw -Encoding UTF8
        $content = $content.Replace("Ã¢â‚¬â€ ", "—")
        $content = $content.Replace("Ã¢â‚¬Âº", "›")
        $content = $content.Replace("Ã¢â€”â€ ", "◆")
        $content = $content.Replace("Ã¢â€”Â ", "●")
        $content = $content.Replace("Ã‚Â·", "·")
        $content = $content.Replace("Ã¢Å“â€œ", "✓")
        $content = $content.Replace("Ã¢â‚¬â€œ", "-")
        $content = $content.Replace("ÄŸÅ¸Å’Â ", "🌐")
        $content = $content.Replace("ÄŸÅ¸â€˜Â¤", "👤")
        $content = $content.Replace("ÄŸÅ¸â€ â€ ", "🔔")
        [System.IO.File]::WriteAllText("$PWD\$f", $content, [System.Text.UTF8Encoding]::new($false))
    }
}
Write-Host "Remaining symbols fixed!"
