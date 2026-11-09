const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const OUT = path.join(__dirname, 'shots');
fs.mkdirSync(OUT, { recursive: true });

const results = {};
function ok(name, value, extra) { results[name] = { ok: !!value, extra }; }

async function boot(page) {
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  await page.waitForTimeout(800);
  const skip = page.locator('#skipAuthBtn');
  if (await skip.count() && await skip.isVisible().catch(() => false)) {
    await skip.click().catch(() => {});
    await page.waitForTimeout(500);
  }
  await page.evaluate(() => {
    document.querySelectorAll('.achievement-popup').forEach(e => e.style.display = 'none');
    const sheet = document.getElementById('weeklyGoalSheet');
    if (sheet) sheet.style.display = 'none';
    if (window.navigateTo) window.navigateTo('workouts');
  });
  await page.waitForSelector('#zyroWorkoutsRoot.zw .rail', { timeout: 15000 });
  await page.waitForTimeout(900);
}

async function confirmSet(page, exIndex, setIndex, weight, reps) {
  const ex = page.locator('#zwList .ex').nth(exIndex);
  if (!(await ex.evaluate(el => el.classList.contains('open')))) {
    await ex.locator('.ex-h').click();
    await page.waitForTimeout(500);
  }
  const row = ex.locator('.sr-row').nth(setIndex);
  if (weight != null) await row.locator('[data-zwf="w"]').fill(String(weight));
  await row.locator('[data-zwf="r"]').fill(String(reps));
  await row.locator('.ck').click();
  await page.waitForTimeout(140);
}

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => {
    if (!sessionStorage.getItem('zyroTestSeeded')) {
      localStorage.clear();
      localStorage.setItem('zyro_lang', 'tr');
      localStorage.setItem('weeklyGoal', '5');
      sessionStorage.setItem('zyroTestSeeded', '1');
    }
  });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  await boot(page);

  const empty = await page.evaluate(() => ({
    log: document.querySelector('#zwLog').innerText.replace(/\s+/g, ' ').trim(),
    count: document.querySelector('#zwCnt').textContent,
    data: JSON.parse(localStorage.getItem('zyro_data') || '{}')
  }));
  ok('empty list', empty.log.includes('Bugün henüz kayıt yok') && empty.count === '0 kayıt', empty);

  // Squat: open + 3 sets
  const squat = page.locator('#zwList .ex').nth(0);
  await squat.locator('.ex-h').click();
  await page.waitForTimeout(550);
  await page.screenshot({ path: path.join(OUT, 'workouts-squat-open.png') });

  await confirmSet(page, 0, 0, 80, 6);
  const autofill = await page.evaluate(() => {
    const ex = document.querySelectorAll('#zwList .ex')[0];
    const rows = ex.querySelectorAll('.sr-row');
    const focused = document.activeElement;
    return {
      weight2: rows[1].querySelector('[data-zwf="w"]').value,
      focusedField: focused ? focused.getAttribute('data-zwf') : null,
      focusedSet: focused ? focused.getAttribute('data-zwj') : null
    };
  });
  ok('next set autofill + focus', autofill.weight2 === '80' && autofill.focusedField === 'r' && autofill.focusedSet === '1', autofill);

  await confirmSet(page, 0, 1, null, 6);
  await confirmSet(page, 0, 2, null, 6);
  await page.waitForTimeout(400);
  const afterSquat = await page.evaluate(() => {
    const d = JSON.parse(localStorage.getItem('zyro_data') || '{}');
    const logs = (d.workoutLogs && d.workoutLogs[Object.keys(d.workoutLogs)[0]]) || [];
    return {
      logs,
      toast: document.querySelector('#zwToast').classList.contains('show'),
      toastText: document.querySelector('#zwToast').innerText.replace(/\s+/g, ' '),
      logText: document.querySelector('#zwLog').innerText.replace(/\s+/g, ' '),
      count: document.querySelector('#zwCnt').textContent,
      squatDone: document.querySelectorAll('#zwList .ex')[0].classList.contains('ok')
    };
  });
  ok('squat persisted as 3 sets', afterSquat.logs.length === 3 && afterSquat.logs.every(l => l.exercise === 'Squat' && l.weight === 80 && l.reps === 6 && l.setNumber), afterSquat.logs);
  ok('squat toast', afterSquat.toast && /Squat tamamlandı/.test(afterSquat.toastText) && /1\.440 kg hacim/.test(afterSquat.toastText), afterSquat.toastText);
  ok('squat in today list', /Squat/.test(afterSquat.logText) && /80 kg × 6/.test(afterSquat.logText) && /1\.440 kg/.test(afterSquat.logText), { logText: afterSquat.logText, count: afterSquat.count });
  ok('squat row completes', afterSquat.squatDone === true, afterSquat.squatDone);
  await page.screenshot({ path: path.join(OUT, 'workouts-after-squat.png') });

  // Undo one confirmed set, then re-confirm it
  const squatRow = page.locator('#zwList .ex').nth(0);
  await squatRow.locator('.ex-h').click();
  await page.waitForTimeout(500);
  await squatRow.locator('.ck').nth(0).click();
  await page.waitForTimeout(250);
  const afterUndo = await page.evaluate(() => {
    const d = JSON.parse(localStorage.getItem('zyro_data') || '{}');
    const date = Object.keys(d.workoutLogs || {})[0] || '';
    return (d.workoutLogs[date] || []).filter(l => l.exercise === 'Squat').length;
  });
  ok('undo removes persisted set', afterUndo === 2, afterUndo);
  await squatRow.locator('.ck').nth(0).click();
  await page.waitForTimeout(350);
  const afterRedo = await page.evaluate(() => {
    const d = JSON.parse(localStorage.getItem('zyro_data') || '{}');
    const date = Object.keys(d.workoutLogs || {})[0] || '';
    return (d.workoutLogs[date] || []).filter(l => l.exercise === 'Squat').length;
  });
  ok('re-confirm restores set', afterRedo === 3, afterRedo);

  // Dashboard sees the record
  await page.evaluate(() => window.navigateTo('dashboard'));
  await page.waitForTimeout(900);
  const dash = await page.evaluate(() => ({
    records: document.querySelector('.zyro-dash') ? document.querySelector('.zyro-dash').innerText.replace(/\s+/g, ' ').slice(0, 2000) : ''
  }));
  ok('dashboard shows Squat record', /Squat/.test(dash.records), dash.records.slice(0, 400));
  await page.screenshot({ path: path.join(OUT, 'dashboard-after-squat.png') });
  await page.evaluate(() => window.navigateTo('workouts'));
  await page.waitForTimeout(900);

  // Complete remaining exercises (indices 1..5)
  const plan = [
    [1, [80, 80, 80], 8],
    [2, [120, 120], 10],
    [3, [45, 45, 45], 12],
    [4, [60, 60, 60, 60], 15],
    [5, [0, 0, 0], 12]
  ];
  for (const [idx, weights, reps] of plan) {
    for (let s = 0; s < weights.length; s++) {
      await confirmSet(page, idx, s, weights[s] === 0 ? '' : weights[s], reps);
    }
  }
  await page.waitForTimeout(900);
  const finish = await page.evaluate(() => {
    const d = JSON.parse(localStorage.getItem('zyro_data') || '{}');
    const date = Object.keys(d.workoutLogs || {})[0] || '';
    return {
      finShown: document.querySelector('#zwFin').classList.contains('show'),
      finText: document.querySelector('#zwFin').innerText.replace(/\s+/g, ' '),
      celebrations: d.workoutCelebrations,
      logCount: (d.workoutLogs && d.workoutLogs[date] || []).length,
      canvas: !!document.querySelector('#zwCf')
    };
  });
  ok('celebration card + confetti', finish.finShown && /Antrenman tamamlandı/.test(finish.finText) && /18/.test(finish.finText), finish);
  ok('celebration persisted', !!(finish.celebrations && Object.keys(finish.celebrations).length), finish.celebrations);
  await page.screenshot({ path: path.join(OUT, 'workouts-finished.png') });

  // reload, no duplicate celebration
  await page.goto('http://localhost:5000/', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  const skip2 = page.locator('#skipAuthBtn');
  if (await skip2.count() && await skip2.isVisible().catch(() => false)) {
    await skip2.click().catch(() => {});
    await page.waitForTimeout(400);
  }
  await page.waitForFunction(() => typeof window.navigateTo === 'function', { timeout: 15000 });
  await page.evaluate(() => window.navigateTo('workouts'));
  await page.waitForTimeout(1800);
  const reload = await page.evaluate(() => ({
    finShown: document.querySelector('#zwFin').classList.contains('show'),
    logText: document.querySelector('#zwLog').innerText.replace(/\s+/g, ' '),
    logs: JSON.parse(localStorage.getItem('zyro_data') || '{}').workoutLogs
  }));
  ok('no duplicate celebration on reload', reload.finShown === false, reload.finShown);
  ok('records survive reload', /Squat/.test(reload.logText) && /Romanian Deadlift/.test(reload.logText), reload.logText.slice(0, 300));

  // Free log
  const freeOptions = await page.evaluate(() => Array.from(document.querySelectorAll('#zwExs option')).map(o => o.value));
  ok('free log offers non-program exercises', freeOptions.indexOf('Deadlift') >= 0 && freeOptions.indexOf('Plank') >= 0, freeOptions.slice(0, 12));
  await page.evaluate(() => {
    const sel = document.getElementById('zwExs');
    if (sel) sel.value = 'Deadlift';
  });
  await page.fill('#zwWgt', '50');
  await page.fill('#zwRep', '10');
  await page.fill('#zwSet', '2');
  await page.click('#zwSave');
  await page.waitForTimeout(350);
  const free = await page.evaluate(() => {
    const d = JSON.parse(localStorage.getItem('zyro_data') || '{}');
    const date = Object.keys(d.workoutLogs || {})[0] || '';
    const logs = d.workoutLogs[date] || [];
    const f = logs.filter(l => l.free);
    return { freeCount: f.length, free: f[0], toast: document.querySelector('#zwToast').innerText.replace(/\s+/g, ' '), logText: document.querySelector('#zwLog').innerText.replace(/\s+/g, ' ') };
  });
  ok('free log creates real record', free.freeCount === 1 && free.free.exercise === 'Deadlift' && free.free.sets === 2 && free.free.reps === 10 && free.free.weight === 50, free);

  console.log(JSON.stringify(results, null, 2));
  console.log('errors', errors);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
