const fs = require('fs');
if (fs.existsSync('public/llms.txt')) {
  let content = fs.readFileSync('public/llms.txt', 'utf8');
  content = content.replace(/0594006091|0594006091/g, '0594006091');
  fs.writeFileSync('public/llms.txt', content, 'utf8');
  console.log('Updated public/llms.txt');
}
