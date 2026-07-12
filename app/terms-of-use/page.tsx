import { Header, Footer } from '@/components/LayoutComponents';

export const metadata = {
  title: 'شروط الاستخدام | زين 5G وألياف بصرية',
  description: 'شروط وأحكام استخدام موقع zain5grouter.com - إخلاء المسؤولية والقواعد التنظيمية.',
};

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray font-sans text-brand-secondary">
      <Header />
      <main className="flex-grow pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black mb-8 text-brand-secondary border-r-4 border-brand-primary pr-4">شروط الاستخدام</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
          <section className="bg-brand-gray/50 p-6 rounded-2xl border-r-4 border-brand-primary">
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">إخلاء مسؤولية رسمي</h2>
            <p className="text-sm md:text-base">
              هذا الموقع (<span className="font-bold">zain5grouter.com</span>) هو منصة تسويقية ترويجية مستقلة يديرها مندوب تسويق معتمد. نحن لسنا شركة الاتصالات نفسها، ولا نمثلها بشكل حصري، ولسنا جزءاً من هيكلها التنظيمي الرسمي. مهمتنا تنحصر في تسهيل الربط بين العميل والشركة المزودة للخدمة.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">1. قبول الشروط</h2>
            <p>
              باستخدامك لهذا الموقع، فإنك توافق على الالتزام بشروط الاستخدام الموضحة هنا. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">2. طبيعة الخدمة</h2>
            <p>
              يقدم الموقع خدمات تعريفية بعروض الإنترنت (5G وفايبر) ويتيح للعملاء طلب التأسيس. إتمام الطلب والتركيب الفعلي يخضع لتوفر التغطية الفنية في موقع العميل ولشروط وأحكام الشركة المزودة للخدمة (مثل زين السعودية).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">3. دقة المعلومات</h2>
            <p>
              نحن نبذل قصارى جهدنا لضمان دقة العروض والأسعار المنشورة، ولكن العروض قد تتغير من قِبل الشركات المزودة في أي وقت دون إشعار مسبق. السعر والخدمة النهائية هما ما يتم تثبيته في العقد الرسمي عند التركيب.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">4. حدود المسؤولية</h2>
            <p>
              لا يتحمل القائمون على هذا الموقع أي مسؤولية عن أي انقطاع في الخدمة بعد التركيب، أو أي مشاكل فنية تتعلق بالشبكة. هذه الأمور تقع ضمن مسؤولية الشركة المزودة للخدمة مباشرة عبر قنوات الدعم الفني الخاصة بها (مثل 959 لعملاء زين).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">5. حقوق الملكية</h2>
            <p>
              جميع الشعارات والعلامات التجارية الخاصة بشركات الاتصالات المذكورة في الموقع هي ملك لأصحابها، وتُستخدم هنا لأغراض تعريفية وتسويقية للخدمة فقط.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand-secondary">6. التعديلات</h2>
            <p>
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. تعتبر التعديلات سارية المفعول بمجرد نشرها على هذه الصفحة.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
