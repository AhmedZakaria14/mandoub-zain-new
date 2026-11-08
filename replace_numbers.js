const fs = require('fs');
const path = require('path');

const newPhone = '0594006091';
const newWhatsapp = '966594006091';

const filesToUpdate = [
  'lib/config.ts',
  'data/blogs.tsx',
  'components/FAQ.tsx',
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/0594006091/g, newPhone);
    content = content.replace(/966594006091/g, newWhatsapp);
    content = content.replace(/0594006091/g, newPhone);
    content = content.replace(/966594006091/g, newWhatsapp);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
