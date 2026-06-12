Write-Output "=== Build web PWA ==="

npx expo export -p web
if (-not $?) { exit 1 }

Write-Output "`n=== Copiando assets PWA extras ==="

$public = "public"
$dist = "dist"

Copy-Item "$public\manifest.json" "$dist\manifest.json" -Force
Copy-Item "$public\screenshot-mobile.png" "$dist\screenshot-mobile.png" -Force
Copy-Item "$public\screenshot-wide.png" "$dist\screenshot-wide.png" -Force
Copy-Item "$public\icons\icon512-maskable.png" "$dist\icons\icon512-maskable.png" -Force
Copy-Item "$public\sw.js" "$dist\sw.js" -Force

Write-Output "`n Build concluído! Assets PWA e SW copiados para dist/"
