$files = @("index.html", "app.js", "styles.css")

$map = @{
    # TR Lower
    $([string][char]0x00C3 + [char]0x00BC) = [string][char]0x00FC # ü
    $([string][char]0x00C3 + [char]0x00B6) = [string][char]0x00F6 # ö
    $([string][char]0x00C3 + [char]0x00A7) = [string][char]0x00E7 # ç
    $([string][char]0x00C4 + [char]0x00B1) = [string][char]0x0131 # ı
    $([string][char]0x00C5 + [char]0x0178) = [string][char]0x015F # ş
    $([string][char]0x00C4 + [char]0x0178) = [string][char]0x011F # ğ
    
    # TR Upper
    $([string][char]0x00C3 + [char]0x0153) = [string][char]0x00DC # Ü
    $([string][char]0x00C3 + [char]0x2013) = [string][char]0x00D6 # Ö
    $([string][char]0x00C3 + [char]0x2021) = [string][char]0x00C7 # Ç
    $([string][char]0x00C4 + [char]0x00B0) = [string][char]0x0130 # İ
    $([string][char]0x00C5 + [char]0x017E) = [string][char]0x015E # Ş
    $([string][char]0x00C4 + [char]0x017E) = [string][char]0x011E # Ğ
    
    # Symbols
    $([string][char]0x00E2 + [char]0x2014) = [string][char]0x2014 # —
    $([string][char]0x00E2 + [char]0x20AC + [char]0x203A) = [string][char]0x203A # ›
    $([string][char]0x00E2 + [char]0x2014 + [char]0x2020) = [string][char]0x25C6 # ◆
    $([string][char]0x00E2 + [char]0x2014 + [char]0x008F) = [string][char]0x25CF # ●
    $([string][char]0x00C2 + [char]0x00B7) = [string][char]0x00B7 # ·
    $([string][char]0x00E2 + [char]0x0153 + [char]0x201C) = [string][char]0x2713 # ✓
    
    # Double mojibake
    $([string][char]0x00C3 + [char]0x0192 + [char]0x00C2 + [char]0x00BC) = [string][char]0x00FC # ü
    $([string][char]0x00C3 + [char]0x0192 + [char]0x00C2 + [char]0x00B6) = [string][char]0x00F6 # ö
    $([string][char]0x00C3 + [char]0x0192 + [char]0x00C2 + [char]0x00A7) = [string][char]0x00E7 # ç
    $([string][char]0x00C3 + [char]0x201E + [char]0x00C2 + [char]0x00B1) = [string][char]0x0131 # ı
    $([string][char]0x00C3 + [char]0x2026 + [char]0x0152 + [char]0x00B8) = [string][char]0x015F # ş
    $([string][char]0x00C3 + [char]0x201E + [char]0x0152 + [char]0x00B8) = [string][char]0x011F # ğ
    $([string][char]0x00C3 + [char]0x0192 + [char]0x0152 + [char]0x201C) = [string][char]0x00DC # Ü
    $([string][char]0x00C3 + [char]0x0192 + [char]0x00E2 + [char]0x20AC + [char]0x201C) = [string][char]0x00D6 # Ö
    $([string][char]0x00C3 + [char]0x0192 + [char]0x00E2 + [char]0x20AC + [char]0x00A1) = [string][char]0x00C7 # Ç
    $([string][char]0x00C3 + [char]0x201E + [char]0x00C2 + [char]0x00B0) = [string][char]0x0130 # İ
    $([string][char]0x00C3 + [char]0x2026 + [char]0x00C2 + [char]0x017E) = [string][char]0x015E # Ş
    $([string][char]0x00C3 + [char]0x201E + [char]0x00C2 + [char]0x017E) = [string][char]0x011E # Ğ

    '&#214;' = 'Ö'
    '&#252;' = 'ü'
}

foreach ($f in $files) {
    if (Test-Path $f) {
        $content = Get-Content -Path $f -Raw -Encoding UTF8
        
        # We replace the double mojibake first, then the single
        foreach ($key in $map.Keys) {
            $content = $content.Replace($key, $map[$key])
        }

        # Save to file
        [System.IO.File]::WriteAllText("$PWD\$f", $content, [System.Text.UTF8Encoding]::new($false))
        Write-Host "Fixed $f"
    }
}
