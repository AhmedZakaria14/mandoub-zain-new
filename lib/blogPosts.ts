import { blogPosts as originalPosts } from '@/data/blogs';
import { PHONE_NUMBER } from './config';
export type { BlogPost } from '@/data/blogs';

const rentalLabel = 'الموقع للإيجار';
const rentalContact = `${PHONE_NUMBER} — ${rentalLabel}`;

// Keep article URLs and body content stable; use the same title everywhere.
export const blogPosts = originalPosts.map((post) => ({
  ...post,
  title: post.title.includes(rentalLabel)
    ? post.title
    : post.title.includes(PHONE_NUMBER)
      ? post.title.replace(PHONE_NUMBER, rentalContact)
      : `${post.title} | ${rentalContact}`,
  metaDescription: `${rentalContact}. للاستفسار عن تأجير الموقع تواصل عبر الاتصال أو واتساب.`,
  metaKeywords: [...new Set([...(post.metaKeywords || []), rentalLabel, 'موقع للإيجار'])],
}));
