import { Header, Footer } from '@/components/LayoutComponents';
import { PHONE_NUMBER } from '@/lib/config';

export const metadata = {
  title: 'سياسة الخصوصية | زين 5G وألياف بصرية',
  description: 'سياسة الخصوصية لموقع zain5grouter.com - تعرف على كيفية تعاملنا مع بياناتك.',
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray font-sans text-brand-secondary">
      <Header />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 text-brand-secondary border-r-4 border-brand-primary pr-4">سياسة الخصوصية</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">1. مقدمة</h2>
            <p>
              نحن في موقع <span className="font-bold">zain5grouter.com</span> نحترم خصوصيتك ونلتزم بحمايتها. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية المعلومات التي تقدمها لنا عند استخدام موقعنا لطلب خدمات الإنترنت.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">2. المعلومات التي نجمعها</h2>
            <p>عند طلب الخدمة عبر موقعنا أو التواصل معنا عبر الواتساب أو الهاتف، قد نقوم بجمع المعلومات التالية:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pr-4">
              <li>الاسم الكامل.</li>
              <li>رقم الهاتف الجوال.</li>
              <li>موقع التركيب (المدينة والحي).</li>
              <li>إحداثيات الموقع لضمان توفر التغطية.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">3. كيف نستخدم معلوماتك</h2>
            <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pr-4">
              <li>معالجة طلبات التأسيس والتركيب.</li>
              <li>التحقق من توفر تغطية الألياف البصرية أو 5G في موقعك.</li>
              <li>التنسيق مع الفنيين لإتمام عملية التركيب.</li>
              <li>التواصل معك بخصوص حالة طلبك.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">4. مشاركة المعلومات</h2>
            <p>
              بصفتنا وكلاء تسويق مستقلين، نقوم بمشاركة بياناتك فقط مع الشركات المزودة للخدمة (مثل زين السعودية) والمقاولين المعتمدين من قِبلها لإتمام عملية التركيب والتفعيل الرسمية. لا نقوم ببيع بياناتك لأي أطراف ثالثة لأغراض تسويقية.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">5. حماية البيانات</h2>
            <p>
              نحن نتخذ تدابير أمنية تقنية وإدارية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التعديل أو الإفصاح. يتم تشفير قنوات التواصل (مثل الواتساب) لضمان سرية المعلومات المتبادلة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">6. التواصل معنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر الرقم: <span className="font-bold" dir="ltr">{PHONE_NUMBER}</span>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
