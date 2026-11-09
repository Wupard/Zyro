const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const OUT = path.join(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });

function seed() {
  const pad = n => String(n).padStart(2, '0');
  const ds = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const today = new Date();
  const logs = {}, weights = {}, attendance = {};
  const exercises = ['Barbell Bench Press', 'Incline Dumbbell Press', 'Lateral Raise', 'Triceps Pushdown', 'Barbell Row', 'Lat Pulldown', 'Seated Cable Row', 'Incline Dumbbell Curl', 'Squat', 'Romanian Deadlift', 'Leg Press', 'Standing Calf Raise', 'Plank'];
  const weekPlan = [0, 3, 5, 6];
  for (let w = 15; w >= 0; w--) {
    for (const off of weekPlan) {
      const d = new Date(today);
      d.setDate(d.getDate() - (w * 7) + off - 4);
      if (d > today) continue;
      const key = ds(d);
      const n = 4 + ((w * 3 + off) % 3);
      const arr = [];
      for (let i = 0; i < n; i++) {
        const ex = exercises[(w + i + off) % exercises.length];
        const base = 40 + ((w * 7 + off + i * 13) % 55);
        arr.push({ exercise: ex, weight: +(base + (15 - w) * 1.4).toFixed(2), inputWeight: +(base + (15 - w) * 1.4).toFixed(2), unit: 'kg', reps: 8 + ((w + i) % 5), sets: 3 + ((i + off) % 2), timestamp: d.getTime() });
      }
      logs[key] = arr;
      attendance[key] = true;
    }
    if (w % 2 === 0) {
      const d = new Date(today);
      d.setDate(d.getDate() - w * 7);
      weights[ds(d)] = +(82 - (15 - w) * 0.25 + (w % 3) * 0.1).toFixed(1);
    }
  }
  const data = {
    workoutLogs: logs, attendance, weightLog: weights, notes: {}, programs: null, posturePrograms: null,
    completedDays: {}, streak: 0, profile: { displayName: 'Yusuf' }, xpOffset: 540
  };
  localStorage.setItem('zyro_data', JSON.stringify(data));
  localStorage.setItem('zyro_lang', 'tr');
  localStorage.setItem('weeklyGoal', '5');
}

async function shoot(page, name) {
  await page.waitForSelector('#zyroDashboardRoot .rail', { timeout: 20000 });
  await page.waitForTimeout(500);
  const skip = page.locator('#skipAuthBtn');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(300);
  }
  await page.evaluate(() => {
    document.querySelectorAll('.achievement-popup').forEach(e => e.style.display = 'none');
    const sheet = document.getElementById('weeklyGoalSheet');
    if (sheet) sheet.style.display = 'none';
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2200);
  await page.screenshot({ path: path.join(OUT, name + '-viewport.png') });
  await page.screenshot({ path: path.join(OUT, name + '-full.png'), fullPage: true });
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];

  const desktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await desktop.addInitScript(seed);
  const dp = await desktop.newPage();
  dp.on('pageerror', e => errors.push('desktop: ' + e.message));
  await dp.goto('http://localhost:5000/', { waitUntil: 'load' });
  await shoot(dp, 'desktop');

  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  await mobile.addInitScript(seed);
  const mp = await mobile.newPage();
  mp.on('pageerror', e => errors.push('mobile: ' + e.message));
  await mp.goto('http://localhost:5000/', { waitUntil: 'load' });
  await shoot(mp, 'mobile');

  const refDesktop = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const rdp = await refDesktop.newPage();
  await rdp.goto('http://localhost:5000/zyro-dashboard-v3.html', { waitUntil: 'load' });
  await rdp.waitForTimeout(2200);
  await rdp.screenshot({ path: path.join(OUT, 'ref-desktop-viewport.png') });
  await rdp.screenshot({ path: path.join(OUT, 'ref-desktop-full.png'), fullPage: true });

  const refMobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const rmp = await refMobile.newPage();
  await rmp.goto('http://localhost:5000/zyro-dashboard-v3.html', { waitUntil: 'load' });
  await rmp.waitForTimeout(2200);
  await rmp.screenshot({ path: path.join(OUT, 'ref-mobile-viewport.png') });
  await rmp.screenshot({ path: path.join(OUT, 'ref-mobile-full.png'), fullPage: true });

  await browser.close();
  console.log('errors', errors);
  console.log(fs.readdirSync(OUT));
})().catch(e => { console.error(e); process.exit(1); });
