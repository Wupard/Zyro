// Repairs the app.js double-encoding introduced by PowerShell
// Get-Content (cp1252) -> Set-Content -Encoding UTF8.
const fs = require('fs');

const file = process.argv[2] || 'app.js';
let buf = fs.readFileSync(file);
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
const mojibake = buf.toString('utf8');

// Windows-1252 decode table for 0x80..0x9F -> unicode chars
const CP1252 = {
  0x80: 0x20AC, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E, 0x85: 0x2026,
  0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0160,
  0x8B: 0x2039, 0x8C: 0x0152, 0x8E: 0x017D, 0x91: 0x2018, 0x92: 0x2019,
  0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014,
  0x98: 0x02DC, 0x99: 0x2122, 0x9A: 0x0161, 0x9B: 0x203A, 0x9C: 0x0153,
  0x9E: 0x017E, 0x9F: 0x0178
};
const REV = new Map();
for (const [byte, cp] of Object.entries(CP1252)) REV.set(String.fromCodePoint(cp), Number(byte));

const bytes = Buffer.alloc(mojibake.length);
let bad = 0;
for (let i = 0; i < mojibake.length; i++) {
  const ch = mojibake[i];
  const cp = ch.codePointAt(0);
  if (cp <= 0xFF) bytes[i] = cp;
  else if (REV.has(ch)) bytes[i] = REV.get(ch);
  else { bytes[i] = 0x3F; bad++; }
}

let out = bytes.toString('utf8');
// Any real U+FFFD stay as they were originally; report count.
const replacements = (out.match(/\uFFFD/g) || []).length;
fs.writeFileSync(file, out, 'utf8');

console.log(JSON.stringify({
  file,
  bad,
  replacements,
  hasPostur: out.includes('Postür'),
  hasProgrami: out.includes('Programı'),
  hasMojibake: /Ã¼|Ä±|ÅŸ|Ã§|ÄŸ|Ã¶|â€/.test(out),
  sample: (out.match(/Spor Program[^\n']{0,30}/g) || []).slice(0, 3)
}, null, 2));
