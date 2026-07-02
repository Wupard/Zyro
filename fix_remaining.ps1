# Fix remaining mojibake patterns in index.html
function Replace-ByteSequence {
    param([byte[]]$data, [byte[]]$pattern, [byte[]]$replacement)
    $result = New-Object System.Collections.Generic.List[byte]
    $i = 0
    $pLen = $pattern.Length
    $dLen = $data.Length
    while ($i -lt $dLen) {
        if ($i -le ($dLen - $pLen)) {
            $match = $true
            for ($j = 0; $j -lt $pLen; $j++) {
                if ($data[$i + $j] -ne $pattern[$j]) { $match = $false; break }
            }
            if ($match) {
                $result.AddRange([byte[]]$replacement)
                $i += $pLen
                continue
            }
        }
        $result.Add($data[$i])
        $i++
    }
    return , $result.ToArray()
}

# Pattern: 195,132,194,158 -> should be Ğ (U+011E) = 196,158
# Pattern: 195,133,194,158 -> should be Ş (U+015E) = 197,158
$additionalReplacements = @(
    @{ moji=[byte[]](195,132,194,158); correct=[byte[]](196,158) },  # Ğ
    @{ moji=[byte[]](195,133,194,158); correct=[byte[]](197,158) }   # Ş
)

$file = "c:\Users\Yusuf Kahraman\Desktop\Zyro\index.html"
Write-Host "Processing: $file"
$data = [System.IO.File]::ReadAllBytes($file)

$originalLen = $data.Length
foreach ($rep in $additionalReplacements) {
    $before = $data.Length
    $data = Replace-ByteSequence -data $data -pattern $rep.moji -replacement $rep.correct
    $diff = $before - $data.Length
    Write-Host "  Applied replacement: saved $diff bytes"
}

Write-Host "  Length: $originalLen -> $($data.Length)"
[System.IO.File]::WriteAllBytes($file, $data)
Write-Host "  Saved: $file"
Write-Host "Done!"
