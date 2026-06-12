const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS = path.resolve(__dirname, '..', 'assets', 'images');
const DIST = path.resolve(__dirname, '..', 'dist', 'assets', 'assets', 'images');

const images = [
  {
    name: 'mapa4x.png',
    desc: 'Mapa interativo (display: ~500x663)',
    width: 1000,
    height: 1326,
  },
  {
    name: 'logosobra11.png',
    desc: 'Logo header (display: ~176x220)',
    width: 352,
    height: 440,
  },
  {
    name: 'splash-icon.png',
    desc: 'Splash screen',
    width: 1080,
    height: 1350,
  },
  {
    name: 'icon.png',
    desc: 'App icon',
    width: 512,
    height: 640,
  },
  {
    name: 'favicon.png',
    desc: 'Favicon',
    width: 196,
    height: 245,
  },
  {
    name: 'gadaptive-icon.png',
    desc: 'Adaptive icon',
    width: 512,
    height: 640,
  },
];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

(async () => {
  console.log('\n========================================');
  console.log('   IMAGE OPTIMIZER');
  console.log('========================================\n');

  let totalOriginal = 0;
  let totalNew = 0;

  for (const img of images) {
    const srcPath = path.join(ASSETS, img.name);

    if (!fs.existsSync(srcPath)) {
      console.log(`⚠  ${img.name.padEnd(30)} NOT FOUND`);
      continue;
    }

    const originalSize = fs.statSync(srcPath).size;
    totalOriginal += originalSize;
    const webpName = img.name.replace('.png', '.webp');

    // Resize to WebP
    const webpPath = path.join(ASSETS, webpName);
    await sharp(srcPath)
      .resize(img.width, img.height, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 4 })
      .toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    totalNew += webpSize;

    // Also resize PNG in place (for compatibility)
    const tempPng = srcPath + '.tmp';
    await sharp(srcPath)
      .resize(img.width, img.height, { fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(tempPng);

    const pngSize = fs.statSync(tempPng).size;
    fs.renameSync(tempPng, srcPath);

    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(
      `${img.name.padEnd(25)} ` +
      `${formatBytes(originalSize).padEnd(10)} → ` +
      `${formatBytes(pngSize).padEnd(10)} PNG | ` +
      `${formatBytes(webpSize).padEnd(10)} WebP ` +
      `(${savings}% menor)`
    );
  }

  console.log('-'.repeat(70));
  console.log(`Total original: ${formatBytes(totalOriginal)}`);
  console.log(`Total otimizado (WebP): ${formatBytes(totalNew)}`);
  console.log(`Economia total: ${((1 - totalNew / totalOriginal) * 100).toFixed(1)}%\n`);

  // Also optimize dist/ versions if they exist
  if (fs.existsSync(DIST)) {
    console.log('Otimizando cópias em dist/...');
    for (const img of images) {
      const webpName = img.name.replace('.png', '.webp');
      for (const name of [img.name, webpName]) {
        const distPath = path.join(DIST, name);
        if (fs.existsSync(distPath)) {
          const before = fs.statSync(distPath).size;
          await sharp(distPath)
            .resize(img.width, img.height, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85, effort: 4 })
            .toFile(distPath + '.opt');
          fs.renameSync(distPath + '.opt', distPath);
          const after = fs.statSync(distPath).size;
          if (after < before) {
            console.log(`  ${name} — ${formatBytes(before)} → ${formatBytes(after)}`);
          } else {
            fs.writeFileSync(distPath, await sharp(distPath).png({ compressionLevel: 9 }).toBuffer());
          }
        }
      }
    }
  }

  console.log('\n✅ Imagens otimizadas!');
  console.log('⚠  Lembre-se de rodar `npm run build:web` para regenerar o dist/');
})();

///savio louco 