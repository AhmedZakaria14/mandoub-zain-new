import { rentalMetadata } from '@/lib/rentalMetadata';
import React from 'react';
import { Metadata } from 'next';
import { HomePageView } from '@/components/HomePageView';

export const metadata: Metadata = {
  ...rentalMetadata(),
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return <HomePageView />;
}
