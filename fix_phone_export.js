const fs = require('fs');
const execSync = require('child_process').execSync;
const allFiles = execSync('find export -type f').toString().split('\n').filter(Boolean);

allFiles.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.php') || file.endsWith('.html')) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    if (content.includes('0534768368')) {
      content = content.replace(/0534768368/g, '0534768368');
      changed = true;
    }
    if (content.includes('0534768368')) {
      content = content.replace(/0534768368/g, '0534768368');
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
