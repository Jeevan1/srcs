import type { Metadata } from 'next';
import { Roboto_Serif } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

const Roboto = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-roboto-serif',
});

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
      <body className={`${Roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}
