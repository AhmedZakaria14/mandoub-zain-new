import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogs';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  // Use a stable date instead of new Date() for unchanged content
  const defaultDate = new Date('2024-05-01T00:00:00Z');

  const blogUrls = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: defaultDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: defaultDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...blogUrls,
  ];
}
