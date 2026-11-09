const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const OUT = path.join(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => {
    localStorage.clear();
    localStorage.setItem('zyro_lang', 'tr');
    localStorage.setItem('weeklyGoal', '5');
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  const skip = page.locator('#skipAuthBtn');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.evaluate(() => window.navigateTo('workouts'));
  await page.waitForTimeout(1300);
  await page.screenshot({ path: path.join(OUT, 'workouts-mobile-viewport.png') });
  await page.screenshot({ path: path.join(OUT, 'workouts-mobile-full.png'), fullPage: true });
  console.log('errors', errors);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
