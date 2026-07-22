const fs = require('fs');

// We need to parse data/blogs.tsx and extract the slug and title
const content = fs.readFileSync('data/blogs.tsx', 'utf8');

const regex = /slug:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)'/g;

let match;
let count = 1;
while ((match = regex.exec(content)) !== null) {
  console.log(`${count}. [${match[2]}](/blog/${match[1]})`);
  count++;
}
