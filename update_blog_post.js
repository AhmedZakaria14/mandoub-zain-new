const fs = require('fs');

const path = 'app/blog/[id]/page.tsx';
let content = fs.readFileSync(path, 'utf-8');

const replacement1 = `
                      <ReactMarkdown 
                        rehypePlugins={[rehypeRaw]} 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h2: () => null,
                          ul: ({node, ...props}) => <ul className="space-y-4 text-gray-600 font-medium text-[15px] list-none p-0 m-0" {...props} />,
                          li: ({node, ...props}) => <li className="p-0 m-0" {...props} />,
                          a: ({node, ...props}) => (
                            <a className="hover:text-brand-primary transition-colors flex items-center gap-2" {...props}>
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div>
                              {props.children}
                            </a>
                          )
                        }}
                      >
                        {post.markdownToc}
                      </ReactMarkdown>
`;

content = content.replace(/<ReactMarkdown rehypePlugins=\{\[rehypeRaw\]\} remarkPlugins=\{\[remarkGfm\]\}>\s*\{post\.markdownToc\}\s*<\/ReactMarkdown>/, replacement1);


const replacement2 = `
                      <ReactMarkdown 
                        rehypePlugins={[rehypeRaw]} 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h2: ({node, ...props}) => (
                            <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3 mt-12 scroll-mt-24" {...props}>
                              <span className="text-brand-primary">✦</span> {props.children}
                            </h2>
                          ),
                          h3: ({node, ...props}) => (
                            <h3 className="text-2xl font-bold text-brand-secondary mb-4 mt-8 flex items-center gap-2" {...props}>
                              <div className="w-2 h-2 rounded-full bg-brand-primary"></div> {props.children}
                            </h3>
                          ),
                          a: ({node, href, ...props}) => {
                            const isInternal = href && (href.startsWith('/') || href.includes('zain5grouter.com'));
                            return (
                              <a 
                                href={href} 
                                target={isInternal ? "_blank" : undefined} 
                                rel={isInternal ? "noopener noreferrer" : undefined} 
                                className="text-brand-primary font-bold hover:underline" 
                                {...props} 
                              />
                            );
                          }
                        }}
                      >
                        {post.markdownContent}
                      </ReactMarkdown>
`;

content = content.replace(/<ReactMarkdown rehypePlugins=\{\[rehypeRaw\]\} remarkPlugins=\{\[remarkGfm\]\}>\s*\{post\.markdownContent\}\s*<\/ReactMarkdown>/, replacement2);

fs.writeFileSync(path, content, 'utf-8');
console.log('Updated blog post page');
