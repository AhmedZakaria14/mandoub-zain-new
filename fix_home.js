const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Restore all blog posts on the home page instead of slice(0,8)
content = content.replace(/\{blogPosts\.slice\(0, 8\)\.map\(\(post, idx\)/, '{blogPosts.map((post, idx)');

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log('Restored all blog posts on home page');
