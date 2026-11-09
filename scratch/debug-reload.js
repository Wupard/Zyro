const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await ctx.newPage();
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  await page.waitForFunction(() => typeof window.navigateTo === 'function');
  const skip = page.locator('#skipAuthBtn');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.evaluate(() => window.navigateTo('posture'));
  await page.waitForSelector('#zyroPostureRoot.zw .rail', { timeout: 10000 });
  console.log('First load OK!');

  // Now reload
  console.log('Reloading...');
  await page.reload({ waitUntil: 'load' });
  await page.waitForFunction(() => typeof window.navigateTo === 'function');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.evaluate(() => window.navigateTo('posture'));
  await page.waitForSelector('#zyroPostureRoot.zw .rail', { timeout: 10000 });
  console.log('Reload load OK!');

  await browser.close();
  console.log('SUCCESS!');
})();
