// Simulates render cost by measuring StyleSheet.create() overhead
// when called repeatedly (the getStyles() issue from point #5)

console.log('\n==========================================');
console.log('   RENDER BENCHMARK - StyleSheet.create()');
console.log('==========================================\n');

// Simulates what getStyles() does internally
function createStyles() {
  return {
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    textPadroes: { fontSize: 14, fontWeight: '600' },
    textDataChamativa: { fontSize: 28, fontWeight: '900' },
    textBandas: { fontSize: 22, fontWeight: '600' },
    cardGereis: { flex: 1, padding: 8 },
    cssbuttonsIoButton: { borderWidth: 0 },
  };
}

const WARMUP = 100;
const SAMPLES = 10000;

// Warmup
for (let i = 0; i < WARMUP; i++) createStyles();

// Benchmark: calling createStyles() every render (current approach)
const start1 = performance.now();
for (let i = 0; i < SAMPLES; i++) createStyles();
const elapsed1 = performance.now() - start1;
const avg1 = elapsed1 / SAMPLES;

console.log('Current approach (getStyles called every render):');
console.log(`  ${SAMPLES} calls in ${elapsed1.toFixed(2)}ms`);
console.log(`  Average: ${(avg1 * 1000).toFixed(2)}μs per call`);
console.log(`  At 60fps (60 renders/s): ${(avg1 * 60).toFixed(2)}ms/s spent on styles\n`);

// Benchmark: memoized (calculating only once)
const start2 = performance.now();
const memoized = createStyles();
for (let i = 0; i < SAMPLES; i++) {
  const _ = memoized; // just reference, no creation
}
const elapsed2 = performance.now() - start2;
const avg2 = elapsed2 / SAMPLES;

console.log('Memoized approach (getStyles called once):');
console.log(`  ${SAMPLES} reads in ${elapsed2.toFixed(2)}ms`);
console.log(`  Average: ${(avg2 * 1000).toFixed(2)}μs per render\n`);

const savings = ((elapsed1 - elapsed2) / elapsed1 * 100).toFixed(1);
console.log(`Estimated savings: ${savings}% of style computation time`);

console.log(`\nVeredict:`);
if (avg1 * 60 > 5) console.log('  WARN: StyleSheet recreation costs > 5ms/s at 60fps. Use useMemo().');
else console.log('  OK: StyleSheet cost is negligible.');
