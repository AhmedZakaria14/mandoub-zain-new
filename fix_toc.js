const fs = require('fs');
const path = 'data/blogs.tsx';
let content = fs.readFileSync(path, 'utf-8');

// I will just use a regex to replace markdownContent with markdownToc and markdownContent.
// But only for articles that have "## جدول المحتويات"
content = content.replace(/markdownContent:\s*`([\s\S]*?)`/g, (match, mdContent) => {
    if (!mdContent.startsWith('## جدول المحتويات')) {
        return match; // No TOC to extract
    }
    
    // Find where the list ends. 
    // The list consists of lines starting with "-" or spaces and "-".
    const lines = mdContent.split('\n');
    let tocLines = [];
    let restLines = [];
    let inToc = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (i === 0 && line.startsWith('## جدول المحتويات')) {
            tocLines.push(line);
            inToc = true;
            continue;
        }
        
        if (inToc) {
            // A TOC line is a list item or empty line
            if (line.trim() === '' || line.trim().startsWith('-')) {
                tocLines.push(line);
            } else {
                inToc = false;
                restLines.push(line);
            }
        } else {
            restLines.push(line);
        }
    }
    
    const tocStr = tocLines.join('\n').trim();
    const contentStr = restLines.join('\n').trim();
    
    return `markdownToc: \`${tocStr}\`,\n    markdownContent: \`${contentStr}\``;
});

fs.writeFileSync(path, content, 'utf-8');
console.log('TOC fixed!');
