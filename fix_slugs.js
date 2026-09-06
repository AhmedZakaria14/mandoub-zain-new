const fs = require('fs');

const path = 'data/blogs.tsx';
let content = fs.readFileSync(path, 'utf-8');

const slugMap = {
    'زين-5g-عروض-اتصل-+201010742430-لمعرفة-المزيد-عن-عروض-زين': 'zain-5g-offers',
    'زين-باقات-5g-اسعار-مميزة-وعروض-حصرية-اتصل-الآن-+201010742430': 'zain-5g-packages',
    'زين-عروض-5g-سرعة-انترنت-عالية-بأقل-الأسعار-+201010742430-اطلب-الخدمة-فورا': 'zain-5g-high-speed-offers',
    'زين-لا-محدود-5G-تجربة-إنترنت-فائقة-السرعة-تلبي-جميع-احتياجاتك-الرقمية-+201010742430': 'zain-5g-unlimited',
    'دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-+201010742430': 'zain-5g-best-offers-guide',
    'عروض-زين-5-جي-في-السعودية-+201010742430-المميزات-والأسعار-وافضل-الباقات': 'zain-5g-ksa-offers',
    'عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-+201010742430': 'zain-5g-internet-offers',
    'عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-+201010742430': 'zain-5g-net-offers',
    'عروض-فايف-جي-زين-اتصل-الآن-+201010742430-واحصل-على-أفضل-سرعة': 'zain-five-g-offers',
    'مندوب-شركة-زين-بالرياض-اتصل-الآن-+201010742430-للاشتراك-في-خدماتنا-المميزة': 'zain-sales-rep-riyadh',
    'مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-+201010742430': 'zain-sales-rep-guide',
    'مندوب-مبيعات-شركة-زين-خدمة-احترافية-+201010742430-اتصل-فور-ا': 'zain-sales-rep-professional',
    'عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-+201010742430': 'zain-five-g-offers-reliable'
};

for (const [oldSlug, newSlug] of Object.entries(slugMap)) {
    const regex = new RegExp(`slug:\\s*'${oldSlug}'`);
    content = content.replace(regex, `slug: '${newSlug}'`);
}

fs.writeFileSync(path, content, 'utf-8');
console.log('Slugs updated!');
