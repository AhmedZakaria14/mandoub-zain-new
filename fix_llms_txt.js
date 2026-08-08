const fs = require('fs');
if (fs.existsSync('public/llms.txt')) {
  let content = fs.readFileSync('public/llms.txt', 'utf8');
  content = content.replace(/0545478583|0572587855/g, '0537394981');
  fs.writeFileSync('public/llms.txt', content, 'utf8');
  console.log('Updated public/llms.txt');
}
