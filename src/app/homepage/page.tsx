import type { Metadata } from 'next';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: "Sample Assisted Living - Premium Assisted Living in Scottsdale, AZ",
  description: "Experience family-sized care in a home-like setting at Sample Assisted Living. Our boutique assisted living facility in Scottsdale provides personalized attention for up to 10 residents with dignity, joy, and genuine human connection.",
  keywords: ['assisted living Scottsdale AZ', 'senior care Scottsdale', 'boutique assisted living Arizona', '10 resident care home', 'personalized senior care Scottsdale', 'Maricopa County care home'],
  openGraph: {
    title: "Sample Assisted Living - Premium Assisted Living in Scottsdale, AZ",
    description: 'Experience family-sized care in a home-like setting. Boutique assisted living for up to 10 residents with personalized attention, dignity, and genuine human connection.',
    url: 'https://sampleassistedliving.com/homepage',
    type: 'website',
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
    title: "Sample Assisted Living - Premium Assisted Living in Scottsdale, AZ",
    description: 'Experience family-sized care in a home-like setting. Boutique assisted living for up to 10 residents.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sampleassistedliving.com/homepage',
  },
};

export default function Homepage() {
  return <HomepageInteractive />;
}
