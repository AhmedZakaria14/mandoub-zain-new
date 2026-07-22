import { blogPosts } from '@/data/blogs';
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

// Generate static parameters for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find(p => p.slug === id);
  if (!post) {
    return { title: 'الصفحة غير موجودة' };
  }

  const postUrl = `${SITE_URL}/blog/${id}`;

  let metaTitle = post.title;
  let metaDesc = `اقرأ تفاصيل: ${post.title}. تصفح أحدث عروض وباقات الإنترنت المنزلي 5G والألياف البصرية من زين في السعودية. تأسيس فوري وبدون رسوم إضافية.`;
  
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
      description: `تعرف على تفاصيل وعروض ${post.title}. تأسيس مجاني وراوتر مجاني.`,
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
  const post = blogPosts.find(p => p.slug === id);
  
  if (!post) {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${id}`;
  const isFiber = post.title.includes('ألياف') || post.title.includes('فايبر');
  const is5G = post.title.includes('5G');
  const defaultDate = "2024-05-01";

  // Define specific content for blog 5, and general template for others
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
                  "item": `${SITE_URL}/`
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "المدونة",
                  "item": `${SITE_URL}/#blog`
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
              "description": `تفاصيل وعروض ${post.title} لتأسيس إنترنت زين المنزلي الفائق.`,
              "image": post.imageUrl,
              "author": {
                "@type": "Person",
                "name": "موظف مبيعات زين"
              },
              "publisher": {
                "@type": "Organization",
                "name": "زين 5G وألياف بصرية",
                "logo": {
                   "@type": "ImageObject",
                   "url": `https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png`
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
            <span className="text-brand-primary font-bold">{post.title}</span>
          </nav>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 overflow-hidden mb-12">
            <div className="relative h-[300px] md:h-[450px] w-full bg-gray-50 border-b border-gray-100">
              <Image 
                src={post.imageUrl}
                alt={`تغطية وعروض ${post.title}`} 
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-secondary leading-[1.3] md:leading-[1.3] lg:leading-[1.2]">
                  {post.title}
                </h1>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Table of Contents - Sidebar / Mobile Native Accordion */}
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
                          <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
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
                    <a href={`tel:${PHONE_NUMBER}`} className="text-3xl font-black text-brand-primary block mb-6" dir="ltr">{PHONE_NUMBER.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}</a>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-brand-secondary py-4 px-6 rounded-2xl font-bold shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2">
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
                      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
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
                         <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg" dir="ltr">
                           <Phone className="w-6 h-6 text-brand-primary" />
                           {PHONE_NUMBER.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
                         </a>
                         <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
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
