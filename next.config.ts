import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  async redirects() {
    const legacyMap: [string, string][] = [
      ['/blog/5', '/#blog'],
      ['/blog/18', `/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0537394981')}`],
      ['/blog/مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0572587855', `/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0537394981')}`],
      [`/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0572587855')}`, `/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0537394981')}`],
      ['/blog/مندوب-مبيعات-شركة-زين-خدمة-احترافية-572587855-اتصل-فور-ا', `/blog/${encodeURIComponent('مندوب-مبيعات-شركة-زين-خدمة-احترافية-0537394981-اتصل-فور-ا')}`],
      ['/blog/مندوب-شركة-زين-بالرياض-اتصل-الآن-572587855-للاشتراك-في-خدماتنا-المميزة', `/blog/${encodeURIComponent('مندوب-شركة-زين-بالرياض-اتصل-الآن-0537394981-للاشتراك-في-خدماتنا-المميزة')}`],
      ['/blog/عروض-زين-5-جي-في-السعودية-572587855-المميزات-والأسعار-وافضل-الباقات', `/blog/${encodeURIComponent('عروض-زين-5-جي-في-السعودية-0537394981-المميزات-والأسعار-وافضل-الباقات')}`],
      ['/blog/عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-572587855', `/blog/${encodeURIComponent('عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-0537394981')}`],
      ['/blog/عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-572587855', `/blog/${encodeURIComponent('عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-0537394981')}`],
      ['/blog/عروض-فايف-جي-زين-اتصل-الآن-572587855-واحصل-على-أفضل-سرعة', `/blog/${encodeURIComponent('عروض-فايف-جي-زين-اتصل-الآن-0537394981-واحصل-على-أفضل-سرعة')}`],
      ['/blog/عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-572587855', `/blog/${encodeURIComponent('عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-0537394981')}`],
      ['/blog/دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-572587855', `/blog/${encodeURIComponent('دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-0537394981')}`],
      ['/blog/zain-sales-rep-guide', `/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0537394981')}`],
      ['/blog/zain-sales-rep-professional', `/blog/${encodeURIComponent('مندوب-مبيعات-شركة-زين-خدمة-احترافية-0537394981-اتصل-فور-ا')}`],
      ['/blog/zain-sales-rep-riyadh', `/blog/${encodeURIComponent('مندوب-شركة-زين-بالرياض-اتصل-الآن-0537394981-للاشتراك-في-خدماتنا-المميزة')}`],
      ['/blog/zain-5g-ksa-offers', `/blog/${encodeURIComponent('عروض-زين-5-جي-في-السعودية-0537394981-المميزات-والأسعار-وافضل-الباقات')}`],
      ['/blog/zain-5g-internet-offers', `/blog/${encodeURIComponent('عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-0537394981')}`],
      ['/blog/zain-5g-net-offers', `/blog/${encodeURIComponent('عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-0537394981')}`],
      ['/blog/zain-five-g-offers', `/blog/${encodeURIComponent('عروض-فايف-جي-زين-اتصل-الآن-0537394981-واحصل-على-أفضل-سرعة')}`],
      ['/blog/zain-five-g-offers-reliable', `/blog/${encodeURIComponent('عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-0537394981')}`],
      ['/blog/zain-5g-best-offers-guide', `/blog/${encodeURIComponent('دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-0537394981')}`],
      ['/blog/zain-5g-offers', `/blog/${encodeURIComponent('زين-5g-عروض-اتصل-0537394981-لمعرفة-المزيد-عن-عروض-زين')}`],
      ['/blog/zain-5g-packages', `/blog/${encodeURIComponent('زين-باقات-5g-اسعار-مميزة-وعروض-حصرية-اتصل-الآن-0537394981')}`],
      ['/blog/zain-5g-high-speed-offers', `/blog/${encodeURIComponent('زين-عروض-5g-سرعة-انترنت-عالية-بأقل-الأسعار-0537394981-اطلب-الخدمة-فورا')}`],
      ['/blog/zain-5g-unlimited', `/blog/${encodeURIComponent('زين-لا-محدود-5G-تجربة-إنترنت-فائقة-السرعة-تلبي-جميع-احتياجاتك-الرقمية-0537394981')}`],
    ];

    return legacyMap.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
  transpilePackages: ['motion', 'framer-motion'],
  webpack: (config, {dev}) => {
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
