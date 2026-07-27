const fs = require('fs');
const filePath = 'app/blog/[id]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const newMarkdownContentConfig = `<ReactMarkdown 
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
                          ul: ({node, ...props}) => (
                            <ul className="list-disc list-inside space-y-3 my-4 text-gray-700" {...props} />
                          ),
                          ol: ({node, ...props}) => (
                            <ol className="list-decimal list-inside space-y-3 my-4 text-gray-700" {...props} />
                          ),
                          table: ({node, ...props}) => (
                            <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200 shadow-sm">
                              <table className="w-full text-right text-sm border-collapse" {...props} />
                            </div>
                          ),
                          thead: ({node, ...props}) => (
                            <thead className="bg-brand-secondary text-white font-bold" {...props} />
                          ),
                          th: ({node, ...props}) => (
                            <th className="p-4 border-b border-gray-200 text-right font-bold text-white" {...props} />
                          ),
                          td: ({node, ...props}) => (
                            <td className="p-4 border-b border-gray-100 text-gray-700" {...props} />
                          ),
                          tr: ({node, ...props}) => (
                            <tr className="hover:bg-gray-50/80 transition-colors" {...props} />
                          ),
                          a: ({node, href, ...props}) => {
                            const isAnchor = href && href.startsWith('#');
                            return (
                              <a 
                                href={href} 
                                target={!isAnchor ? "_blank" : undefined} 
                                rel={!isAnchor ? "noopener noreferrer" : undefined} 
                                className="text-brand-primary font-bold hover:underline" 
                                {...props} 
                              />
                            );
                          }
                        }}
                      >
                        {post.markdownContent}
                      </ReactMarkdown>`;

// Replace ReactMarkdown section for markdownContent
content = content.replace(/<ReactMarkdown[\s\S]*?\{post\.markdownContent\}[\s\S]*?<\/ReactMarkdown>/, newMarkdownContentConfig);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated app/blog/[id]/page.tsx');
