import { blogPosts as originalPosts } from '@/data/blogs';
import { PHONE_NUMBER } from './config';
export type { BlogPost } from '@/data/blogs';

// Preserve article-specific descriptions, keywords and canonical URLs.
export const blogPosts = originalPosts.map((post) => ({
  ...post,
  title: post.title.includes(PHONE_NUMBER) ? post.title : `${post.title} | ${PHONE_NUMBER}`,
}));
