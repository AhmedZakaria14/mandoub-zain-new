const fs = require('fs');

const dir = 'app/blog';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const pageContent = `
import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'المدونة والمقالات | زين فايبر و 5G',
  description: 'تصفح أحدث المقالات والأخبار وعروض زين فايبر وانترنت الجيل الخامس في السعودية.',
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-brand-gray font-cairo flex flex-col selection:bg-brand-primary/30">
      <Header />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <div className="mb-16 text-center">
             <div className="inline-block bg-brand-primary/10 text-brand-secondary border border-brand-primary/20 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-primary ml-2"></span>
                  مقالات حصرية
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-secondary mb-6">المدونة</h1>
             <p className="text-gray-600 text-lg max-w-2xl mx-auto">تصفح أحدث الأخبار والتفاصيل حول عروض وباقات زين فايبر وإنترنت الجيل الخامس، وكن على اطلاع دائم بأحدث التقنيات.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, idx) => (
              <div key={post.id} className="h-full">
                <Link href={\`/blog/\${post.slug}\`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:border-brand-primary/30 transition-all duration-300">
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image 
                      src={post.imageUrl}
                      alt={post.title} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-brand-secondary font-bold text-xs px-3 py-1.5 rounded-full shadow-sm">
                      مقال حصري
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-brand-secondary mb-3 leading-snug group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.metaDescription || 'تعرف على أحدث عروض وباقات الإنترنت المنزلي من شركة زين، شاملة تفاصيل التأسيس المجاني والراوتر.'}
                    </p>
                    <div className="flex items-center text-brand-primary font-bold text-sm mt-auto group-hover:translate-x-[-4px] transition-transform">
                      اقرأ المزيد
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
`;

fs.writeFileSync('app/blog/page.tsx', pageContent, 'utf-8');
console.log('Created blog index page');
