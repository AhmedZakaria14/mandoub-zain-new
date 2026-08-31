const fs = require('fs');
if (fs.existsSync('public/llms.txt')) {
  let content = fs.readFileSync('public/llms.txt', 'utf8');
  content = content.replace(/0534768368|0534768368/g, '0534768368');
  fs.writeFileSync('public/llms.txt', content, 'utf8');
  console.log('Updated public/llms.txt');
}
