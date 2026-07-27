const fs = require('fs');

const pageContent = fs.readFileSync('app/page.tsx', 'utf8');

// Find metadata block
const metadataMatch = pageContent.match(/export const metadata[\s\S]*?\n\};/);
const metadataBlock = metadataMatch ? metadataMatch[0] : '';

// Remove export const metadata from pageContent for client view
let clientViewContent = pageContent;
clientViewContent = clientViewContent.replace(/import { Metadata } from 'next';\n?/, '');
clientViewContent = clientViewContent.replace(/export const metadata[\s\S]*?\n\};\n?/, '');
clientViewContent = clientViewContent.replace('export default function Home() {', 'export function HomePageView() {');

// Add 'use client'; at the very top of client view content
clientViewContent = `'use client';\n\n` + clientViewContent;

// Write components/HomePageView.tsx
fs.writeFileSync('components/HomePageView.tsx', clientViewContent, 'utf8');
console.log('Created components/HomePageView.tsx');

// Now re-write app/page.tsx as a clean Server Component
const serverPageCode = `import React from 'react';
import { Metadata } from 'next';
import { HomePageView } from '@/components/HomePageView';

${metadataBlock}

export default function Home() {
  return <HomePageView />;
}
`;

fs.writeFileSync('app/page.tsx', serverPageCode, 'utf8');
console.log('Updated app/page.tsx');
