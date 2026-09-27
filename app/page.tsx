import { siteMetadata } from '@/lib/siteMetadata';
import React from 'react';
import { Metadata } from 'next';
import { HomePageView } from '@/components/HomePageView';

export const metadata: Metadata = {
  ...siteMetadata(),
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return <HomePageView />;
}
