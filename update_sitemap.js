const fs = require('fs');

const code = `import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogs';
import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultDate = new Date('2024-05-01T00:00:00Z');

  const blogUrls = blogPosts.map((post) => ({
    url: \`\${SITE_URL}/blog/\${encodeURIComponent(post.slug)}\`,
    lastModified: defaultDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: \`\${SITE_URL}/\`,
      lastModified: defaultDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: \`\${SITE_URL}/blog\`,
      lastModified: defaultDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
`;

fs.writeFileSync('app/sitemap.ts', code, 'utf8');
console.log('Successfully updated app/sitemap.ts');
