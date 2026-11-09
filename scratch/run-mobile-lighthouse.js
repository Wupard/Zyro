const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const outJson = path.join(__dirname, 'lh-mobile-final.json');
const cmd = `npx lighthouse http://localhost:5000/ --output=json --output-path="${outJson}" --only-categories=performance --form-factor=mobile --screenEmulation.mobile=true --throttling-method=simulate --view=false --chrome-flags="--headless=old --no-sandbox --disable-gpu --disable-storage-reset"`;

console.log('Running Mobile Lighthouse on http://localhost:5000/ ...');
try {
  execSync(cmd, { stdio: 'inherit' });
  const report = JSON.parse(fs.readFileSync(outJson, 'utf8'));
  const score = Math.round(report.categories.performance.score * 100);
  console.log('==============================================');
  console.log('MOBILE LIGHTHOUSE PERFORMANCE SCORE:', score);
  console.log('==============================================');
  const audits = report.audits;
  ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].forEach(k => {
    if (audits[k]) {
      console.log(`${k}: ${audits[k].displayValue} (score: ${audits[k].score})`);
    }
  });
} catch (e) {
  console.error('Error running lighthouse:', e.message);
  process.exit(1);
}
