const fs = require('fs');
const execSync = require('child_process').execSync;
const allFiles = execSync('find . -type f -not -path "*/.next/*" -not -path "*/node_modules/*" -not -path "*/.git/*"').toString().split('\n').filter(Boolean);

allFiles.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.php') || file.endsWith('.md') || file.endsWith('.txt') || file.endsWith('.json')) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    if (content.includes('0535173600')) {
      content = content.replace(/0535173600/g, '0535173600');
      changed = true;
    }
    if (content.includes('0535173600')) {
      content = content.replace(/0535173600/g, '0535173600');
      changed = true;
    }
    if (content.includes('966535173600')) {
      content = content.replace(/966535173600/g, '966535173600');
      changed = true;
    }
    if (content.includes('966535173600')) {
      content = content.replace(/966535173600/g, '966535173600');
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
