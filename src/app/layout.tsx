import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import AosProvider from '@/components/AosProvider';

const Roboto = Quicksand({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Santosh Raj Construction and Suppliers',
    template: '%s | Santosh Raj Construction and Suppliers',
  },
  description: 'Santosh Raj Construction and Suppliers',
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Roboto.className} antialiased`}>
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
