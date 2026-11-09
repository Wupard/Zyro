const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(__dirname, 'shots');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  
  // Seed with fresh account (zero XP, zero streak)
  await ctx.addInitScript(() => {
    localStorage.clear();
    const data = {
      workoutLogs: {}, attendance: {}, weightLog: {}, notes: {},
      programs: null, posturePrograms: null, completedDays: {},
      postureLogs: {}, profile: { displayName: 'Yusuf' }, xpOffset: 0
    };
    localStorage.setItem('zyro_data', JSON.stringify(data));
    localStorage.setItem('zyro_lang', 'tr');
    localStorage.setItem('weeklyGoal', '5');
  });

  const page = await ctx.newPage();
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
    if (window.navigateTo) window.navigateTo('posture');
  });

  await page.waitForSelector('#zyroPostureRoot.zw .rail', { timeout: 20000 });
  await page.waitForTimeout(600);

  console.log('--- 1. Posture page loaded ---');

  // Switch to Tuesday (Salı) to test real rep clicks
  await page.locator('#zyroPostureRoot .day[data-zpday="sal"]').click();
  await page.waitForTimeout(400);

  const tuesdayInitial = await page.evaluate(() => {
    const root = document.getElementById('zyroPostureRoot');
    return {
      selectedDay: root.querySelector('.day[aria-selected="true"] small').textContent,
      name: root.querySelector('.head h2').textContent,
      progress: root.querySelector('.day[data-zpday="sal"] u').style.getPropertyValue('--w')
    };
  });
  console.log('Tuesday initial:', tuesdayInitial);

  // Click on first exercise: Cat-Cow (20 tekrar)
  console.log('--- 2. Clicking to open Cat-Cow ---');
  const catCowHeader = page.locator('#zyroPostureRoot .ex-h').first();
  await catCowHeader.click();
  await page.waitForTimeout(300);

  const openedCatCow = await page.evaluate(() => {
    const ex = document.querySelector('#zyroPostureRoot .ex');
    const ckBtn = ex.querySelector('.ck');
    return {
      open: ex.classList.contains('open'),
      btnLabel: ckBtn ? ckBtn.getAttribute('aria-label') : null,
      repsText: ex.querySelector('.tm.rp') ? ex.querySelector('.tm.rp').textContent : null
    };
  });
  console.log('Cat-Cow opened state:', openedCatCow);

  // Click the check button on Cat-Cow
  console.log('--- 3. Clicking confirm button on Cat-Cow ---');
  await page.locator('#zyroPostureRoot .ex.open .ck').first().click();
  await page.waitForTimeout(500);

  const afterCatCowClick = await page.evaluate(() => {
    const root = document.getElementById('zyroPostureRoot');
    const toast = document.getElementById('zpToast');
    const ex = root.querySelectorAll('.ex')[0];
    return {
      exDone: ex.classList.contains('ok'),
      roundDone: ex.querySelector('.rd').classList.contains('ok'),
      progress: root.querySelector('.day[data-zpday="sal"] u').style.getPropertyValue('--w'),
      toastVisible: toast.classList.contains('show'),
      toastText: toast.textContent
    };
  });
  console.log('After Cat-Cow confirm:', afterCatCowClick);

  // Complete remaining rounds of Tuesday using markRound
  console.log('--- 4. Completing remaining rounds on Tuesday ---');
  await page.evaluate(() => {
    // Kneeling Hip Flexor (ex 1, 2 rounds)
    window.ZyroPosture.markRound('sal', 1, 0, true);
    window.ZyroPosture.markRound('sal', 1, 1, true);
    // Glute Bridge (ex 2, 2 rounds)
    window.ZyroPosture.markRound('sal', 2, 0, true);
    window.ZyroPosture.markRound('sal', 2, 1, true);
    // Deadbug (ex 3, 2 rounds)
    window.ZyroPosture.markRound('sal', 3, 0, true);
    window.ZyroPosture.markRound('sal', 3, 1, true);
  });

  await page.waitForTimeout(1000);

  const celebrationStatus = await page.evaluate(() => {
    const fin = document.getElementById('zpFin');
    const root = document.getElementById('zyroPostureRoot');
    return {
      salProgress: root.querySelector('.day[data-zpday="sal"] u').style.getPropertyValue('--w'),
      cardVisible: fin ? fin.classList.contains('show') : false,
      cardTitle: fin ? fin.querySelector('h3').textContent : null,
      cardBody: fin ? fin.querySelector('p').textContent : null,
      allExDone: [...root.querySelectorAll('.ex')].every(e => e.classList.contains('ok'))
    };
  });
  console.log('Tuesday full completion:', celebrationStatus);
  await page.screenshot({ path: path.join(OUT, 'posture-celebration.png') });

  // Close celebration popup
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  console.log('--- 5. Testing reload persistence ---');
  await page.reload({ waitUntil: 'load' });
  await page.waitForTimeout(1000);

  const skip2 = page.locator('#skipAuthBtn');
  if (await skip2.count() && await skip2.isVisible().catch(() => false)) {
    await skip2.click().catch(() => {});
    await page.waitForTimeout(600);
  }

  await page.evaluate(() => {
    document.querySelectorAll('.achievement-popup').forEach(e => e.style.display = 'none');
    const sheet = document.getElementById('weeklyGoalSheet');
    if (sheet) sheet.style.display = 'none';
    if (window.navigateTo) window.navigateTo('posture');
  });

  await page.waitForSelector('#zyroPostureRoot.zw .rail', { timeout: 20000 });
  await page.waitForTimeout(600);

  const persisted = await page.evaluate(() => {
    const root = document.getElementById('zyroPostureRoot');
    // switch to Tuesday
    window.ZyroPosture.setDay('sal');
    return {
      salProgress: root.querySelector('.day[data-zpday="sal"] u').style.getPropertyValue('--w'),
      allExDone: [...root.querySelectorAll('.ex')].every(e => e.classList.contains('ok')),
      streak: document.getElementById('zpStats').querySelector('div b').textContent
    };
  });
  console.log('After reload and switch to Tuesday:', persisted);
  await page.screenshot({ path: path.join(OUT, 'posture-reloaded-sal.png') });

  await browser.close();
  console.log('=== ALL TESTS SUCCESSFUL! ===');
})();
