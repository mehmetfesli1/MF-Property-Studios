import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: {
    default: 'MF Property Studios - Professional Real Estate Photography',
    template: '%s | MF Property Studios',
  },
  description: 'Professional real estate photography & videography that sells. Transforming properties into irresistible listings with stunning aerial drone imagery, 360° virtual tours, and cinematic walkthrough videos.',
  keywords: ['real estate photography', 'property photography', 'drone photography', 'virtual tours', '360 photography', 'real estate marketing', 'property videography'],
  authors: [{ name: 'MF Property Studios' }],
  creator: 'MF Property Studios',
  publisher: 'MF Property Studios',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mfpropertystudios.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mfpropertystudios.com',
    title: 'MF Property Studios - Professional Real Estate Photography',
    description: 'Professional real estate photography & videography that sells. Transforming properties into irresistible listings.',
    siteName: 'MF Property Studios',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MF Property Studios - Professional Real Estate Photography',
    description: 'Professional real estate photography & videography that sells. Transforming properties into irresistible listings.',
    creator: '@mfpropertystudios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-700">
        <Analytics />
        <StructuredData />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 