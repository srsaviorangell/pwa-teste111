const https = require('https');

const API_URL = 'https://api-para-alimenta-projeto.onrender.com/api/events';
const TIMEOUT = 15000;
const SAMPLES = 3;

function fetch(url) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const req = https.get(url, { timeout: TIMEOUT }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        const elapsed = Date.now() - start;
        let size = 0;
        try {
          const json = JSON.parse(data);
          size = json.data ? json.data.length : 0;
        } catch (e) { /* ignore */ }
        resolve({ elapsed, status: res.statusCode, size });
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
  });
}

console.log('\n==================================');
console.log('   API LATENCY BENCHMARK');
console.log('==================================\n');
console.log(`Endpoint: ${API_URL}`);
console.log(`Samples: ${SAMPLES}\n`);

(async () => {
  const results = [];
  for (let i = 1; i <= SAMPLES; i++) {
    process.stdout.write(`Request ${i}/${SAMPLES}... `);
    try {
      const r = await fetch(API_URL);
      results.push(r);
      console.log(`${r.elapsed}ms | status ${r.status} | ${r.size} eventos`);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
    }
  }

  console.log('\n' + '-'.repeat(50));
  if (results.length > 0) {
    const avg = Math.round(results.reduce((s, r) => s + r.elapsed, 0) / results.length);
    const min = Math.min(...results.map(r => r.elapsed));
    const max = Math.max(...results.map(r => r.elapsed));
    console.log(`\nResults:`);
    console.log(`  Average: ${avg}ms`);
    console.log(`  Min:     ${min}ms`);
    console.log(`  Max:     ${max}ms`);

    console.log(`\nVeredict:`);
    if (avg > 3000) console.log('  FAIL: API > 3s average. Consider caching strategy (stale-while-revalidate).');
    else if (avg > 1000) console.log('  WARN: API > 1s. Add SW stale-while-revalidate for faster repeat visits.');
    else console.log('  GOOD: API < 1s.');
  } else {
    console.log('No successful requests to analyze.');
  }
})();
