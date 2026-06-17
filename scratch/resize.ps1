Add-Type -AssemblyName System.Drawing
$imgPath = "c:\Users\Yusuf Kahraman\Desktop\Zyro\assets\zyro_pwa_icon.png"
$img = [System.Drawing.Image]::FromFile($imgPath)
$width = $img.Width
$height = $img.Height
$bmp = new-object System.Drawing.Bitmap($img)
$bgColor = $bmp.GetPixel(0, 0)

$newImg = new-object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($newImg)
$g.Clear($bgColor)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$scaleFactor = 0.65
$newW = [math]::Floor($width * $scaleFactor)
$newH = [math]::Floor($height * $scaleFactor)
$x = [math]::Floor(($width - $newW) / 2)
$y = [math]::Floor(($height - $newH) / 2)

$g.DrawImage($img, $x, $y, $newW, $newH)
$g.Dispose()
$img.Dispose()
$bmp.Dispose()

$newImg.Save("c:\Users\Yusuf Kahraman\Desktop\Zyro\assets\zyro_pwa_icon_new.png", [System.Drawing.Imaging.ImageFormat]::Png)
$newImg.Dispose()
Write-Host "Done"
