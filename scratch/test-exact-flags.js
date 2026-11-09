const { execSync } = require('child_process');
const fs = require('fs');

process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function runWith(flags, label) {
  const outJson = 'scratch/lh-flag-test.json';
  const cmd = `npx lighthouse http://localhost:5000/ --output=json --output-path="${outJson}" --only-categories=performance --view=false ${flags} --chrome-flags="--headless=old --no-sandbox"`;
  try {
    console.log('Testing', label, '...');
    execSync(cmd, { stdio: 'inherit' });
    const r = JSON.parse(fs.readFileSync(outJson));
    console.log(label, 'SUCCESS! Score:', r.categories.performance.score * 100);
  } catch (e) {
    console.log(label, 'FAILED:', e.message);
  }
}

// Mobile form factor only
runWith('--form-factor=mobile --screenEmulation.mobile=true', 'Mobile emulation');
