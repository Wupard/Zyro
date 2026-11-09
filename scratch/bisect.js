const fs = require('fs');
const { execSync } = require('child_process');

const original = fs.readFileSync('index.html', 'utf8');

// Let's test removing scripts from bottom or head
function testWith(content, label) {
  fs.writeFileSync('test-lh.html', content);
  const cmd = `npx lighthouse http://localhost:5000/test-lh.html --output=json --output-path=scratch/lh-test2.json --only-categories=performance --view=false --chrome-flags="--headless=new --no-sandbox --disable-gpu"`;
  try {
    console.log('Testing', label, '...');
    execSync(cmd, { stdio: 'pipe' });
    const r = JSON.parse(fs.readFileSync('scratch/lh-test2.json'));
    console.log(label, 'SUCCESS! Score:', r.categories.performance.score * 100);
    return true;
  } catch (e) {
    console.log(label, 'FAILED / CRASHED');
    return false;
  }
}

// Test 1: without any scripts
testWith(original.replace(/<script[\s\S]*?<\/script>/gi, ''), 'No scripts');
// Test 2: with scripts but without firebase
testWith(original.replace(/<script[^>]*firebase[\s\S]*?<\/script>/gi, ''), 'No firebase');
