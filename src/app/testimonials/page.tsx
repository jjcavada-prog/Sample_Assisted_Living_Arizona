import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import TestimonialsInteractive from './components/TestimonialsInteractive';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: "Testimonials - Sample Assisted Living",
  description: "Read authentic stories from families and residents who have experienced the warmth, care, and dignity of Sample Assisted Living in Scottsdale, Arizona.",
  keywords: ["Sample Assisted Living reviews", 'assisted living testimonials Scottsdale', 'senior care reviews Arizona', 'family testimonials', 'Maricopa County care home'],
  openGraph: {
    title: "Testimonials - Sample Assisted Living",
    description: "Read authentic stories from families and residents who have experienced the warmth, care, and dignity of Sample Assisted Living.",
    url: 'https://sampleassistedliving.com/testimonials',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Sample Assisted Living Testimonials - Family Stories",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Testimonials - Sample Assisted Living",
    description: "Read authentic stories from families who trust Sample Assisted Living with their loved ones.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sampleassistedliving.com/testimonials',
  },
};

// Review Schema for rich results
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://sampleassistedliving.com/#localbusiness',
  name: "Sample Assisted Living LLC",
  image: 'https://sampleassistedliving.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15826 North 10th Street',
    addressLocality: 'Scottsdale',
    addressRegion: 'AZ',
    postalCode: '85022',
    addressCountry: 'US',
  },
  telephone: '+1-480-765-7128',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Margaret S.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: "Moving my mother to Sample Assisted Living was the best decision we ever made. The staff treats her like family, and she has flourished in this warm, loving environment.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Robert & Linda K.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: "After visiting several large facilities, Sample Assisted Living was like a breath of fresh air. The intimate setting means our dad gets the attention he deserves.",
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Jennifer M.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'The home-cooked meals, the genuine care, the family atmosphere - this is what assisted living should be. My grandmother is happier than she has been in years.',
    },
  ],
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <Header />

      <main className="pt-20">
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Stories That Matter
              </h1>
              <p className="text-foreground/80 font-body text-lg md:text-xl leading-relaxed mb-8">
                Discover why families trust Sample Assisted Living with their most precious loved ones. These authentic testimonials showcase the genuine care, dignity, and joy that define our community.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-lg rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:scale-105"
                >
                  Schedule Your Tour
                  <Icon name="ArrowRightIcon" size={20} />
                </Link>
                <a
                  href="tel:+14807657128"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-cta font-semibold text-lg rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-muted"
                >
                  <Icon name="PhoneIcon" size={20} />
                  (480) 765-7128
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <TestimonialsInteractive />
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Experience Sample Assisted Living Yourself
              </h2>
              <p className="text-foreground/80 font-body text-lg leading-relaxed mb-8">
                The best way to understand what makes Sample Assisted Living special is to visit us. Schedule a personal tour, meet our staff, and see firsthand why families choose us for their loved ones.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-cta font-semibold text-lg rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:scale-105"
                >
                  Book a Visit
                  <Icon name="CalendarIcon" size={20} />
                </Link>
                <Link
                  href="/life-here"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-cta font-semibold text-lg rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-muted"
                >
                  View Photo Gallery
                  <Icon name="PhotoIcon" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-deepBlueGray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">Sample Assisted Living</h3>
              <p className="text-white/80 font-body mb-4">
                Family-sized assisted living in Scottsdale, Arizona. Where every resident is family.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                  <Icon name="ShareIcon" size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <Icon name="CameraIcon" size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/homepage" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/resources" className="text-white/80 hover:text-white transition-colors">Resources</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <Icon name="MapPinIcon" size={20} className="flex-shrink-0 mt-1" />
                  <span>1234 Main Street, Scottsdale, AZ 85251</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="PhoneIcon" size={20} className="flex-shrink-0" />
                  <a href="tel:+14807657128" className="hover:text-white transition-colors">(480) 765-7128</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="EnvelopeIcon" size={20} className="flex-shrink-0" />
                  <a href="mailto:info@sampleassistedliving.com" className="hover:text-white transition-colors">info@sampleassistedliving.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Sample Assisted Living. All rights reserved. License: SAMPLE-001 | Licensed Assisted Living Facility</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
