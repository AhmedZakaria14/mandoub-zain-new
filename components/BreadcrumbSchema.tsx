import React from 'react';
import { SITE_URL } from '@/lib/config';

interface BreadcrumbSchemaProps {
  articleTitle: string;
  articleSlug: string;
}

const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ articleTitle, articleSlug }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المدونة",
        "item": `${SITE_URL}/#blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleTitle,
        "item": `${SITE_URL}/blog/${articleSlug}`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BreadcrumbSchema;
