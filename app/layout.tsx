import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/base/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Atlas Realty Leads',
  description:
    'Atlas Realty Leads is a platform that provides motivated seller leads for real estate investors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta property="og:title" content="Atlas Realty Leads" />
        <meta
          property="og:description"
          content="Atlas Realty Leads is a platform that provides motivated seller leads for real estate investors."
        />
        <meta property="og:image" content="/favicon.ico" />
        {/* to be changed to the correct URL */}
        <meta property="og:url" content="https://atlasrealtyleads.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Atlas Realty Leads" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
