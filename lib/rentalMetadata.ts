import type { Metadata } from 'next';
import { BRAND_IMAGE_URL } from './config';
export const RENTAL_TITLE = 'الموقع متاح للإيجار | زين 5G';
export const RENTAL_DESCRIPTION = 'الموقع متاح للإيجار. للاستفسار عن تأجير موقع زين 5G والألياف البصرية تواصل عبر الاتصال أو واتساب على +20 10 10742430.';
export function rentalMetadata(title = RENTAL_TITLE): Metadata {
  return {
    title,
    description: RENTAL_DESCRIPTION,
    keywords: ['الموقع متاح للإيجار', 'موقع للإيجار', 'زين 5G', 'ألياف بصرية'],
    openGraph: { title, description: RENTAL_DESCRIPTION, locale: 'ar_SA', type: 'website', images: [{ url: BRAND_IMAGE_URL, alt: RENTAL_DESCRIPTION }] },
    twitter: { card: 'summary_large_image', title, description: RENTAL_DESCRIPTION, images: [BRAND_IMAGE_URL] },
  };
}
