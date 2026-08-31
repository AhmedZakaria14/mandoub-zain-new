const fs = require('fs');
const newUrl = 'https://www.zain5grouter.com/images/zain-representative-0534768368.webp';
const oldUrl1 = 'https://www.zain5grouter.com/images/zain-representative-0534768368.webp';
const oldUrl2 = 'https://www.zain5grouter.com/images/zain-representative-0534768368.webp';

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
