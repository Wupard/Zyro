const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  // Launch chromium with remote debugging port
  const browser = await chromium.launch({
    headless: true,
    args: ['--remote-debugging-port=9222', '--no-sandbox', '--disable-gpu']
  });

  console.log('Browser launched with remote debugging port 9222');

  const lighthouse = (await import('lighthouse')).default;
  
  const options = {
    port: 9222,
    onlyCategories: ['performance'],
    output: 'json',
    logLevel: 'info'
  };

  const runnerResult = await lighthouse('http://127.0.0.1:5000/', options);

  const report = runnerResult.lhr;
  const score = Math.round(report.categories.performance.score * 100);
  console.log('=================================');
  console.log('LIGHTHOUSE MOBILE PERFORMANCE SCORE:', score);
  console.log('=================================');

  fs.writeFileSync(path.join(__dirname, 'lh-result.json'), JSON.stringify(report, null, 2));

  await browser.close();
})().catch(err => {
  console.error('Lighthouse runner error:', err);
  process.exit(1);
});
