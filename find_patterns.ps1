# Find remaining mojibake patterns in index.html
$bytes = [System.IO.File]::ReadAllBytes("c:\Users\Yusuf Kahraman\Desktop\Zyro\index.html")

# Look for remaining patterns starting with 0xC3, 0xC4, 0xC5, 0xC2 followed by unusual bytes
$found = @{}
for ($i = 0; $i -lt $bytes.Length - 4; $i++) {
    # Look for sequences that might be mojibake
    $b0 = $bytes[$i]
    $b1 = $bytes[$i+1]
    $b2 = if ($i+2 -lt $bytes.Length) { $bytes[$i+2] } else { 0 }
    $b3 = if ($i+3 -lt $bytes.Length) { $bytes[$i+3] } else { 0 }
    
    # Pattern: 195,133 followed by 194,something (like 194,158)
    if ($b0 -eq 195 -and $b1 -eq 133 -and $b2 -eq 194) {
        $key = "$b0,$b1,$b2,$b3"
        if (-not $found.ContainsKey($key)) {
            $found[$key] = $i
            Write-Host "Pattern 195,133,194,X at byte ${i}: $key"
        }
    }
    
    # Pattern: 195,132 followed by 194,something
    if ($b0 -eq 195 -and $b1 -eq 132 -and $b2 -eq 194) {
        $key = "$b0,$b1,$b2,$b3"
        if (-not $found.ContainsKey($key)) {
            $found[$key] = $i
            Write-Host "Pattern 195,132,194,X at byte ${i}: $key"
        }
    }
    
    # Pattern: 196,131,194,something  
    if ($b0 -eq 196 -and $b2 -eq 194) {
        $key = "$b0,$b1,$b2,$b3"
        if (-not $found.ContainsKey($key)) {
            $found[$key] = $i
            Write-Host "Pattern 196,X,194,X at byte ${i}: $key"
        }
    }
    
    # Check for 195,131 prefix (another possible mojibake pattern for ü, ö, ç)
    if ($b0 -eq 195 -and $b1 -eq 131 -and ($b2 -eq 194 -or $b2 -eq 197)) {
        $key = "$b0,$b1,$b2,$b3"
        if (-not $found.ContainsKey($key)) {
            $found[$key] = $i
            Write-Host "Pattern 195,131,X,X at byte ${i}: $key"
        }
    }
}

Write-Host "Total unique patterns found: $($found.Count)"
