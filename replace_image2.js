const fs = require('fs');
const newUrl = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png';
const oldUrl1 = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png';
const oldUrl2 = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png';

const files = [
  'components/Slideshow.tsx', 
  'data/blogs.tsx', 
  'export/generate.js',
  'run_me.js',
  'get_logo.js'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    if (content.includes(oldUrl1)) {
      content = content.split(oldUrl1).join(newUrl);
      changed = true;
    }
    if (content.includes(oldUrl2)) {
      content = content.split(oldUrl2).join(newUrl);
      changed = true;
    }
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
