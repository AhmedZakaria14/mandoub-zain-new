const fs = require('fs');
const path = require('path');

const newPhone = '+201010742430';
const newWhatsapp = '966+201010742430';

const filesToUpdate = [
  'lib/config.ts',
  'data/blogs.tsx',
  'components/FAQ.tsx',
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/+201010742430/g, newPhone);
    content = content.replace(/966+201010742430/g, newWhatsapp);
    content = content.replace(/+201010742430/g, newPhone);
    content = content.replace(/966+201010742430/g, newWhatsapp);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
