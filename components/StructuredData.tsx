export default function StructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://mfpropertystudios.com",
    "name": "MF Property Studios",
    "description": "Professional real estate photography and videography services that transform properties into irresistible listings.",
    "url": "https://mfpropertystudios.com",
    "telephone": "+1-123-456-7890",
    "email": "info@mfpropertystudios.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street, Suite 200",
      "addressLocality": "Your City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",  // Replace with actual coordinates
      "longitude": "-74.0060"
    },
    "openingHours": [
      "Mo-Fr 08:00-20:00",
      "Sa 09:00-18:00",
      "Su 10:00-16:00"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "50000"  // 50km radius
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Real Estate Photography Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Interior Photography",
            "description": "Professional HDR interior photography"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Aerial Drone Photography",
            "description": "Stunning aerial perspectives with certified drone pilots"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "360° Virtual Tours",
            "description": "Immersive virtual reality property tours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Videography",
            "description": "Cinematic property tour videos"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.facebook.com/mfpropertystudios",
      "https://www.instagram.com/mfpropertystudios",
      "https://www.linkedin.com/company/mfpropertystudios"
    ]
  };

  const photographerData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "MF Property Studios Team",
    "jobTitle": "Professional Real Estate Photographer",
    "worksFor": {
      "@type": "LocalBusiness",
      "name": "MF Property Studios"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Real Estate Photographer",
      "occupationLocation": {
        "@type": "City",
        "name": "Your City"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(photographerData)
        }}
      />
    </>
  );
} 