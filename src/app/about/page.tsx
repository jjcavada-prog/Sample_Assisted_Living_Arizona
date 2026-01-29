import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import OurStorySection from './components/OurStorySection';
import PhilosophySection from './components/PhilosophySection';
import TimelineSection from './components/TimelineSection';
import StaffSection from './components/StaffSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';

export const metadata: Metadata = {
  title: "About Us - Sample Assisted Living",
  description: "Discover the story behind Sample Assisted Living, our family-centered care philosophy, dedicated staff, and commitment to redefining assisted living in Scottsdale with intimate, personalized attention for up to 10 residents.",
  keywords: ["about Sample Assisted Living", 'assisted living staff Scottsdale', 'senior care philosophy', 'family-centered care Arizona', 'Maricopa County care home'],
  openGraph: {
    title: "About Us - Sample Assisted Living",
    description: 'Discover our family-centered care philosophy and dedicated staff. Redefining assisted living in Scottsdale with intimate, personalized attention for up to 10 residents.',
    url: 'https://sampleassistedliving.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "About Sample Assisted Living - Our Story and Team",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Us - Sample Assisted Living",
    description: 'Discover our family-centered care philosophy and dedicated staff in Scottsdale, AZ.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sampleassistedliving.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <OurStorySection />
        <PhilosophySection />
        <TimelineSection />
        <StaffSection />
        <CTASection />
        <FooterSection />
      </div>
    </main>
  );
}
