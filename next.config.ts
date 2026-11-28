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
        hostname: 'www.xn-----ctdcm0aqck5plajre8a.com',
        pathname: '/images/**',
      },
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
    const redirect301 = (source: string, destination: string) => ({
      source: source.split("/").map(encodeURIComponent).join("/"),
      destination,
      statusCode: 301,
    });

    const legacyMap: [string, string][] = [
      ['/blog/5', '/#blog'],
      ['/blog/18', `/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0594006091')}`],
      ['/blog/zain-sales-rep-guide', `/blog/${encodeURIComponent('مندوب-مبيعات-زين-حلقة-الوصل-بين-الشركة-والعميل-0594006091')}`],
      ['/blog/zain-sales-rep-professional', `/blog/${encodeURIComponent('مندوب-مبيعات-شركة-زين-خدمة-احترافية-0594006091-اتصل-فور-ا')}`],
      ['/blog/zain-sales-rep-riyadh', `/blog/${encodeURIComponent('مندوب-شركة-زين-بالرياض-اتصل-الآن-0594006091-للاشتراك-في-خدماتنا-المميزة')}`],
      ['/blog/zain-5g-ksa-offers', `/blog/${encodeURIComponent('عروض-زين-5-جي-في-السعودية-0594006091-المميزات-والأسعار-وافضل-الباقات')}`],
      ['/blog/zain-5g-internet-offers', `/blog/${encodeURIComponent('عروض-زين-للانترنت-5g-خدمات-مميزة-بأسعار-ممتازة-اتصل-الآن-0594006091')}`],
      ['/blog/zain-5g-net-offers', `/blog/${encodeURIComponent('عروض-زين-نت-5g-بأعلى-سرعة-إنترنت-في-المملكة-اتصل-0594006091')}`],
      ['/blog/zain-five-g-offers', `/blog/${encodeURIComponent('عروض-فايف-جي-زين-اتصل-الآن-0594006091-واحصل-على-أفضل-سرعة')}`],
      ['/blog/zain-five-g-offers-reliable', `/blog/${encodeURIComponent('عروض-زين-فايف-جي-خدمة-موثوقة-بأقل-الأسعار-اتصل-0594006091')}`],
      ['/blog/zain-5g-best-offers-guide', `/blog/${encodeURIComponent('دليلك-الشامل-لأفضل-عروض-zain-5g-في-السعودية-اتصل-الآن-0594006091')}`],
      ['/blog/zain-5g-offers', `/blog/${encodeURIComponent('زين-5g-عروض-اتصل-0594006091-لمعرفة-المزيد-عن-عروض-زين')}`],
      ['/blog/zain-5g-packages', `/blog/${encodeURIComponent('زين-باقات-5g-اسعار-مميزة-وعروض-حصرية-اتصل-الآن-0594006091')}`],
      ['/blog/zain-5g-high-speed-offers', `/blog/${encodeURIComponent('زين-عروض-5g-سرعة-انترنت-عالية-بأقل-الأسعار-0594006091-اطلب-الخدمة-فورا')}`],
      ['/blog/zain-5g-unlimited', `/blog/${encodeURIComponent('زين-لا-محدود-5G-تجربة-إنترنت-فائقة-السرعة-تلبي-جميع-احتياجاتك-الرقمية-0594006091')}`],
    ];

    return [
      {
        source: '/المدونة',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/%D8%A7%D9%84%D9%85%D8%AF%D9%88%D9%86%D8%A9',
        destination: '/blog',
        statusCode: 301,
      },
      redirect301('/contactط', '/contact'),
      redirect301('/تواصل-معنا.html', '/contact'),
      ...legacyMap.filter(([source, destination]) => decodeURIComponent(source) !== decodeURIComponent(destination)).map(([source, destination]) => ({
        source: source.split("/").map(encodeURIComponent).join("/"),
        destination,
        permanent: true,
      })),
    ];
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
