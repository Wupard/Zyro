const { execSync } = require('child_process');

process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = 'npx lighthouse http://localhost:5000/test-lh.html --output=json --output-path=scratch/lh-test2.json --only-categories=performance --view=false --chrome-flags="--headless=old --no-sandbox"';
try {
  execSync(cmd, { stdio: 'pipe' });
  console.log('Bare HTML SUCCESS with headless=old!');
} catch (e) {
  console.log('Bare HTML CRASH:', e.message);
}
