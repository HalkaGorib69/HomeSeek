# Setup script to copy images to public directory

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcImages = Join-Path $root "assets\images"
$pubImages = Join-Path $root "public\images"
$pubPortfolio = Join-Path $pubImages "portfolio"

Write-Host "Setting up images..."
Write-Host "Source: $srcImages"
Write-Host "Destination: $pubImages"

# Create directories
New-Item -Path $pubImages -ItemType Directory -Force | Out-Null
New-Item -Path $pubPortfolio -ItemType Directory -Force | Out-Null

# Copy .png files
$pngFiles = Get-ChildItem "$srcImages\*.png" -ErrorAction SilentlyContinue
if ($pngFiles) {
    Copy-Item -Path "$srcImages\*.png" -Destination $pubImages -Force
    Write-Host "Copied PNG files"
}

# Copy portfolio files
$portfolioFiles = Get-ChildItem "$srcImages\portfolio\*" -ErrorAction SilentlyContinue
if ($portfolioFiles) {
    Copy-Item -Path "$srcImages\portfolio\*" -Destination $pubPortfolio -Force -Recurse
    Write-Host "Copied portfolio files"
}

# Copy WebP files
$webpFiles = Get-ChildItem "$srcImages\*.webp" -ErrorAction SilentlyContinue
if ($webpFiles) {
    Copy-Item -Path "$srcImages\*.webp" -Destination $pubImages -Force
    Write-Host "Copied WebP files"
}

Write-Host ""
Write-Host "Setup complete! Images are ready."
Write-Host ""
Write-Host "To start the dev server, run:"
Write-Host "npm run dev"
Write-Host ""
