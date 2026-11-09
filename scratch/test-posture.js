const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const OUT = path.join(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });

function seed() {
  const pad = n => String(n).padStart(2, '0');
  const ds = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const today = new Date();
  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const days = [ds(today), ds(yesterday)];
  const postureLogs = {};
  postureLogs[days[1]] = [{ exercise: 'cat-cow', exerciseName: 'Cat-Cow', day: 'sal', round: 0, date: days[1], timestamp: Date.now() - 86400000 }];
  postureLogs[days[0]] = [];
  const data = {
    workoutLogs: {}, attendance: {}, weightLog: {}, notes: {},
    programs: null, posturePrograms: null, completedDays: {},
    postureLogs, profile: { displayName: 'Yusuf' }, xpOffset: 0
  };
  localStorage.setItem('zyro_data', JSON.stringify(data));
  localStorage.setItem('zyro_lang', 'tr');
  localStorage.setItem('weeklyGoal', '5');
}

async function boot(ctx) {
  await ctx.addInitScript(seed);
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  const skip = page.locator('#skipAuthBtn');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(500);
  }
  await page.evaluate(() => {
    document.querySelectorAll('.achievement-popup').forEach(e => e.style.display = 'none');
    const sheet = document.getElementById('weeklyGoalSheet');
    if (sheet) sheet.style.display = 'none';
    if (window.navigateTo) window.navigateTo('posture');
  });
  await page.waitForSelector('#zyroPostureRoot.zw .rail', { timeout: 20000 });
  await page.waitForTimeout(800);
  return { page, errors };
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const out = {};

  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const { page, errors } = await boot(ctx);
    out.errors = errors;
    out.initial = await page.evaluate(() => {
      const root = document.getElementById('zyroPostureRoot');
      return {
        bodyClass: document.body.className,
        days: [...root.querySelectorAll('.day')].map(d => ({
          label: d.querySelector('small').textContent,
          name: d.querySelector('b').textContent,
          w: d.querySelector('u').style.getPropertyValue('--w'),
          selected: d.getAttribute('aria-selected')
        })),
        rows: [...root.querySelectorAll('.ex')].map(e => ({
          name: e.querySelector('.nm').firstChild.textContent,
          meta: e.querySelector('.meta b').textContent,
          open: e.classList.contains('open'),
          rounds: e.querySelectorAll('.rd').length
        })),
        pill: document.getElementById('zpPill').textContent,
        focus: document.getElementById('zpFocus').textContent,
        stats: document.getElementById('zpStats').textContent,
        level: document.getElementById('zpLevel').textContent,
        legacyVisible: (() => {
          const pg = document.getElementById('pagePosture');
          const legacy = pg.querySelector('.page-banner');
          return legacy ? getComputedStyle(legacy).display : 'missing';
        })()
      };
    });
    await page.screenshot({ path: path.join(OUT, 'posture-1440.png') });
    await page.screenshot({ path: path.join(OUT, 'posture-1440-full.png'), fullPage: true });

    // open first exercise
    await page.locator('#zyroPostureRoot .ex-h').first().click();
    await page.waitForTimeout(500);
    out.opened = await page.evaluate(() => {
      const e = document.querySelector('#zyroPostureRoot .ex');
      return {
        open: e.classList.contains('open'),
        rows: [...e.querySelectorAll('.rd')].map(r => ({
          label: r.querySelector('label').textContent,
          time: r.querySelector('.tm').textContent,
          btn: r.querySelector('button').textContent.trim(),
          p: r.style.getPropertyValue('--p')
        }))
      };
    });
    // start the timer
    await page.locator('#zyroPostureRoot .ex.open .go').first().click();
    await page.waitForTimeout(1200);
    out.running = await page.evaluate(() => {
      const t = document.querySelector('#zyroPostureRoot .ex.open .tm');
      const b = document.querySelector('#zyroPostureRoot .ex.open .go');
      return { time: t && t.textContent, btn: b && b.textContent, p: t && t.parentElement.style.getPropertyValue('--p') };
    });
    // pause
    await page.locator('#zyroPostureRoot .ex.open .go').first().click();
    await page.waitForTimeout(300);
    out.paused = await page.evaluate(() => {
      const b = document.querySelector('#zyroPostureRoot .ex.open .go');
      return { btn: b && b.textContent };
    });
    await page.screenshot({ path: path.join(OUT, 'posture-1440-open.png') });
    await ctx.close();
  }

  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const { page, errors } = await boot(ctx);
    out.mobileErrors = errors;
    out.mobile = await page.evaluate(() => {
      const root = document.getElementById('zyroPostureRoot');
      const rail = root.querySelector('.rail');
      const nav = root.querySelector('.nav');
      const r = rail.getBoundingClientRect();
      const m = root.querySelector('main').getBoundingClientRect();
      return {
        scrollWidth: document.documentElement.scrollWidth,
        viewport: innerWidth,
        rail: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), pos: getComputedStyle(rail).position },
        main: { x: Math.round(m.x), w: Math.round(m.width) },
        navScroll: nav.scrollWidth,
        navClient: nav.clientWidth,
        dayScroll: (() => { const d = root.querySelector('.days'); return { s: d.scrollWidth, c: d.clientWidth }; })()
      };
    });
    await page.screenshot({ path: path.join(OUT, 'posture-390.png') });
    await page.screenshot({ path: path.join(OUT, 'posture-390-full.png'), fullPage: true });
    await ctx.close();
  }

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
