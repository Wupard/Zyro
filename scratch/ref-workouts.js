const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const OUT = path.join(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const d = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const dp = await d.newPage();
  await dp.goto('http://localhost:5000/zyro-workouts-v2.html', { waitUntil: 'load' });
  await dp.waitForTimeout(1200);
  await dp.screenshot({ path: path.join(OUT, 'ref-workouts-desktop-viewport.png') });
  await dp.screenshot({ path: path.join(OUT, 'ref-workouts-desktop-full.png'), fullPage: true });

  const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const mp = await m.newPage();
  await mp.goto('http://localhost:5000/zyro-workouts-v2.html', { waitUntil: 'load' });
  await mp.waitForTimeout(1200);
  await mp.screenshot({ path: path.join(OUT, 'ref-workouts-mobile-viewport.png') });
  await mp.screenshot({ path: path.join(OUT, 'ref-workouts-mobile-full.png'), fullPage: true });
  await browser.close();
  console.log('done');
})().catch(e => { console.error(e); process.exit(1); });
