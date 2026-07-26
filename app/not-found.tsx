import Link from 'next/link';
import { Home } from 'lucide-react';
import { Header } from '@/components/LayoutComponents';
import { Footer } from '@/components/LayoutComponents';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray font-sans text-brand-secondary">
      <Header />
      <main className="flex-grow pt-24 pb-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl font-black text-brand-primary mb-4 drop-shadow-md">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">عذراً، الصفحة غير موجودة</h2>
        <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة إلى الصفحة الرئيسية لمتابعة التصفح واكتشاف أحدث باقات زين فايبر.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-3 bg-brand-primary text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:bg-[#7aa320] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
        >
          <Home className="w-6 h-6" />
          العودة للصفحة الرئيسية
        </Link>
      </main>
      <Footer />
    </div>
  );
}
