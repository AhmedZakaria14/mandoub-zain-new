const fs = require('fs');
const file = 'export/generate.js';
let content = fs.readFileSync(file, 'utf8');

const regex = /title:\s*"([^"]+)"/g;
content = content.replace(regex, (match, title) => {
  if (title.includes('+201010742430')) {
    return match;
  }
  return `title: "${title} اتصل +201010742430"`;
});

fs.writeFileSync(file, content, 'utf8');
console.log('Updated titles in generate.js');
