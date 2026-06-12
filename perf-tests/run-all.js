const { spawn } = require('child_process');
const path = require('path');

const tests = [
  { name: 'Bundle Size', file: 'bundle-size.js' },
  { name: 'Image Benchmark', file: 'image-benchmark.js' },
  { name: 'Render Benchmark', file: 'render-benchmark.js' },
  { name: 'API Latency', file: 'api-latency.js' },
];

async function run(file) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(__dirname, file)], {
      stdio: 'inherit',
    });
    child.on('close', (code) => resolve(code));
    child.on('error', reject);
  });
}

(async () => {
  console.log('========================================');
  console.log('   PWA PERFORMANCE TEST SUITE');
  console.log('========================================\n');

  for (const test of tests) {
    console.log(`\n--- Running: ${test.name} ---`);
    const code = await run(test.file);
    if (code !== 0) {
      console.log(`[FAIL] ${test.name} exited with code ${code}`);
    }
  }

  console.log('\n========================================');
  console.log('   ALL TESTS COMPLETE');
  console.log('========================================\n');
})();
