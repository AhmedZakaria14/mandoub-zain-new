const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// replace blogPosts.map with blogPosts.slice(0, 8).map if it's there
content = content.replace(/\{blogPosts\.map\(\(post, idx\)/, '{blogPosts.slice(0, 8).map((post, idx)');

// insert "View all articles" button after the grid
const gridEnd = `              ))}
            </div>`;
const buttonHtml = `
            <div className="mt-12 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 bg-brand-primary text-brand-secondary font-bold px-8 py-3 rounded-full hover:bg-brand-secondary hover:text-white transition-colors shadow-sm">
                عرض جميع المقالات
              </Link>
            </div>
`;
content = content.replace(gridEnd, gridEnd + buttonHtml);

fs.writeFileSync('app/page.tsx', content, 'utf8');
console.log('Updated homepage blog section');
