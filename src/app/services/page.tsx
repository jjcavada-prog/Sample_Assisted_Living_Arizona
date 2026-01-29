import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CoreServicesGrid from './components/CoreServicesGrid';
import ComparisonMatrix from './components/ComparisonMatrix';
import CareAssessment from './components/CareAssessment';
import CostCalculator from './components/CostCalculator';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: "Care Services - Sample Assisted Living",
  description: 'Comprehensive assisted living services with personalized care plans, 24/7 supervision, home-cooked meals, and family-like atmosphere. Discover our intimate 10-resident care approach in Phoenix, Arizona.',
  keywords: ['assisted living services Phoenix', 'senior care services Arizona', '24/7 elderly care', 'personalized care plans', 'medication management Phoenix AZ', 'Maricopa County care'],
  openGraph: {
    title: "Care Services - Sample Assisted Living",
    description: 'Comprehensive assisted living services with personalized care plans, 24/7 supervision, and home-cooked meals in our intimate 10-resident facility.',
    url: 'https://godsgraceassisted.com/services',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Sample Assisted Living Care Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Care Services - Sample Assisted Living",
    description: 'Comprehensive assisted living services with personalized care plans and 24/7 supervision in Phoenix, AZ.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://godsgraceassisted.com/services',
  },
};

// Service Schema for rich results
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Assisted Living Services',
  provider: {
    '@type': 'AssistedLivingFacility',
    name: "Sample Assisted Living",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15826 North 10th Street',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: '85022',
    },
  },
  serviceType: 'Assisted Living',
  areaServed: {
    '@type': 'City',
    name: 'Phoenix',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Maricopa County, Arizona',
    },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Care Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Daily Living Assistance',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathing Assistance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dressing Assistance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Grooming Assistance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobility Assistance' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Health Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medication Management' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '24/7 Supervision' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Health Monitoring' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Lifestyle Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home-Cooked Meals' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Activities Program' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Transportation' } },
        ],
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Header />
      <main className="pt-20">
        <HeroSection />
        <CoreServicesGrid />
        <ComparisonMatrix />
        <CareAssessment />
        <CostCalculator />
        <CTASection />
      </main>
    </div>
  );
}
