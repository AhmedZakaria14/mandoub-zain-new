const fs = require('fs');
const oldUrl = 'https://www.zain5grouter.com/images/zain-representative-0534768368.webp';
const newUrl = 'https://www.zain5grouter.com/images/zain-representative-0534768368.webp';

['components/Slideshow.tsx', 'data/blogs.tsx'].forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.split(oldUrl).join(newUrl);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
