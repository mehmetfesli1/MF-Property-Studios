import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Get Your Free Real Estate Photography Quote',
  description: 'Contact MF Property Studios for professional real estate photography services. Get a free quote within 24 hours. Call (123) 456-7890 or use our online form.',
  keywords: ['real estate photography quote', 'contact property photographer', 'real estate photography pricing', 'professional property photos'],
  openGraph: {
    title: 'Contact - MF Property Studios',
    description: 'Get your free real estate photography quote today. Professional service with 24-hour turnaround.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Contact MF Property Studios',
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 