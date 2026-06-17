Add-Type -AssemblyName System.Drawing
$imgPath = "c:\Users\Yusuf Kahraman\Desktop\Zyro\assets\zyro_logo_cropped.png"
$img = [System.Drawing.Image]::FromFile($imgPath)
Write-Host "Width: $($img.Width)px, Height: $($img.Height)px"
$img.Dispose()
