const fs = require('fs');

const path = 'data/blogs.tsx';
let content = fs.readFileSync(path, 'utf-8');

const slugMap = {
    'zain-5g-offers': 'زين-5g-عروض-اتصل-0537394981-لمعرفة-المزيد-عن-عروض-زين',
    'zain-5g-packages': 'زين-باقات-5g-اسعار-مميزة-وعروض-حصرية-اتصل-الآن-0537394981',
    'zain-5g-high-speed-offers': 'زين-عروض-5g-سرعة-انترنت-عالية-بأقل-الأسعار-0537394981-اطلب-الخدمة-فورا',
    'zain-5g-unlimited': 'زين-لا-محدود-5G-تجربة-إنترنت-فائقة-السرعة-تلبي-جميع-احتياجاتك-الرقمية-0537394981',
    'zain-5g-best-offers-guide': 'دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-572587855',
    'zain-5g-ksa-offers': 'عروض-زين-5-جي-في-السعودية-572587855-المميزات-والأسعار-وافضل-الباقات',
    'zain-5g-internet-offers': 'عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-572587855',
    'zain-5g-net-offers': 'عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-572587855',
    'zain-five-g-offers': 'عروض-فايف-جي-زين-اتصل-الآن-572587855-واحصل-على-أفضل-سرعة',
    'zain-sales-rep-riyadh': 'مندوب-شركة-زين-بالرياض-اتصل-الآن-572587855-للاشتراك-في-خدماتنا-المميزة',
    'zain-sales-rep-guide': 'مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0537394981',
    'zain-sales-rep-professional': 'مندوب-مبيعات-شركة-زين-خدمة-احترافية-572587855-اتصل-فور-ا',
    'zain-five-g-offers-reliable': 'عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-572587855'
};

for (const [oldSlug, newSlug] of Object.entries(slugMap)) {
    const regex = new RegExp(`slug:\\s*'${oldSlug}'`);
    content = content.replace(regex, `slug: '${newSlug}'`);
}

fs.writeFileSync(path, content, 'utf-8');
console.log('Slugs reverted!');
