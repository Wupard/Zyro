const fs = require('fs');
let str = fs.readFileSync('index.html', 'utf-8');

// These remaining chars follow a different pattern: U+E2 + U+9C prefix
// âœ¦ = U+00E2 U+0153 U+00A6 = ✦
// âœ" = U+00E2 U+0153 U+201D = ✔  (wait, let me check)
// Let me map them correctly from the grep output

// From the line analysis earlier:
// âœ¦ at line 595: U+E2 U+9C U+A6 = E2 9C A6 = ✦ (U+2726)
// âœ" at line 1598: U+E2 U+9C U+94 wait... earlier showed U+E2 U+9C U+201D
// Let me check actual codepoints of these remaining chars

const lines = str.split('\n');
const toCheck = [595, 1525, 1528, 1555, 1598, 1599, 1643, 1666, 2049, 2064, 2095, 2814];
toCheck.forEach(lineNum => {
  const line = lines[lineNum - 1];
  if (!line) return;
  let seq = '';
  let seqs = [];
  for (const c of line) {
    if (c.codePointAt(0) > 127) {
      seq += c;
    } else {
      if (seq.length >= 2) seqs.push(seq);
      seq = '';
    }
  }
  if (seq.length >= 2) seqs.push(seq);
  if (seqs.length > 0) {
    console.log('Line ' + lineNum + ':');
    seqs.forEach(s => {
      const codes = [...s].map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase()).join('');
      console.log('  [' + s + '] = ' + codes);
    });
  }
});
