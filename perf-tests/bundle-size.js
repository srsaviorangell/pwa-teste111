const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'dist');

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function getSize(dir) {
  let total = 0;
  const files = [];

  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else {
        const size = fs.statSync(full).size;
        total += size;
        files.push({ name: path.relative(DIST, full), size });
      }
    }
  }

  if (fs.existsSync(dir)) walk(dir);
  return { total, files };
}

console.log('\n==================================');
console.log('   BUNDLE SIZE ANALYZER');
console.log('==================================\n');

const dist = getSize(DIST);
const sorted = dist.files.sort((a, b) => b.size - a.size);

console.log('Top 10 Largest Files in dist/:');
console.log('-'.repeat(70));
for (const f of sorted.slice(0, 10)) {
  console.log(formatBytes(f.size).padEnd(10), f.name);
}

console.log('-'.repeat(70));
console.log(`\nTotal dist/ size: ${formatBytes(dist.total)}`);
console.log(`JS bundles:`);
const jsFiles = sorted.filter(f => f.name.endsWith('.js'));
for (const f of jsFiles) {
  console.log(`  ${formatBytes(f.size).padEnd(10)} ${f.name}`);
}
console.log('Total JS:', formatBytes(jsFiles.reduce((s, f) => s + f.size, 0)));

const imgFiles = sorted.filter(f => f.name.match(/\.(png|jpg|jpeg|webp|svg)$/i));
console.log(`\nImages in dist/: ${imgFiles.length} files, ${formatBytes(imgFiles.reduce((s, f) => s + f.size, 0))}`);
for (const f of imgFiles.sort((a, b) => b.size - a.size).slice(0, 5)) {
  console.log(`  ${formatBytes(f.size).padEnd(10)} ${f.name}`);
}

console.log(`\nVeredict:`);
const jsSize = jsFiles.reduce((s, f) => s + f.size, 0);
if (jsSize > 1048576) console.log('  FAIL: JS bundle > 1 MB. Consider code splitting.');
else console.log('  OK: JS bundle under 1 MB.');

if (dist.total > 20971520) console.log('  FAIL: dist/ > 20 MB. Optimize images first.');
else console.log('  OK: dist/ under 20 MB.');
