import React from 'react';
import { Metadata } from 'next';
import { HomePageView } from '@/components/HomePageView';

export const metadata: Metadata = {
  title: 'تأسيس وتركيب إنترنت زين | عروض 5G والألياف البصرية اتصل 0534768368',
  description: `احصل على أفضل عروض زين لإنترنت 5G والألياف البصرية. تأسيس سريع ومودم مجاني وباقات مميزة في أنحاء المملكة. اتصل بمندوب زين على 0534768368.`,
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return <HomePageView />;
}
