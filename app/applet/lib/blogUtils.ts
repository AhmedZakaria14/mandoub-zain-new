import { blogPosts, BlogPost } from '@/data/blogs';

export function findBlogPostOrMatch(rawInput: string): { post: BlogPost | null; isExact: boolean } {
  if (!rawInput) return { post: null, isExact: false };

  let decoded = rawInput;
  try {
    decoded = decodeURIComponent(rawInput).trim();
  } catch {
    decoded = rawInput.trim();
  }

  // 1. Direct exact match by slug
  const exactSlug = blogPosts.find(p => p.slug === decoded || p.slug === rawInput);
  if (exactSlug) return { post: exactSlug, isExact: true };

  // 2. Exact match by numeric ID (e.g., /blog/18 or /blog/1)
  const exactId = blogPosts.find(p => String(p.id) === decoded);
  if (exactId) return { post: exactId, isExact: false };

  // 3. Match after replacing any legacy phone numbers with current number (+201010742430)
  const withNewNumber = decoded
    .replace(/+201010742430|+201010742430|+201010742430|+201010742430|+201010742430/g, '+201010742430')
    .replace(/\s+/g, '-');
  const numberMatch = blogPosts.find(p => p.slug === withNewNumber);
  if (numberMatch) return { post: numberMatch, isExact: false };

  // 4. Match against slugMap of previously used legacy URLs
  const legacySlugMap: Record<string, string> = {
    'مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-+201010742430': 'مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-+201010742430',
    'مندوب-مبيعات-شركة-زين-خدمة-احترافية-+201010742430-اتصل-فور-ا': 'مندوب-مبيعات-شركة-زين-خدمة-احترافية-+201010742430-اتصل-فور-ا',
    'مندوب-شركة-زين-بالرياض-اتصل-الآن-+201010742430-للاشتراك-في-خدماتنا-المميزة': 'مندوب-شركة-زين-بالرياض-اتصل-الآن-+201010742430-للاشتراك-في-خدماتنا-المميزة',
    'عروض-زين-5-جي-في-السعودية-+201010742430-المميزات-والأسعار-وافضل-الباقات': 'عروض-زين-5-جي-في-السعودية-+201010742430-المميزات-والأسعار-وافضل-الباقات',
    'عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-+201010742430': 'عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-+201010742430',
    'عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-+201010742430': 'عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-+201010742430',
    'عروض-فايف-جي-زين-اتصل-الآن-+201010742430-واحصل-على-أفضل-سرعة': 'عروض-فايف-جي-زين-اتصل-الآن-+201010742430-واحصل-على-أفضل-سرعة',
    'عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-+201010742430': 'عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-+201010742430',
    'دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-+201010742430': 'دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-+201010742430',
    'zain-sales-rep-guide': 'مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-+201010742430',
    'zain-sales-rep-professional': 'مندوب-مبيعات-شركة-زين-خدمة-احترافية-+201010742430-اتصل-فور-ا',
    'zain-sales-rep-riyadh': 'مندوب-شركة-زين-بالرياض-اتصل-الآن-+201010742430-للاشتراك-في-خدماتنا-المميزة',
    'zain-5g-ksa-offers': 'عروض-زين-5-جي-في-السعودية-+201010742430-المميزات-والأسعار-وافضل-الباقات',
    'zain-5g-internet-offers': 'عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-+201010742430',
    'zain-5g-net-offers': 'عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-+201010742430',
    'zain-five-g-offers': 'عروض-فايف-جي-زين-اتصل-الآن-+201010742430-واحصل-على-أفضل-سرعة',
    'zain-five-g-offers-reliable': 'عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-+201010742430',
    'zain-5g-best-offers-guide': 'دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-+201010742430',
    'zain-5g-offers': 'زين-5g-عروض-اتصل-+201010742430-لمعرفة-المزيد-عن-عروض-زين',
    'zain-5g-packages': 'زين-باقات-5g-اسعار-مميزة-وعروض-حصرية-اتصل-الآن-+201010742430',
    'zain-5g-high-speed-offers': 'زين-عروض-5g-سرعة-انترنت-عالية-بأقل-الأسعار-+201010742430-اطلب-الخدمة-فورا',
    'zain-5g-unlimited': 'زين-لا-محدود-5G-تجربة-إنترنت-فائقة-السرعة-تلبي-جميع-احتياجاتك-الرقمية-+201010742430'
  };

  if (legacySlugMap[decoded]) {
    const targetPost = blogPosts.find(p => p.slug === legacySlugMap[decoded]);
    if (targetPost) return { post: targetPost, isExact: false };
  }

  // 5. Smart keyword similarity scoring across all titles, slugs, and keywords
  const cleanInput = decoded
    .replace(/[0-9٠-٩\-_:.,!؟()]+/g, ' ')
    .toLowerCase()
    .trim();

  const inputWords = cleanInput.split(/\s+/).filter(w => w.length >= 2);

  let bestPost: BlogPost | null = null;
  let highestScore = 0;

  for (const post of blogPosts) {
    const postSlugClean = post.slug.replace(/[0-9٠-٩\-_:.,!؟()]+/g, ' ').toLowerCase();
    const postTitleClean = post.title.replace(/[0-9٠-٩\-_:.,!؟()]+/g, ' ').toLowerCase();
    const postKeywordsClean = (post.metaKeywords || []).join(' ').toLowerCase();

    let score = 0;
    for (const word of inputWords) {
      if (postSlugClean.includes(word)) score += 4;
      if (postTitleClean.includes(word)) score += 3;
      if (postKeywordsClean.includes(word)) score += 2;
    }

    if (score > highestScore) {
      highestScore = score;
      bestPost = post;
    }
  }

  if (bestPost && highestScore >= 3) {
    return { post: bestPost, isExact: false };
  }

  return { post: null, isExact: false };
}
