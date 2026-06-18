const fs = require('fs');

function analyze(filepath) {
    const content = fs.readFileSync(filepath, 'utf8');
    const lines = content.split('\n');
    
    let innerHtmlCount = 0;
    let listenerCount = 0;
    let snapshotCount = 0;
    let renderCount = 0;
    
    const issues = [];
    
    lines.forEach((line, i) => {
        const lineNum = i + 1;
        
        if (line.includes('.innerHTML =') || line.includes('.innerHTML +=')) {
            innerHtmlCount++;
        }
        
        if (line.includes('.addEventListener(')) {
            listenerCount++;
            if (line.match(/\.addEventListener\(['"](scroll|resize)['"]/)) {
                if (!line.includes('throttle') && !line.includes('debounce')) {
                    issues.push(`Line ${lineNum}: Potential unthrottled scroll/resize listener -> ${line.trim()}`);
                }
            }
        }
        
        if (line.includes('onSnapshot(')) {
            snapshotCount++;
        }
        
        if (line.match(/function\s+\w*render/i) || line.match(/render\w*\s*=/i)) {
            renderCount++;
        }
        
        // Check for multiple DOM queries in loops
        if (line.match(/document\.query/)) {
            // this is a naive check just to see where they are
        }
    });
    
    console.log(`Total innerHTML assignments: ${innerHtmlCount}`);
    console.log(`Total event listeners added: ${listenerCount}`);
    console.log(`Total Firestore snapshots: ${snapshotCount}`);
    console.log(`Total render functions: ${renderCount}`);
    
    issues.slice(0, 20).forEach(issue => console.log(issue));
}

analyze('app.js');
