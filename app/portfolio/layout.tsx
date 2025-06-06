import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Professional Real Estate Photography Gallery',
  description: 'Explore our stunning portfolio of real estate photography projects. See how we transform properties into irresistible listings with professional interior, exterior, and aerial photography.',
  keywords: ['real estate photography portfolio', 'property photography gallery', 'residential photography', 'commercial photography', 'luxury real estate photos', 'drone photography examples'],
  openGraph: {
    title: 'Portfolio - MF Property Studios',
    description: 'Explore our stunning portfolio of real estate photography projects featuring residential, commercial, and luxury properties.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'MF Property Studios Portfolio',
      },
    ],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 