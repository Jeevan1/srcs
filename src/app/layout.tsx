import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import AosProvider from '@/components/AosProvider';

const Roboto = Quicksand({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | Santosh Raj Construction and Suppliers',
  },
  description: 'Santosh Raj Construction and Suppliers',
  icons: {
    icon: '/assets/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Home | Santosh Raj Construction and Suppliers',
    description: 'Santosh Raj Construction and Suppliers',
    images: [
      {
        url: '/assets/logo.png',
        width: 800,
        height: 600,
        alt: 'Santosh Raj Construction and Suppliers',
      },
    ],
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
