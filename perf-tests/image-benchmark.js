const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets', 'images');

const images = [
  { name: 'mapa4x.png', desc: 'Mapa interativo' },
  { name: 'logosobra11.png', desc: 'Logo NavTop' },
  { name: 'splash-icon.png', desc: 'Splash screen' },
  { name: 'icon.png', desc: 'App icon' },
  { name: 'favicon.png', desc: 'Favicon' },
  { name: 'gadaptive-icon.png', desc: 'Adaptive icon' },
  { name: 'palco-principal-semfundo.png', desc: 'Palco principal' },
  { name: 'zebarraca-semfundo.png', desc: 'Barracão' },
];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function estimateDecodeTime(bytes) {
  // rough estimate: ~100 MB/s decode speed for PNG
  return (bytes / 1048576 / 100).toFixed(2);
}

console.log('\n========================================');
console.log('   IMAGE BENCHMARK - LOAD TIME ESTIMATE');
console.log('========================================\n');

console.log('File'.padEnd(30), 'Size'.padEnd(10), 'Ratio'.padEnd(8), 'Est. Decode'.padEnd(12), 'Veredict');
console.log('-'.repeat(80));

let totalBytes = 0;
let oversized = 0;

for (const img of images) {
  const filePath = path.join(ASSETS, img.name);
  let exists = fs.existsSync(filePath);

  if (!exists) {
    // check images/ (old location)
    const oldPath = path.join(ROOT, 'images', img.name);
    exists = fs.existsSync(oldPath);
    if (exists) {
      console.log(`${img.name.padEnd(30)} REMOVED (was in images/)`.padEnd(80), 'OK');
    } else {
      console.log(`${img.name.padEnd(30)} NOT FOUND`.padEnd(80), '-');
    }
    continue;
  }

  const stat = fs.statSync(filePath);
  const bytes = stat.size;
  totalBytes += bytes;

  const sizeStr = formatBytes(bytes);
  const estDecode = estimateDecodeTime(bytes);

  let ratio;
  let veredict;

  if (bytes > 5242880) { // > 5 MB
    ratio = formatBytes(bytes / 51200);
    veredict = 'FAIL';
    oversized++;
  } else if (bytes > 1048576) { // > 1 MB
    ratio = formatBytes(bytes / 51200);
    veredict = 'WARN';
  } else if (bytes > 102400) { // > 100 KB
    ratio = (bytes / 51200).toFixed(1) + 'x';
    veredict = 'OK';
  } else {
    ratio = (51200 / bytes).toFixed(1) + 'x smaller';
    veredict = 'GOOD';
  }

  console.log(
    img.name.padEnd(30),
    sizeStr.padEnd(10),
    ratio.padEnd(8),
    `${estDecode}s`.padEnd(12),
    veredict
  );
}

console.log('-'.repeat(80));
console.log(`\nTotal image size in assets/images/: ${formatBytes(totalBytes)}`);
console.log(`Oversized images (> 5 MB): ${oversized} of ${images.length}`);
console.log(`Recommended max per image: ~100 KB (or ~300 KB for full-width)`);
console.log(`\nIf all images were optimized: ~${formatBytes(Math.round(totalBytes * 0.02))}`);
console.log('Estimated savings: ~' + formatBytes(Math.round(totalBytes * 0.98)));
