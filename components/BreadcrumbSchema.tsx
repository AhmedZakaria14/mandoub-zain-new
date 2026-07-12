import React from 'react';

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
        "item": "https://www.zain5grouter.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المدونة",
        "item": "https://www.zain5grouter.com/#blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": articleTitle,
        "item": `https://www.zain5grouter.com/blog/${articleSlug}`
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
