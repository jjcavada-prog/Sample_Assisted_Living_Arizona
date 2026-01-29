import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LifeHereInteractive from './components/LifeHereInteractive';

export const metadata: Metadata = {
  title: "Life Here - Sample Assisted Living",
  description: "Experience the warmth, joy, and dignity of daily life at Sample Assisted Living. View our photo galleries, activity calendars, meal menus, and hear stories from our residents about their joyful lifestyle.",
  keywords: ['assisted living lifestyle Phoenix', 'senior activities Arizona', 'assisted living photos', 'resident life Phoenix AZ'],
  openGraph: {
    title: "Life Here - Sample Assisted Living",
    description: "Experience the warmth, joy, and dignity of daily life at Sample Assisted Living. View our photo galleries and activity calendars.",
    url: 'https://godsgraceassisted.com/life-here',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Life at Sample Assisted Living - Daily Activities and Joy",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Life Here - Sample Assisted Living",
    description: 'Experience the warmth, joy, and dignity of daily life at our boutique assisted living facility.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://godsgraceassisted.com/life-here',
  },
};

export default function LifeHerePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <LifeHereInteractive />
      </main>
    </>
  );
}
