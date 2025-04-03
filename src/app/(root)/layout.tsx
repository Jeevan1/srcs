import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Santosh Raj Construction and Suppliers',
    template: '%s | Santosh Raj Construction and Suppliers',
  },
  description: 'Santosh Raj Construction and Suppliers',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
