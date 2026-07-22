const fs = require('fs');
let content = fs.readFileSync('data/blogs.tsx', 'utf8');

// Replace "id: 30" with "id: 8", etc.
let count = 8;
for (let i = 30; i <= 42; i++) {
  content = content.replace(`id: ${i},`, `id: ${count},`);
  count++;
}
fs.writeFileSync('data/blogs.tsx', content);
console.log('Re-indexed!');
