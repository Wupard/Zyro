const fs = require('fs');
const b = fs.readFileSync('app.js');
const s = b.toString('utf8');
const mojibake = /Ã¼|Ä±|ÅŸ|Ã§|ÄŸ|Ã¶|â€/.test(s);
console.log(JSON.stringify({
  bom: b[0] === 0xEF,
  bytes: b.length,
  mojibake,
  fffd: (s.match(/\uFFFD/g) || []).length,
  zp: s.includes('sessionDone:') && s.includes('Postür seansı tamamlandı'),
  postureBranch: s.includes("page==='posture'") && s.includes('ZyroPosture.sync'),
  webp: (s.match(/assets\/[0-9-]+\.webp/g) || []).length,
  lazy: s.includes('ZYRO_PAGE_SCRIPTS') && s.includes('zyroRunConfetti')
}, null, 2));
