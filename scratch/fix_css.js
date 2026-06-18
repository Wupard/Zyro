const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// Replace transition: all [time] [easing];
// with transition: background-color [time] [easing], color [time] [easing], border-color [time] [easing], opacity [time] [easing], transform [time] [easing];
// Also need to handle !important
css = css.replace(/transition:\s*all\s+([^;]+);/g, (match, timing) => {
    return `transition: background-color ${timing}, color ${timing}, border-color ${timing}, opacity ${timing}, transform ${timing}, box-shadow ${timing}, fill ${timing}, stroke ${timing};`;
});

fs.writeFileSync('styles.css', css, 'utf8');
console.log('CSS transitions optimized.');
