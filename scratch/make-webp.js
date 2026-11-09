const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const files = [
  ['assets/logo2.png', 'assets/logo2.webp', 512],
  ['assets/0-5.png', 'assets/0-5.webp', 256],
  ['assets/5-15.png', 'assets/5-15.webp', 256],
  ['assets/15-30.png', 'assets/15-30.webp', 256],
  ['assets/30-60.png', 'assets/30-60.webp', 256],
  ['assets/60-100.png', 'assets/60-100.webp', 256]
];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5000/', { waitUntil: 'domcontentloaded' });
  for (const [input, output, max] of files) {
    const inPath = path.join(ROOT, input);
    if (!fs.existsSync(inPath)) { console.log('missing', input); continue; }
    const b64 = fs.readFileSync(inPath).toString('base64');
    const dataUrl = await page.evaluate(async ({ b64, max }) => {
      const img = new Image();
      img.src = 'data:image/png;base64,' + b64;
      await img.decode();
      const scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
      const w = Math.max(1, Math.round(img.naturalWidth * scale));
      const h = Math.max(1, Math.round(img.naturalHeight * scale));
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      const ctx = c.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, w, h);
      return { url: c.toDataURL('image/webp', 0.92), w, h, ow: img.naturalWidth, oh: img.naturalHeight };
    }, { b64, max });
    const buf = Buffer.from(dataUrl.url.split(',')[1], 'base64');
    fs.writeFileSync(path.join(ROOT, output), buf);
    console.log(output, dataUrl.ow + 'x' + dataUrl.oh, '->', dataUrl.w + 'x' + dataUrl.h, Math.round(buf.length / 1024) + 'KB');
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
