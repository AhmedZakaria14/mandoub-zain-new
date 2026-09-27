import type { Metadata } from 'next';
import { BRAND_IMAGE_URL, PHONE_NUMBER } from './config';
export const RENTAL_TITLE = 'الموقع متاح للإيجار | زين 5G | 0535173600';
export const RENTAL_DESCRIPTION = 'الموقع متاح للإيجار. للاستفسار عن تأجير موقع زين 5G والألياف البصرية تواصل عبر الاتصال أو واتساب على 0535173600.';
export function rentalMetadata(title = RENTAL_TITLE): Metadata {
  title = title.includes(PHONE_NUMBER) ? title : `${title} | ${PHONE_NUMBER}`;
  return {
    title,
    description: RENTAL_DESCRIPTION,
    keywords: ['الموقع متاح للإيجار', 'موقع للإيجار', 'زين 5G', 'ألياف بصرية'],
    openGraph: { title, description: RENTAL_DESCRIPTION, locale: 'ar_SA', type: 'website', images: [{ url: BRAND_IMAGE_URL, alt: RENTAL_DESCRIPTION }] },
    twitter: { card: 'summary_large_image', title, description: RENTAL_DESCRIPTION, images: [BRAND_IMAGE_URL] },
  };
}
