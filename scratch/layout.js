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
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const postureLogs = {};
  postureLogs[ds(yesterday)] = [
    { exercise: 'cat-cow', exerciseName: 'Cat-Cow', day: 'sal', round: 0, date: ds(yesterday), timestamp: Date.now() - 86400000, source: 'posture' }
  ];
  const data = {
    workoutLogs: logs, attendance, weightLog: weights, notes: {}, programs: null, posturePrograms: null,
    completedDays: {}, streak: 0, profile: { displayName: 'Yusuf' }, xpOffset: 540, postureLogs
  };
  localStorage.setItem('zyro_data', JSON.stringify(data));
  localStorage.setItem('zyro_lang', 'tr');
  localStorage.setItem('weeklyGoal', '5');
}

const ROOTS = {
  dashboard: '#zyroDashboardRoot',
  workouts: '#zyroWorkoutsRoot',
  posture: '#zyroPostureRoot'
};

async function boot(ctx, kind) {
  await ctx.addInitScript(seed);
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  await page.waitForTimeout(700);
  const skip = page.locator('#skipAuthBtn');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.evaluate(() => {
    document.querySelectorAll('.achievement-popup').forEach(e => e.style.display = 'none');
    const sheet = document.getElementById('weeklyGoalSheet');
    if (sheet) sheet.style.display = 'none';
  });
  if (kind !== 'dashboard') {
    await page.evaluate((k) => { if (window.navigateTo) window.navigateTo(k); }, kind);
  }
  await page.waitForSelector(ROOTS[kind] + '.zw .rail, ' + ROOTS[kind] + ' .rail', { timeout: 20000 });
  await page.waitForTimeout(1100);
  await page.evaluate(() => {
    const sheet = document.getElementById('weeklyGoalSheet');
    if (sheet) sheet.style.display = 'none';
  });
  return { page, errors };
}

function measure(page, kind) {
  return page.evaluate((kind) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const root = document.querySelector(kind === 'dashboard' ? '#zyroDashboardRoot' : kind === 'workouts' ? '#zyroWorkoutsRoot' : '#zyroPostureRoot');
    if (!root) return { missing: true };
    const rail = root.querySelector('.rail');
    const main = root.querySelector('main');
    const firstPanel = main && main.querySelector('.p');
    const rect = el => el ? el.getBoundingClientRect() : null;
    const r = rect(root), ra = rect(rail), m = rect(main), p = rect(firstPanel);

    const over = [];
    root.querySelectorAll('button, a, input, select, textarea').forEach(el => {
      const b = el.getBoundingClientRect();
      if (b.width === 0 || b.height === 0) return;
      if (b.right > vw + 1 || b.left < -1) {
        const scroller = el.closest('.nav, .days, .chips');
        if (!scroller) over.push({ tag: el.tagName, cls: el.className && String(el.className).slice(0, 30), left: Math.round(b.left), right: Math.round(b.right) });
      }
    });

    const navLinks = [...root.querySelectorAll('.nav a')];
    const navH = navLinks.map(a => Math.round(a.getBoundingClientRect().height));
    const smallTargets = [...root.querySelectorAll('button, .nav a, .day')].filter(el => {
      const b = el.getBoundingClientRect();
      return b.width > 0 && b.height > 0 && (b.height < 44 || b.width < 24);
    }).length;

    const inputs = [...root.querySelectorAll('input, select, textarea')];
    const badFonts = inputs.filter(el => parseFloat(getComputedStyle(el).fontSize) < 16).length;

    return {
      viewport: vw + 'x' + vh,
      scrollWidth: document.documentElement.scrollWidth,
      overflowX: document.documentElement.scrollWidth > vw + 1,
      xOverflow: over.slice(0, 8),
      root: r && { x: Math.round(r.x), w: Math.round(r.width) },
      rail: ra && { x: Math.round(ra.x), y: Math.round(ra.y), w: Math.round(ra.width), h: Math.round(ra.height), pos: getComputedStyle(rail).position },
      main: m && { x: Math.round(m.x), w: Math.round(m.width) },
      panel: p && { x: Math.round(p.x), w: Math.round(p.width) },
      leftMargin: r ? Math.round(r.x) : null,
      rightMargin: r ? Math.round(vw - (r.x + r.width)) : null,
      navMin: navH.length ? Math.min(...navH) : null,
      smallTargets,
      badFonts,
      inputs: inputs.length
    };
  }, kind);
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const out = {};
  const sizes = [
    ['1920', 1920, 1080],
    ['1440', 1440, 1000],
    ['768', 768, 1024],
    ['390', 390, 844]
  ];

  for (const [label, width, height] of sizes) {
    for (const kind of ['dashboard', 'workouts', 'posture']) {
      const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, isMobile: width < 1000, hasTouch: width < 1000 });
      const { page, errors } = await boot(ctx, kind);
      const info = await measure(page, kind);
      info.errors = errors;
      out[kind + '-' + label] = info;
      await page.screenshot({ path: path.join(OUT, `layout-${kind}-${label}.png`) });
      await page.screenshot({ path: path.join(OUT, `layout-${kind}-${label}-full.png`), fullPage: true });
      await ctx.close();
    }
  }

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
