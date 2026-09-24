const fs = require('fs');
const file = '/Users/macbook/Documents/portfolio/website/personal-app/components/section/projects.tsx';
let content = fs.readFileSync(file, 'utf8');

// replace the clsx block
content = content.replace(
    '"grid md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500", {\n                                    "max-h-[760px]": (!isExpanded && hasMore)\n                                }',
    '"grid md:grid-cols-2 gap-6 transition-all duration-500 p-8 -m-8", {\n                                    "max-h-[820px] overflow-hidden": (!isExpanded && hasMore)\n                                }'
);

fs.writeFileSync(file, content);
