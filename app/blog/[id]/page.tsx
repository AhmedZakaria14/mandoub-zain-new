import { blogPosts } from '@/data/blogs';
import { Header, Footer } from '@/components/LayoutComponents';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Phone, ListOrdered, ChevronDown } from 'lucide-react';

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

  return {
    title: `${post.title} | دليل عروض وباقات زين السعودية`,
    description: `اقرأ تفاصيل: ${post.title}. تصفح أحدث عروض وباقات الإنترنت المنزلي 5G والألياف البصرية من زين في السعودية. تأسيس فوري وبدون رسوم إضافية.`,
    keywords: [post.title, post.title.split(' ').join(', '), 'زين السعودية', 'انترنت 5G المنزلي', 'باقات زين', 'ألياف بصرية', 'الألياف زين', 'مندوب مبيعات زين', 'الرياض'],
    openGraph: {
      title: `${post.title} | عروض 5G وألياف زين`,
      description: `تعرف على تفاصيل وعروض ${post.title}. تأسيس مجاني وراوتر مجاني.`,
      type: 'article',
      url: process.env.APP_URL ? `${process.env.APP_URL}/blog/${id}` : `/blog/${id}`,
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
      canonical: process.env.APP_URL ? `${process.env.APP_URL}/blog/${id}` : `/blog/${id}`,
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.slug === id);
  
  if (!post) {
    notFound();
  }

  const postUrl = process.env.APP_URL ? `${process.env.APP_URL}/blog/${id}` : `https://example.com/blog/${id}`;
  const isFiber = post.title.includes('ألياف') || post.title.includes('فايبر');
  const is5G = post.title.includes('5G');

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
              "datePublished": new Date().toISOString().split('T')[0],
              "dateModified": new Date().toISOString().split('T')[0],
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
            <div className="relative h-[400px] md:h-[500px] w-full bg-white">
              <Image 
                src={post.imageUrl}
                alt={`تغطية وعروض ${post.title}`} 
                fill
                className="object-cover"
                loading="eager" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/90 via-brand-secondary/40 to-transparent flex items-end p-8 md:p-16">
                <div className="max-w-3xl">
                  <div className="inline-block bg-brand-primary text-brand-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    تأسيس مجاني
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-brand-secondary leading-[1.2] drop-shadow-md">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 md:px-8 lg:px-16 pb-16">
              
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
                      <ul className="space-y-4 text-gray-600 font-medium text-[15px]">
                        <li><a href="#intro" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 1. مقدمة شاملة وتفاصيل العرض</a></li>
                        <li><a href="#features" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 2. لماذا باقات الإنترنت من زين هي الأفضل؟</a></li>
                        <li><a href="#fiber-vs-5g" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 3. المقارنة بين 5G والألياف البصرية</a></li>
                        <li><a href="#gaming-streaming" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 4. تجربة الألعاب (Gaming) والبث المباشر</a></li>
                        <li><a href="#coverage" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 5. تغطية الشبكة ومناطق الخدمة</a></li>
                        <li><a href="#how-to-subscribe" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 6. طريقة التأسيس والاشتراك المجاني</a></li>
                        <li><a href="#router-info" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 7. مواصفات الراوتر (المودم) المرفق</a></li>
                        <li><a href="#faq" className="hover:text-brand-primary transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 shrink-0"></div> 8. الأسئلة الشائعة حول الخدمة</a></li>
                      </ul>
                    </div>
                  </details>

                  <div className="mt-8 bg-white p-6 rounded-2xl border border-brand-primary/20 shadow-lg shadow-brand-primary/5 text-center hidden lg:block">
                    <p className="text-sm font-bold text-gray-600 mb-2">تواصل مباشر مع المندوب المعتمد</p>
                    <a href="tel:0572587855" className="text-3xl font-black text-brand-primary block mb-6" dir="ltr">057 258 7855</a>
                    <a href="https://wa.me/966572587855" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-brand-secondary py-4 px-6 rounded-2xl font-bold shadow-[0_8px_20px_rgba(37,211,102,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-all flex items-center justify-center gap-2">
                       <MessageCircle size={22} /> واتساب الآن
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="w-full lg:w-2/3">
                <div className="prose prose-lg px-2 md:px-0 max-w-none text-gray-600 font-medium leading-loose space-y-10">
                  <section id="intro" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> مقدمة شاملة وتفاصيل العرض
                    </h2>
                    <p>
                      أهلاً بكم في هذه المقالة التفصيلية الشاملة التي تدور حول <strong>{post.title}</strong>. 
                      إذا كنت تبحث عن إنترنت منزلي قوي ومستقر يلبي كافة احتياجاتك اليومية، فإن شركة زين السعودية تقدم لك أقوى العروض الحصرية لعام 2026. 
                      سواء كنت في مدينة الرياض أو جدة أو الدمام وغيرها من المدن، فإننا نضمن لك الحصول على تجربة اتصال فريدة من نوعها ومفتوحة وبدون سياسة الاستخدام العادل.
                    </p>
                    <p className="mt-4">
                      إن الاعتماد على الإنترنت في عصرنا الحالي أصبح من الضروريات القصوى، سواء للعمل عن بُعد، أو للتعليم الإلكتروني، أو حتى للترفيه ومشاهدة الأفلام والألعاب الأونلاين. 
                      وهنا تبرز أهمية اختيار شبكة موثوقة ذات تغطية واسعة وسرعات فائقة. نحن هنا - بصفتنا مندوبين معتمدين لشركة زين - وفرنا لكم خطوات التأسيس المجاني للحصول على إنترنت سريع ومستقر، مدعوماً بأحدث التقنيات مثل شبكات الجيل الخامس 5G وشبكات الألياف البصرية (الفايبر).
                    </p>
                    <p className="mt-4">
                      يمكنك الآن الاستمتاع بباقات إنترنت منزلي لا محدوة، بأسعار تنافسية جداً تبدأ من 289 ريال، 
                      ومع كل اشتراك ستحصل على <strong className="text-brand-primary">راوتر مجاني وتأسيس مجاني بالكامل</strong>، مما يزيل عنك أي أعباء أو رسوم مخفية أثناء عملية التركيب. ما عليك سوى التواصل عبر رقم الواتساب المخصص أو الاتصال المباشر على 0572587855 لتحديد موعد زيارة الفني.
                    </p>
                  </section>

                  <section id="features" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> لماذا باقات الإنترنت من زين هي الأفضل؟
                    </h2>
                    <p>
                      تتربع زين على عرش مزودي خدمة الإنترنت في المملكة العربية السعودية لعدة أسباب جوهرية تجعلها الخيار الأول للعملاء الباحثين عن جودة لا تضاهى:
                    </p>
                    <ul className="list-disc list-inside space-y-3 mt-4 pr-4">
                      <li><strong>إنترنت لامحدود حقيقي:</strong> جميع الباقات المنزلية تأتي بسعة تحميل بيانات لا محدودة دون تطبيق أي قيود أو سياسة استخدام عادل تقيد سرعتك بعد استهلاك معين.</li>
                      <li><strong>أحدث تقنيات الراوترات:</strong> يمنح العميل راوتر 5G أو مودم ألياف بصرية من أحدث الإصدارات العالمية مجاناً مع التأسيس. تمتاز هذه المودمات ببث شبكات واي فاي (Wi-Fi 6) القوية لمديات أوسع واستقرار أعلى داخل المنزل.</li>
                      <li><strong>أسعار شفافة وبدون رسوم تأسيس مخفية:</strong> عملية التأسيس ومد الكابلات والبرمجة بالكامل تتم على نفقة الشركة. أنت تدفع فقط قيمة اشتراكك الشهري الموضح والمدون في الباقة.</li>
                      <li><strong>دعم فني استثنائي:</strong> يقدم الدعم الفني الخاص بشركة زين استجابة سريعة جداً لأي عطل وإصلاحه بأسرع وقت لضمان استمرارية الاتصال.</li>
                    </ul>
                    <p className="mt-4">
                      بالإضافة إلى ذلك، توفر زين مرونة عالية للعملاء؛ فبإمكانك الترقية بين الباقات، وفي حال انتقالك إلى منزل جديد يمكنك بكل سهولة نقل خدمة الفايبر أو نقل راوتر الـ 5G معك دون أي تعقيدات. كل هذه المزايا تساهم في تقديم <em>أرخص انترنت منزلي 5G في السعودية</em> مترافقاً مع أعلى قيمة وأداء.
                    </p>
                  </section>

                  <section id="fiber-vs-5g" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> المقارنة بين 5G والألياف البصرية (فايبر)
                    </h2>
                    <p>
                      كثيراً ما يتساءل العملاء الذين يبحثون عن <strong>مندوب زين الياف بصرية الرياض</strong> أو في المدن الأخرى: ما هو الخيار الأمثل لي، هل أطلب الألياف البصرية أم الجيل الخامس 5G؟
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                       <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                          <h4 className="font-bold text-xl text-brand-secondary mb-3">شبكات 5G المنزلي</h4>
                          <p className="text-sm">
                            السرعة والسهولة في التركيب تميز هذا الخيار. لا توجد حاجة للقيام بأي تمديدات كابلات أو حفريات. بمجرد استلام جهاز الراوتر (المودم 5G)، تقوم بتوصيله بالكهرباء فتبدأ فورا بالاستمتاع بسرعات فائقة. هذا الخيار رائع وسريع للمنازل المستأجرة والمناطق الفاقدة لبوكسيات الفايبر.
                          </p>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                          <h4 className="font-bold text-xl text-brand-secondary mb-3">الألياف البصرية (فايبرFiber)</h4>
                          <p className="text-sm">
                            تعتبر تقنية الفايبر هي ذروة الاستقرار للإنترنت الأرضي عالمياً، لا تتأثر بالعوامل الجوية أبداً. توفر سرعات تصل إلى 1 جيجا (1000 ميجابت)، وتمتاز بنطاق تأخير (Ping) شبه منعدم. خيار مثالي لهواة الألعاب التنافسية والعائلات الكبيرة جداً التي تمتلك عشرات الأجهزة الذكية المتصلة بآنٍ واحد.
                          </p>
                       </div>
                    </div>
                  </section>

                  <section id="gaming-streaming" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> تجربة الألعاب (Gaming) والبث المباشر 4K
                    </h2>
                    <p>
                      إذا كنت تبحث عن كلمات مثل <em>عروض نت زين المفتوح للمنازل</em> أو تتسائل عن أداء الباقات بالنسبة لأجهزة الكونسول (بلايستيشن وإكس بوكس) وأجهزة الكمبيوتر الشخصي، فإن الإجابة هي أن زين طورت بنية تحتية جبارة تخدم اللاعبين في المقام الأول.
                    </p>
                    <p className="mt-4">
                      بالنسبة للبث المباشر (مثل منصات نتفليكس، يوتيوب، وديزني+)، فإن الدقة العالية المتمثلة في الـ 4K وأحياناً 8K تتطلب تدفق بيانات ضخم وسريع دون انقطاع. ومن خلال تجربتنا وبناء على أراء الكثير من المشتركين، أثبتت باقات 5G والفايبر من زين قدرتها على تحميل وتشغيل أفلام بدقة الـ 4K على عدة شاشات داخل المنزل في نفس اللحظة بدون ظهور تلك الدائرة المزعجة (دائرة التحميل أو الـ Buffering).
                    </p>
                    <p className="mt-4">
                      السر يكمن في سعة الحزمة اللامحدودة (Bandwidth)، ومعدل الرفع (Upload Speed) الممتاز الذي توفره باقات الفايبر مثل باقة 300 ميجابت، وباقة 500 ميجابت (بريميوم)، والتي يطلبها أيضاً صُناع المحتوى لمنصات البث المباشر مثل تويتش ويوتيوب لضمان بث ألعابهم للمشاهدين بأعلى وضوح وثبات تام للفريمات.
                    </p>
                  </section>

                  <section id="coverage" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> تغطية الشبكة ومناطق الخدمة في المملكة
                    </h2>
                    <p>
                      تعمل شركة زين يومياً على توسيع نطاق شبكات الألياف البصرية وشبكات الـ 5G حتى تغطي كافة أنحاء المملكة العربية السعودية بتغطية استثنائية. 
                      سواء كنت متواجدا في وسط مدينة الرياض حيث الأحياء المكتظة، أو في أطراف المدن والمحافظات المختلفة؛ فإن نسبة كبيرة من المنازل تمتلك <strong>بوكسية ألياف زين</strong> الجاهزة للتفعيل والتوصيل الآني.
                    </p>
                    <p className="mt-4">
                      في حال لم تكن الألياف واصلة إلى منطقتك بعد، فإن المندوب المعتمد (ويمكنك طلبه حالاً على رقم 0572587855) يمكنه تشييك التغطية عن بُعد والتأكد من دعم موقعك لتقنية 5G من زين. هذا الفحص يتم مجاناً ويضمن لك استلام باقة الإنترنت التي تتوافق مع التغطية الممتازة في حيك المعماري.
                    </p>
                  </section>

                  <section id="how-to-subscribe" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> طريقة التأسيس والاشتراك المجاني خطوة بخطوة
                    </h2>
                    <p>
                      لتسهيل الأمور على جميع العملاء ومواكبة للرقمية الحديثة، أصبحت عملية طلب وتأسيس <em>النت المنزلي من زين</em> لا تستلزم زيارة الفرع أو الانتظار طويلا. يمكنك إتمام كل شيء وأنت في مكانك من خلال المندوب المختص:
                    </p>
                    <ol className="list-decimal list-inside space-y-4 mt-6 bg-brand-gray p-8 rounded-2xl">
                      <li className="font-bold"><strong>التواصل الفوري:</strong> اتصل برقم التأسيس المباشر 0572587855 أو أرسل رسالة واتساب، وسيقوم المندوب بالرد عليك فورا 24/7.</li>
                      <li className="font-bold"><strong>التحقق المجاني من التغطية:</strong> سيسألك المندوب عن موقعك بالضبط ليتم استخدام أحدث خرائط أبراج وألياف زين وفحص قوة الإشارة وجودة التقنية المتوفرة لمنزلك.</li>
                      <li className="font-bold"><strong>اختيار الباقة المناسبة:</strong> ستتلقى كشفاً بأحدث العروض الحالية لعام 2026. ستختار السرعة المناسبة لميزانيتك واحتياجاتك (مثلاً: 289 ريال شهريا لباقة الألياف).</li>
                      <li className="font-bold"><strong>تحديد موعد الفني:</strong> في نفس اليوم، أو في وقت يناسبك تماماً، سيتوجه فني التركيبات إلى منزلك لتركيب الكابل والمودم، وإجراء اختبار السرعة لتستلم الإنترنت شغالاً بكامل كفاءته.</li>
                    </ol>
                  </section>

                  <section id="router-info" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> مواصفات الراوتر (المودم) المجاني المرفق
                    </h2>
                    <p>
                      يعد الراوتر هو القلب النابض لأي شبكة منزلية. زين لم تبخل على عملائها بأحدث التجهيزات، حيث يتم تزويد كل مشترك براوتر مجاني بالكامل بدون أي رسوم إضافية، يتميز بالخصائص التالية:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      <li>يدعم تقنية Wi-Fi 6 الجديدة كليا والتي تسمح بنقل بيانات مضاعف داخليا مقارنة بالرواترات القديمة.</li>
                      <li>تعدد الهوائيات الذكية داخليا لضمان عبور إشارة الواي فاي من خلال الجدران الخرسانية للمنازل.</li>
                      <li>إمكانية اتصال مئات الأجهزة بنفس اللحظة دون هبوط محسوس في الأداء بفضل معالجات الراوتر القوية.</li>
                      <li>إعداد آمن مشفر من أحدث بروتوكولات الأمان (WPA3) لحماية شبكتك وملفاتك.</li>
                    </ul>
                  </section>

                  <section id="faq" className="scroll-mt-24">
                    <h2 className="text-3xl font-black text-brand-secondary mb-6 flex items-center gap-3">
                      <span className="text-brand-primary">✦</span> الأسئلة الشائعة حول الخدمة
                    </h2>
                    <div className="space-y-6">
                       <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                          <h4 className="font-bold text-lg text-brand-primary mb-2">هل فعلا الباقات مفتوحة بدون استخدام عادل؟</h4>
                          <p className="text-sm">نعم، جميع باقات الإنترنت المنزلي سواء 5G أو الألياف البصرية المذكورة هنا تكون بسعة تحميل مفتوحة ولا محدودة، بدون أي تضييق على السرعة، مهما كان حجم استهلاكك اليومي والشهري.</p>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                          <h4 className="font-bold text-lg text-brand-primary mb-2">هل يوجد رسوم للتأسيس أو رسوم زيارة للفني؟</h4>
                          <p className="text-sm">كلا، التأسيس والبرمجة والتمديد وتفعيل المودم كلها مجانية 100%. أنت مطالب فقط بدفع قيمة الاشتراك الشهري بعد التفعيل والتشغيل، حسب الفاتورة الشهرية.</p>
                       </div>
                       <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                          <h4 className="font-bold text-lg text-brand-primary mb-2">كيف أقوم بنقل اشتراكي إذا غيرت مسكني؟</h4>
                          <p className="text-sm">العملية بسيطة للغاية. إذا كان جهازك 5G فأنت فقط تنقل المودم وتشغله بالكهرباء في البيت الجديد وتتأكد من التغطية. أما إذا كان فايبر فتقوم بتسجيل طلب نقل مكان، وسيقوم المندوب والفني بنقله لبوكسية البيت الجديد.</p>
                       </div>
                    </div>
                  </section>

                  {/* Call to action ending */}
                  <div className="bg-gradient-to-r from-brand-secondary to-gray-900 text-brand-secondary p-10 rounded-2xl text-center shadow-2xl mt-12 mb-8 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                     <div className="relative z-10">
                       <h3 className="text-3xl mb-4 font-black">احجز موعد التركيب الآن، العرض لفترة محدودة</h3>
                       <p className="mb-8 text-gray-600 text-lg">سارع بالحصول على سرعتك القصوى وإنترنت غير محدود من رواد الاتصالات. تواصل معنا اليوم لاستغلال عرض التأسيس المجاني والراوتر المجاني.</p>
                       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                         <a href="tel:0572587855" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg" dir="ltr">
                           <Phone className="w-6 h-6 text-brand-primary" />
                           057 258 7855
                         </a>
                         <a href="https://wa.me/966572587855" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-brand-secondary text-xl font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
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
      </main>
      <Footer />
    </div>
  );
}
