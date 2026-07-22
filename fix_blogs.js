const fs = require('fs');
const content = fs.readFileSync('data/blogs.tsx', 'utf8');

// I'll just write a script to find the start of id: 8 and the end of id: 26.
const start8 = content.indexOf('    id: 8,');
const start30 = content.indexOf('    id: 30,');

// We need to cut out the part from the { before start8, to the { before start30.
// Let's find the last { before start8
const before8 = content.lastIndexOf('  {', start8);
const before30 = content.lastIndexOf('  {', start30);

const newContent = content.substring(0, before8) + content.substring(before30);
fs.writeFileSync('data/blogs.tsx', newContent);
console.log('Fixed blogs.tsx!');
