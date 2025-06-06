import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Professional Real Estate Photography & Videography',
  description: 'Comprehensive real estate photography services including interior & exterior photography, aerial drone shots, 360° virtual tours, and property videography. Professional quality with fast turnaround.',
  keywords: ['real estate photography services', 'property photography pricing', 'drone photography', 'virtual tours', 'twilight photography', 'commercial real estate photography'],
  openGraph: {
    title: 'Services - MF Property Studios',
    description: 'Professional real estate photography services designed to make your properties irresistible to buyers.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'MF Property Studios Services',
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 