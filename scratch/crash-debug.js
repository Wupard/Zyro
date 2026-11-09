const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: 'old',
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  page.on('crash', () => console.log('PAGE CRASHED!'));
  page.on('close', () => console.log('PAGE CLOSED'));
  page.on('console', m => console.log('LOG:', m.text()));
  page.on('pageerror', e => console.log('ERR:', e.message));

  console.log('goto localhost:5000/ ...');
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  console.log('Loaded without crash!');
  await page.waitForTimeout(2000);
  console.log('Still alive!');
  await browser.close();
})();
