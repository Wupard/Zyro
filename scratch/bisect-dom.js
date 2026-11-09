const fs = require('fs');
const { execSync } = require('child_process');

const original = fs.readFileSync('index.html', 'utf8');

function test(html, label) {
  fs.writeFileSync('test-lh.html', html);
  const cmd = `npx lighthouse http://localhost:5000/test-lh.html --output=json --output-path=scratch/lh-test2.json --only-categories=performance --view=false --chrome-flags="--headless=new --no-sandbox --disable-gpu"`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(label, 'SUCCESS!');
    return true;
  } catch (e) {
    console.log(label, 'CRASH');
    return false;
  }
}

const lines = original.split('\n');
console.log('Total lines:', lines.length);

// Half 1: lines 0 to 1500
test(lines.slice(0, 1500).join('\n') + '</body></html>', 'Lines 0-1500');

// Half 2: head + lines 1500 to end
const head = lines.slice(0, 50).join('\n') + '<body>\n';
test(head + lines.slice(1500).join('\n'), 'Lines 1500-end');
