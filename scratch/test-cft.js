const { execSync } = require('child_process');

const chrome = 'C:\\Users\\Administrator\\AppData\\Local\\ms-playwright\\chromium-1254\\chrome-win64\\chrome.exe';
process.env.CHROME_PATH = chrome;

const cmd = `npx lighthouse http://localhost:5000/ --output=json --output-path=scratch/lh-cft.json --only-categories=performance --view=false --chrome-flags="--headless=new --no-sandbox --disable-gpu"`;

try {
  console.log('Running Lighthouse with Chrome for Testing...');
  execSync(cmd, { stdio: 'inherit' });
  const r = JSON.parse(require('fs').readFileSync('scratch/lh-cft.json'));
  console.log('Lighthouse Performance Score:', r.categories.performance.score * 100);
} catch (e) {
  console.log('Error:', e.message);
}
