const fs = require('fs');
const filePath = 'app/blog/[id]/page.tsx';

const code = `import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Phone, ListOrdered, ChevronDown } from 'lucide-react';
import { SITE_URL, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/config';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const post = blogPosts.find(p => p.slug === decodedId);

  if (!post) {
    return { title: 'الصفحة غير موجودة' };
  }

  const postUrl = \`\${SITE_URL}/blog/\${id}\`;
  let metaTitle = post.title;
  let metaDesc = post.metaDescription || \`اقرأ تفاصيل: \${post.title}. تصفح أحدث عروض وباقات الإنترنت المنزلي 5G والألياف البصرية من زين في السعودية. تأسيس فوري وبدون رسوم إضافية.\`;

  if (metaTitle.length > 60) {
    metaTitle = metaTitle.substring(0, 57) + '...';
  }

  if (metaDesc.length > 150) {
    metaDesc = metaDesc.substring(0, 147) + '...';
  }

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: ['زين السعودية', 'انترنت 5G المنزلي', 'باقات زين', 'ألياف بصرية', 'الألياف زين', 'مندوب مبيعات زين', 'انترنت لا محدود', 'تأسيس مجاني', 'راوتر مجاني', ...post.title.split(' ').filter(w => w.length > 3)],
    openGraph: {
      title: metaTitle,
      description: \`تعرف على تفاصيل وعروض \${post.title}. تأسيس مجاني وراوتر مجاني.\`,
      type: 'article',
      url: postUrl,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: postUrl,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const post = blogPosts.find(p => p.slug === decodedId);

  if (!post) {
    notFound();
  }

  const postUrl = \`\${SITE_URL}/blog/\${id}\`;
  const defaultDate = "2024-05-01";

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray font-sans text-brand-secondary">
      <Header />
      <main className="flex-grow pt-24 pb-32 relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-primary/10 to-transparent pointer-events-none"></div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "الرئيسية",
                  "item": \`\${SITE_URL}/\`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "المدونة",
                  "item": \`\${SITE_URL}/blog\`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": postUrl
                }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": [post.imageUrl],
              "author": {
                "@type": "Organization",
                "name": "زين السعودية",
                "url": SITE_URL
              },
              "publisher": {
                "@type": "Organization",
                "name": "زين السعودية - تغطية وعروض الفايبر و 5G",
                "logo": {
                  "@type": "ImageObject",
                  "url": \`https://res.cloudinary.com/dxvjqrb9l/image/upload/v1786190532/file_000000009f5c81f49864c6942a7ee3ac_ceafpv.png\`
                }
              },
              "datePublished": defaultDate,
              "dateModified": defaultDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": postUrl
              }
            })
          }}
        />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <nav className="mb-6 text-sm flex items-center gap-2">
            <Link href="/" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">الرئيسية</Link>
            <span className="text-gray-600">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">المدونة</Link>
            <span className="text-gray-600">/</span>
            <span className="text-brand-primary font-bold line-clamp-1">{post.title}</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 overflow-hidden mb-12">
            <div className="relative h-[300px] md:h-[450px] w-full bg-gray-50 border-b border-gray-100">
              <Image 
                src={post.imageUrl}
                alt={\`تغطية وعروض \${post.title}\`}
                fill
                className="object-cover"
                loading="eager"
              />
            </div>

            <div className="px-4 md:px-8 lg:px-16 pt-8 md:pt-12 pb-16">
              <div className="mb-8 md:mb-12">
                <div className="inline-block bg-brand-primary/10 text-brand-secondary border border-brand-primary/20 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-primary ml-2"></span>
                  تأسيس مجاني
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-secondary leading-[1.3]">
                  {post.title}
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Table of Contents Sidebar */}
                <aside className="w-full lg:w-1/3 relative mb-2 lg:mb-0">
                  <div className="sticky top-24">
                    <details 
                      className="group bg-brand-gray p-6 lg:p-8 rounded-2xl border border-gray-200 lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:bg-white/60 lg:backdrop-blur-md open:bg-white transition-all duration-300"
                      open
                    >
                      <summary className="font-bold text-brand-secondary text-lg flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none outline-none">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-brand-light/40 flex items-center justify-center text-brand-primary">
                            <ListOrdered size={20} />
                          </div>
                          جدول المحتويات (فهرس المقالة)
                        </div>
                        <ChevronDown className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform duration-300 lg:hidden" />
                      </summary>

                      <div className="pt-6 mt-4 border-t border-gray-200">
                        {post.markdownToc ? (
                          <div className="prose prose-sm prose-brand max-w-none text-gray-600 font-medium text-[15px] marker:text-brand-primary">
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
                          </div>
                        ) : post.toc ? (
                          post.toc
                        ) : (
                          <ul className="space-y-4 text-gray-600 font-medium text-[15px]">
                            <li><a href="#intro" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 1. مقدمة</a></li>
                          </ul>
                        )}
                      </div>
                    </details>

                    <div className="mt-8 bg-white p-6 rounded-2xl border border-brand-primary/20 shadow-lg shadow-brand-primary/5 text-center hidden lg:block">
                      <p className="text-sm font-bold text-gray-600 mb-2">تواصل مباشر مع المندوب المعتمد</p>
                      <a href={\`tel:\${PHONE_NUMBER}\`} className="text-3xl font-black text-brand-primary block mb-6" dir="ltr">{PHONE_NUMBER.replace(/(\\d{3})(\\d{3})(\\d{4})/, '$1 $2 $3')}</a>
                      <a href={\`https://wa.me/\${WHATSAPP_NUMBER}\`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-brand-secondary py-4 px-6 rounded-2xl font-bold shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2">
                        <MessageCircle size={22} /> واتساب الآن
                      </a>
                    </div>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="w-full lg:w-2/3">
                  <div className="prose prose-lg px-2 md:px-0 max-w-none text-gray-600 font-medium leading-loose space-y-10">
                    {post.markdownContent ? (
                      <div className="markdown-body">
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
                        </ReactMarkdown>
                      </div>
                    ) : post.content ? (
                      post.content
                    ) : (
                      <div className="p-10 text-center">جاري تحديث المحتوى...</div>
                    )}

                    {/* Call to action ending */}
                    <div className="bg-gradient-to-r from-brand-secondary to-gray-900 text-white p-10 rounded-2xl text-center shadow-2xl mt-12 mb-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                      <div className="relative z-10">
                        <h3 className="text-3xl mb-4 font-black">احجز موعد التركيب الآن، العرض لفترة محدودة</h3>
                        <p className="mb-8 text-gray-300 text-lg">سارع بالحصول على سرعتك القصوى وإنترنت غير محدود من رواد الاتصالات. تواصل معنا اليوم لاستغلال عرض التأسيس المجاني والراوتر المجاني.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                          <a href={\`tel:\${PHONE_NUMBER}\`} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg" dir="ltr">
                            <Phone className="w-6 h-6 text-brand-primary" />
                            {PHONE_NUMBER.replace(/(\\d{3})(\\d{3})(\\d{4})/, '$1 $2 $3')}
                          </a>
                          <a href={\`https://wa.me/\${WHATSAPP_NUMBER}\`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
                            <MessageCircle className="w-6 h-6" />
                            واتساب مباشر
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync(filePath, code, 'utf8');
console.log('Successfully wrote app/blog/[id]/page.tsx');
