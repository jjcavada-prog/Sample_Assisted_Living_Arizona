import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResourcesInteractive from './components/ResourcesInteractive';

export const metadata: Metadata = {
  title: "Family Resources & Support - Sample Assisted Living",
  description: 'Access comprehensive guides, financial planning tools, FAQs, and resources to support your family through assisted living decisions. Downloadable checklists, payment information, visiting guidelines, and regulatory compliance documentation.',
  keywords: ['assisted living resources', 'senior care guides Scottsdale', 'assisted living FAQ', 'family support resources Arizona', 'care planning tools', 'Maricopa County senior care'],
  openGraph: {
    title: "Family Resources & Support - Sample Assisted Living",
    description: 'Access comprehensive guides, financial planning tools, and FAQs to support your family through assisted living decisions.',
    url: 'https://sampleassistedliving.com/resources',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Sample Assisted Living Family Resources",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Family Resources & Support - Sample Assisted Living",
    description: 'Comprehensive guides and tools to support your family through assisted living decisions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://sampleassistedliving.com/resources',
  },
};

// FAQPage Schema for rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between assisted living and a nursing home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Assisted living provides help with daily activities like bathing, dressing, and medication management in a home-like setting. Nursing homes offer 24/7 skilled nursing care for those with more complex medical needs. Sample Assisted Living is an assisted living facility that provides personalized care for up to 10 residents.",
      },
    },
    {
      '@type': 'Question',
      name: "How much does assisted living cost at Sample Assisted Living?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The cost of assisted living varies based on the level of care needed. Sample Assisted Living offers competitive pricing for our boutique, 10-resident facility in Scottsdale, AZ. We accept Medicaid and can discuss payment options during your personal tour. Contact us at (480) 765-7128 for specific pricing.",
      },
    },
    {
      '@type': 'Question',
      name: 'What services are included in assisted living?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sample Assisted Living includes 24/7 supervision, assistance with daily living activities, medication management, home-cooked meals, housekeeping, laundry services, social activities, and transportation to appointments.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit my loved one anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! We encourage family visits and involvement. Sample Assisted Living has flexible visiting hours and welcomes families to participate in activities, share meals, and spend quality time with their loved ones.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my parent needs assisted living?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signs that assisted living may be needed include difficulty with daily activities (bathing, dressing, cooking), medication management issues, safety concerns, social isolation, or caregiver burnout. We offer free care assessments to help families make informed decisions.',
      },
    },
    {
      '@type': 'Question',
      name: "Does Sample Assisted Living accept Medicaid?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Sample Assisted Living accepts Medicaid (ALTCS - Arizona Long Term Care System) as a payment option. We can help guide you through the application process and discuss all available payment options.",
      },
    },
    {
      '@type': 'Question',
      name: "What makes Sample Assisted Living different from larger assisted living facilities?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Sample Assisted Living is a boutique assisted living facility caring for up to 10 residents. This intimate setting allows us to provide truly personalized care, know each resident deeply, and create a genuine family atmosphere that larger facilities simply cannot replicate.",
      },
    },
    {
      '@type': 'Question',
      name: "How do I schedule a tour of Sample Assisted Living?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can schedule a tour by calling us at (480) 765-7128 or using our online tour scheduler on the Contact page. We offer both in-person and virtual tour options.',
      },
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Header />
      <main className="pt-20">
        <ResourcesInteractive />
      </main>
    </>
  );
}
