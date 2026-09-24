const fs = require('fs');
const file = '/Users/macbook/Documents/portfolio/website/personal-app/main.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/<StrictMode>/g, '');
content = content.replace(/<\/StrictMode>,/g, ',');
fs.writeFileSync(file, content);
