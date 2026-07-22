const fs = require('fs');
let file = fs.readFileSync('/app/applet/data/blogs.tsx', 'utf8');

// The articles were appended at the end. We can find the first one which is `id: 8,`
const idx = file.indexOf('id: 8,');
if (idx !== -1) {
    // We want to delete from the start of that object to the end, except the `];`
    const lastBracket = file.lastIndexOf('];');
    const startObj = file.lastIndexOf('{', idx);
    const newFile = file.substring(0, startObj) + '];';
    fs.writeFileSync('/app/applet/data/blogs.tsx', newFile);
    console.log('Removed articles');
} else {
    console.log('Could not find id: 8');
}
