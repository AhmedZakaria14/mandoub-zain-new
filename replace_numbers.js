const fs = require('fs');
const path = require('path');

const newPhone = '0534768368';
const newWhatsapp = '966534768368';

const filesToUpdate = [
  'lib/config.ts',
  'data/blogs.tsx',
  'components/FAQ.tsx',
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/0534768368/g, newPhone);
    content = content.replace(/966534768368/g, newWhatsapp);
    content = content.replace(/0534768368/g, newPhone);
    content = content.replace(/966534768368/g, newWhatsapp);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
