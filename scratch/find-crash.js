const fs = require('fs');
const { execSync } = require('child_process');

process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

function check(html, label) {
  fs.writeFileSync('scratch/debug-lh.html', html);
  const cmd = `npx lighthouse http://localhost:5000/scratch/debug-lh.html --output=json --output-path=scratch/debug-out.json --only-categories=performance --view=false --chrome-flags="--headless=old --no-sandbox"`;
  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log('[OK]', label);
    return true;
  } catch (e) {
    console.log('[CRASH]', label);
    return false;
  }
}

const full = fs.readFileSync('index.html', 'utf8');

// Check without BOM
check(full.replace(/^\uFEFF/, ''), 'Full index.html without BOM');
