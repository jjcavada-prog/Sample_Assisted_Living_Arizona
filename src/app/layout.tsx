import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

const siteUrl = 'https://sampleassistedliving.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sample Assisted Living - Boutique Assisted Living in Scottsdale, AZ",
    template: "%s | Sample Assisted Living",
  },
  description: "Sample Assisted Living LLC provides personalized care for residents in a warm, home-like setting in Scottsdale, Arizona with 24/7 supervision, home-cooked meals, and genuine human connection.",
  keywords: [
    'assisted living Scottsdale AZ',
    'senior care Scottsdale Arizona',
    'boutique assisted living',
    'small assisted living facility',
    'personalized senior care',
    'family-centered assisted living',
    'Scottsdale assisted living facility',
    'Arizona senior care',
    'intimate care home',
    "Sample Assisted Living",
  ],
  authors: [{ name: "Sample Assisted Living LLC" }],
  creator: "Sample Assisted Living LLC",
  publisher: "Sample Assisted Living LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Sample Assisted Living",
    title: "Sample Assisted Living - Boutique Assisted Living in Scottsdale, AZ",
    description: "Sample Assisted Living LLC provides personalized care in Scottsdale, Arizona with dignity, joy, and genuine human connection.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Sample Assisted Living - Boutique Assisted Living in Scottsdale, Arizona",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sample Assisted Living - Boutique Assisted Living in Scottsdale, AZ",
    description: "Sample Assisted Living LLC provides personalized care in Scottsdale, Arizona with dignity, joy, and genuine human connection.",
    images: ['/og-image.jpg'],
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
  verification: {
    // Add your verification codes here when you set up Search Console
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// JSON-LD Structured Data
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AssistedLivingFacility',
  '@id': `${siteUrl}/#organization`,
  name: "Sample Assisted Living LLC",
  description: "Sample Assisted Living LLC - boutique assisted living facility in Scottsdale, Arizona providing personalized care. License: SAMPLE-001.",
  url: siteUrl,
  telephone: '+1-480-765-7128',
  email: 'info@sampleassistedliving.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15826 North 10th Street',
    addressLocality: 'Scottsdale',
    addressRegion: 'AZ',
    postalCode: '85022',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.6392,
    longitude: -112.0693,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$$',
  image: `${siteUrl}/og-image.jpg`,
  sameAs: [],
  areaServed: {
    '@type': 'City',
    name: 'Scottsdale',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Maricopa County, Arizona',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Assisted Living Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Personal Care',
          description: 'Round-the-clock supervision and assistance with daily living activities',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Home-Cooked Meals',
          description: 'Nutritious, home-cooked meals tailored to dietary needs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medication Management',
          description: 'Professional medication administration and monitoring',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Activities Program',
          description: 'Engaging daily activities and social programs',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "Sample Assisted Living LLC",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: "Sample Assisted Living LLC - boutique assisted living facility providing family-centered care in Scottsdale, Arizona. License: SAMPLE-001.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15826 North 10th Street',
    addressLocality: 'Scottsdale',
    addressRegion: 'AZ',
    postalCode: '85022',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-480-765-7128',
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
