import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';
import { SITE_URL, PHONE_NUMBER } from '@/lib/config';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8AB825',
};

export const metadata: Metadata = {
  title: {
    default: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    template: '%s | انترنت زين 5G وألياف'
  },
  description: `أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين السعودية. تأسيس مجاني، تركيب سريع، وباقات إنترنت لا محدود. تواصل معنا: ${PHONE_NUMBER}`,
  keywords: ['زين', 'انترنت منزلي', '5G', 'ألياف بصرية', 'فايبر', 'عروض زين', 'تركيب انترنت', 'مندوب زين', 'تأسيس زين', 'ألياف زين', 'راوتر زين', 'السعودية', 'الرياض', 'إنترنت لا محدود'],
  authors: [{ name: 'موظف مبيعات زين' }],
  creator: 'مبيعات زين',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: SITE_URL,
    siteName: 'انترنت زين 5G وألياف بصرية',
    title: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    description: 'أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين السعودية. تأسيس مجاني وتركيب سريع.',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png',
        width: 1200,
        height: 630,
        alt: 'عروض انترنت زين 5G والألياف البصرية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عروض 5G وألياف بصرية - انترنت زين المنزلي',
    description: 'أفضل عروض الإنترنت المنزلي 5G والألياف البصرية من زين السعودية. تأسيس سريع.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png'],
  },
  verification: {
    google: 'ctTxmSY73XyaQXgU66_ArjlpCN3kbzizxVKvX_nxw4k',
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781351456/%D9%85%D9%86%D8%AF%D9%88%D8%A8_%D8%B2%D9%8A%D9%86_5G-removebg-preview_baa60n.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L5C6PS768D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L5C6PS768D');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WD3VT9FB');
            `,
          }}
        />
      </head>
      <body className="bg-brand-gray text-[#444] font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WD3VT9FB"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
