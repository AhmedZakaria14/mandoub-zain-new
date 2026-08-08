const fs = require('fs');
const oldUrl = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png';
const newUrl = 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png';

['components/Slideshow.tsx', 'data/blogs.tsx'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.split(oldUrl).join(newUrl);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
