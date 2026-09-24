const fs = require('fs');
const file = '/Users/macbook/Documents/portfolio/website/personal-app/components/navigation-items.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'return (',
  `console.log("Rendering nav item:", name, to); return (`
);
fs.writeFileSync(file, content);
