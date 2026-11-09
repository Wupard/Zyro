$ErrorActionPreference = 'Stop'
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
$root = Split-Path -Parent $PSScriptRoot
$fontDir = Join-Path $root 'fonts'
New-Item -ItemType Directory -Force -Path $fontDir | Out-Null

$families = @(
  @{ name = 'Bricolage Grotesque'; slug = 'bricolage'; query = 'Bricolage+Grotesque:opsz,wght@12..96,300..700'; weights = '300 700' },
  @{ name = 'Hanken Grotesk'; slug = 'hanken'; query = 'Hanken+Grotesk:wght@400..600'; weights = '400 600' },
  @{ name = 'Inter'; slug = 'inter'; query = 'Inter:wght@300..700'; weights = '300 700' },
  @{ name = 'Space Grotesk'; slug = 'space-grotesk'; query = 'Space+Grotesk:wght@400..700'; weights = '400 700' }
)

$out = New-Object System.Text.StringBuilder
[void]$out.AppendLine('/* Self-hosted Google Fonts - Latin + Latin Extended only. */')

foreach ($f in $families) {
  $url = "https://fonts.googleapis.com/css2?family=$($f.query)&display=swap"
  $css = (Invoke-WebRequest -Uri $url -Headers @{ 'User-Agent' = $ua } -UseBasicParsing -TimeoutSec 40).Content

  # Split into comment + @font-face blocks.
  $pattern = '(?s)/\*\s*(latin(?:-ext)?)\s*\*/\s*(@font-face\s*\{.*?\})'
  $matches = [regex]::Matches($css, $pattern)
  foreach ($m in $matches) {
    $subset = $m.Groups[1].Value
    $block = $m.Groups[2].Value
    $srcMatch = [regex]::Match($block, 'url\((https://[^)]+\.woff2)\)')
    if (-not $srcMatch.Success) { continue }
    $remote = $srcMatch.Groups[1].Value
    $fileName = "$($f.slug)-$subset.woff2"
    $localPath = Join-Path $fontDir $fileName
    if (-not (Test-Path $localPath)) {
      Invoke-WebRequest -Uri $remote -OutFile $localPath -UseBasicParsing -TimeoutSec 60
    }
    $rangeMatch = [regex]::Match($block, 'unicode-range:\s*([^;]+);')
    $range = if ($rangeMatch.Success) { $rangeMatch.Groups[1].Value.Trim() } else { 'U+0000-00FF' }
    [void]$out.AppendLine("@font-face{font-family:'$($f.name)';font-style:normal;font-weight:$($f.weights);font-stretch:100%;font-display:swap;src:url('$fileName') format('woff2');unicode-range:$range}")
    Write-Host "downloaded $fileName"
  }
}

$cssPath = Join-Path $fontDir 'fonts.css'
[System.IO.File]::WriteAllText($cssPath, $out.ToString(), (New-Object System.Text.UTF8Encoding($false)))
Write-Host "wrote $cssPath"
