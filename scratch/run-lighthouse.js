const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Users\\Administrator\\AppData\\Local\\ms-playwright\\chromium-1254\\chrome-win64\\chrome.exe';
process.env.CHROME_PATH = chromePath;

const outJson = path.join(__dirname, 'lh-mobile.json');
const cmd = `npx lighthouse http://localhost:5000/ --output=json --output-path="${outJson}" --only-categories=performance --form-factor=mobile --screenEmulation.mobile=true --throttling-method=simulate --chrome-flags="--headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage"`;

console.log('Running Lighthouse...');
try {
  const stdout = execSync(cmd, { encoding: 'utf8', env: process.env, stdio: 'inherit' });
  const report = JSON.parse(fs.readFileSync(outJson, 'utf8'));
  const score = Math.round(report.categories.performance.score * 100);
  console.log('=============================');
  console.log('LIGHTHOUSE PERFORMANCE SCORE:', score);
  console.log('=============================');
  const audits = report.audits;
  ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].forEach(k => {
    if (audits[k]) {
      console.log(`${k}: ${audits[k].displayValue} (score: ${audits[k].score})`);
    }
  });
} catch (e) {
  console.error('Error running lighthouse:', e.message);
}
