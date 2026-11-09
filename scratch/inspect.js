const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const p = await ctx.newPage();
  await p.goto('http://localhost:5000/', { waitUntil: 'load' });
  await p.waitForSelector('#zyroDashboardRoot .rail');
  await p.waitForTimeout(800);
  const info = await p.evaluate(() => {
    const box = s => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); const st = getComputedStyle(e); return { x: r.x, y: r.y, w: r.width, h: r.height, display: st.display, pos: st.position, ml: st.marginLeft, pad: st.padding, flex: st.flex, maxW: st.maxWidth, ov: st.overflow, op: st.opacity, z: st.zIndex }; };
    return {
      body: box('body'), mainContent: box('.main-content'), page: box('#pageDashboard'), dashRoot: box('#zyroDashboardRoot'),
      rail: box('.rail'), dmain: box('#zyroDashboardRoot main'), header: box('#zyroDashboardRoot header'), grid: box('#zyroDashboardRoot .grid'),
      hero: box('#zyroDashboardRoot .hero'),
      text: document.querySelector('#zyroDashboardRoot')?.innerText?.slice(0, 200),
      scrollX: window.scrollX, innerW: window.innerWidth
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await p.screenshot({ path: __dirname + '/shots/debug-desktop.png' });
  await browser.close();
})();
