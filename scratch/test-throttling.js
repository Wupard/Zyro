const { execSync } = require('child_process');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
process.env.CHROME_PATH = edge;

// Test with throttlingMethod: 'provided' (no devtools network/cpu throttling simulation which can crash on older edge/windows)
const cmd = `npx lighthouse http://localhost:5000/ --output=json --output-path=scratch/lh-out.json --only-categories=performance --view=false --throttling-method=provided --chrome-flags="--headless=new --no-sandbox --disable-gpu"`;

try {
  console.log('Running Lighthouse with --throttling-method=provided ...');
  execSync(cmd, { stdio: 'inherit' });
  const r = JSON.parse(require('fs').readFileSync('scratch/lh-out.json'));
  console.log('Lighthouse Performance Score:', r.categories.performance.score * 100);
} catch (e) {
  console.log('Error:', e.message);
}
