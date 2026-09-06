const fs = require('fs');
if (fs.existsSync('public/llms.txt')) {
  let content = fs.readFileSync('public/llms.txt', 'utf8');
  content = content.replace(/+201010742430|+201010742430/g, '+201010742430');
  fs.writeFileSync('public/llms.txt', content, 'utf8');
  console.log('Updated public/llms.txt');
}
