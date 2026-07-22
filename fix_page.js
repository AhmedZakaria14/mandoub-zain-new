const fs = require('fs');
let file = fs.readFileSync('/app/applet/app/blog/[id]/page.tsx', 'utf8');

// Undo the sed:
file = file.replace(/\{false && <ReactMarkdown/g, '<ReactMarkdown');
file = file.replace(/<\/ReactMarkdown>\}/g, '</ReactMarkdown>');

fs.writeFileSync('/app/applet/app/blog/[id]/page.tsx', file);
