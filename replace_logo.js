const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (['node_modules', '.next', 'dist', '.git'].includes(file)) continue;
    
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replaceInDir(filePath);
    } else if (stat.isFile()) {
      let content = fs.readFileSync(filePath, 'utf8');
      let newContent = content
        .replace(/https:\/\/res\.cloudinary\.com\/dxvjqrb9l\/image\/upload\/v1777279051\/logo_qeuexm\.png/g, 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png');
        
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

replaceInDir(__dirname);
console.log('Done.');
