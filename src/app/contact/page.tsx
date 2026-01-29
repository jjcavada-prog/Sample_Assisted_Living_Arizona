import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import TourScheduler from './components/TourScheduler';
import LocationMap from './components/LocationMap';
import EmergencyContact from './components/EmergencyContact';
import FAQSection from './components/FAQSection';
import ContactFooter from './components/ContactFooter';

export const metadata: Metadata = {
  title: "Contact & Schedule Tour - Sample Assisted Living",
  description: "Schedule a personal tour of Sample Assisted Living in Scottsdale, AZ. Experience family-centered assisted living care firsthand. Multiple contact options available including phone and virtual tours.",
  keywords: ["contact Sample Assisted Living", 'schedule tour assisted living Scottsdale', 'Scottsdale AZ senior care contact', 'assisted living tour Arizona', 'Maricopa County care home'],
  openGraph: {
    title: "Contact & Schedule Tour - Sample Assisted Living",
    description: "Schedule a personal tour of Sample Assisted Living. Experience family-centered assisted living care firsthand in Scottsdale, AZ.",
    url: 'https://sampleassistedliving.com/contact',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Contact Sample Assisted Living - Schedule Your Tour",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact & Schedule Tour - Sample Assisted Living",
    description: 'Schedule a personal tour of our boutique assisted living facility in Scottsdale, AZ.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sampleassistedliving.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <ContactHero />
        <ContactInfo />
        <TourScheduler />
        <LocationMap />
        <EmergencyContact />
        <FAQSection />
      </main>

      <ContactFooter />
    </div>
  );
}
