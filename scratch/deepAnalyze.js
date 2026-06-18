const fs = require('fs');

function deepAnalyze(filepath) {
    const lines = fs.readFileSync(filepath, 'utf8').split('\n');
    let inSnapshot = false;
    let snapshotLine = 0;
    
    // Track charting instances
    const chartCreationLines = [];
    const chartDestroyLines = [];
    
    // Track DOM queries inside loops
    let inLoop = false;
    let loopDepth = 0;
    const domInLoops = [];
    
    // Track document queries
    let docQueries = 0;
    
    lines.forEach((line, i) => {
        const lineNum = i + 1;
        const text = line.trim();
        
        // Count doc queries
        if (text.match(/document\.getElementById|document\.querySelector/)) {
            docQueries++;
            if (inLoop) {
                domInLoops.push({line: lineNum, text});
            }
        }
        
        // Loop tracking
        if (text.match(/^(for|while)\s*\(/) || text.match(/\.forEach\s*\(/) || text.match(/\.map\s*\(/)) {
            inLoop = true;
            loopDepth++;
        }
        if (text.includes('{')) {
            if (inLoop && !text.match(/^(for|while)/)) {
                // Approximate depth tracking
            }
        }
        if (text.includes('}')) {
            if (inLoop) {
                // approximate
                loopDepth--;
                if (loopDepth <= 0) {
                    inLoop = false;
                    loopDepth = 0;
                }
            }
        }
        
        // Chart tracking
        if (text.includes('new Chart(')) {
            chartCreationLines.push(lineNum);
        }
        if (text.includes('.destroy()')) {
            chartDestroyLines.push(lineNum);
        }
        
        // Snapshot tracking
        if (text.includes('onSnapshot(')) {
            // Check if it's assigned to an unsubscribe variable
            if (!text.includes('=')) {
                console.log(`Line ${lineNum}: Unassigned onSnapshot (potential leak) -> ${text}`);
            }
        }
    });
    
    console.log(`Total Chart creations: ${chartCreationLines.length}`);
    console.log(`Total Chart destroys: ${chartDestroyLines.length}`);
    console.log(`Total DOM queries: ${docQueries}`);
    console.log(`DOM Queries in loops (approx): ${domInLoops.length}`);
    
    if (domInLoops.length > 0) {
        console.log("Sample DOM queries in loops:");
        domInLoops.slice(0, 10).forEach(d => console.log(`Line ${d.line}: ${d.text}`));
    }
}

deepAnalyze('app.js');
