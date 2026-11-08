import type { Metadata } from 'next';
import { BRAND_IMAGE_URL, PHONE_NUMBER, RENTAL_NOTICE } from './config';
export const SITE_TITLE = `مندوب زين 5G وألياف بصرية | ${PHONE_NUMBER}`;
export const SITE_DESCRIPTION = `${RENTAL_NOTICE}. تواصل مع مندوب زين للاستفسار عن باقات الإنترنت المنزلي 5G والألياف البصرية والتغطية وخدمات التركيب. اتصل أو راسلنا عبر واتساب على ${PHONE_NUMBER}.`;
export function siteMetadata(title = SITE_TITLE): Metadata {
  title = title.includes(PHONE_NUMBER) ? title : `${title} | ${PHONE_NUMBER}`;
  title = `${RENTAL_NOTICE} | ${title}`;
  return {
    title,
    description: SITE_DESCRIPTION,
    keywords: ['مندوب زين', 'زين 5G', 'ألياف بصرية', 'زين فايبر', 'إنترنت منزلي'],
    openGraph: { title, description: SITE_DESCRIPTION, locale: 'ar_SA', type: 'website', images: [{ url: BRAND_IMAGE_URL, alt: SITE_TITLE }] },
    twitter: { card: 'summary_large_image', title, description: SITE_DESCRIPTION, images: [BRAND_IMAGE_URL] },
  };
}
