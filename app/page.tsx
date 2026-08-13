import React from 'react';
import { Metadata } from 'next';
import { HomePageView } from '@/components/HomePageView';

export const metadata: Metadata = {
  title: 'تأسيس وتركيب إنترنت زين | عروض 5G والألياف البصرية اتصل 0537394981',
  description: `احصل على أفضل عروض زين لإنترنت 5G والألياف البصرية. تأسيس سريع، مودم مجاني، وباقات مميزة لتغطية شاملة في كافة أحياء المملكة. اتصل بمندوب زين.`,
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return <HomePageView />;
}
