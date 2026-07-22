const fs = require('fs');

const files = ['new_articles_1.md', 'new_articles_2.md', 'new_articles_3.md', 'new_articles_4.md', 'new_articles_5.md'];

let allContent = '';
for (let file of files) {
  allContent += fs.readFileSync(file, 'utf8') + '\n\n';
}

const articlesRaw = allContent.split(/^# /m).filter(Boolean);

console.log('Total articles parsed:', articlesRaw.length);

const articles = articlesRaw.map((raw, index) => {
  const lines = raw.split('\n');
  const title = lines[0].trim();
  const rest = lines.slice(1).join('\n');
  
  const metaMatch = rest.match(/\*\*Meta description:\*\*\s*\n\s*\*\*"([^"]+)"\*\*/i);
  let metaDesc = metaMatch ? metaMatch[1] : '';
  
  let content = rest.replace(/\*\*Meta description:\*\*\s*\n\s*\*\*"([^"]+)"\*\*/i, '').trim();
  
  // Extract some keywords
  const metaKeywords = title.split(' ').filter(w => w.length > 3).join('، ');

  return { title, metaDesc, metaKeywords, content };
});

const blogsTsx = fs.readFileSync('data/blogs.tsx', 'utf8');

// I will append these 13 articles after the existing ones
let output = '';
let currentId = 30; // start from 30 to avoid clash

articles.forEach(article => {
  let slug = article.title.replace(/[^a-zA-Z0-9\u0621-\u064A]+/g, '-').replace(/^-|-$/g, '');
  if(!slug) slug = 'article-' + currentId;
  
  output += `  {
    id: ${currentId},
    slug: '${slug}',
    title: '${article.title}',
    imageUrl: DefImage,
    metaDescription: '${article.metaDesc.replace(/'/g, "\\'")}',
    metaKeywords: '${article.metaKeywords.replace(/'/g, "\\'")}'.split('، '),
    markdownContent: \`${article.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
  },
`;
  currentId++;
});

const lastBracket = blogsTsx.lastIndexOf('];');
const newFile = blogsTsx.substring(0, lastBracket) + output + '];';
fs.writeFileSync('data/blogs.tsx', newFile);
console.log('Appended', articles.length, 'articles to blogs.tsx');

