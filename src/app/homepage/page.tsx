import type { Metadata } from 'next';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
  title: "Sample Assisted Living - Premium Assisted Living in Phoenix, AZ",
  description: "Experience family-sized care in a home-like setting at Sample Assisted Living. Our boutique assisted living facility in Phoenix provides personalized attention for up to 10 residents with dignity, joy, and genuine human connection.",
  keywords: ['assisted living Phoenix AZ', 'senior care Phoenix', 'boutique assisted living Arizona', '10 resident care home', 'personalized senior care Phoenix', 'Maricopa County care home'],
  openGraph: {
    title: "Sample Assisted Living - Premium Assisted Living in Phoenix, AZ",
    description: 'Experience family-sized care in a home-like setting. Boutique assisted living for up to 10 residents with personalized attention, dignity, and genuine human connection.',
    url: 'https://godsgraceassisted.com/homepage',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Sample Assisted Living - Boutique Assisted Living in Phoenix, Arizona",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sample Assisted Living - Premium Assisted Living in Phoenix, AZ",
    description: 'Experience family-sized care in a home-like setting. Boutique assisted living for up to 10 residents.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://godsgraceassisted.com/homepage',
  },
};

export default function Homepage() {
  return <HomepageInteractive />;
}
