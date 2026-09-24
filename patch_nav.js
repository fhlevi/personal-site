const fs = require('fs');
const file = '/Users/macbook/Documents/portfolio/website/personal-app/components/navigation.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  '<NavigationItems \n                            name="About"',
  '<NavigationItems name="Test" to="test" />\n                        <NavigationItems \n                            name="About"'
);
fs.writeFileSync(file, content);
