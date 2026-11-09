const { execSync } = require('child_process');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
process.env.CHROME_PATH = edge;

const flags = '--headless=old --no-sandbox --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer';
const cmd = `npx lighthouse http://localhost:5000/ --chrome-flags="${flags}" --only-categories=performance --output=json --output-path=scratch/lh-res.json --view=false`;

console.log('Running test with headless=old...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('SUCCESS!');
} catch (e) {
  console.log('Failed:', e.message);
}
