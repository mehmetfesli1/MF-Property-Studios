'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track in production
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID) {
      // Track page view
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: pathname,
        });
      }
    }
  }, [pathname]);

  // Simple event tracking function for contact form submissions, etc.
  useEffect(() => {
    // Add event tracking functions to window for use throughout the app
    (window as any).trackEvent = (action: string, category: string, label?: string, value?: number) => {
      if (process.env.NODE_ENV === 'production' && typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      } else {
        // Log events in development
        console.log('Analytics Event:', { action, category, label, value });
      }
    };

    // Track contact form interactions
    (window as any).trackContactForm = (action: string, form_type: string) => {
      (window as any).trackEvent(action, 'Contact Form', form_type);
    };

    // Track portfolio interactions
    (window as any).trackPortfolio = (action: string, project_name: string) => {
      (window as any).trackEvent(action, 'Portfolio', project_name);
    };
  }, []);

  // Only render the Google Analytics script in production
  if (process.env.NODE_ENV !== 'production' || !process.env.NEXT_PUBLIC_GA_ID) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
} 