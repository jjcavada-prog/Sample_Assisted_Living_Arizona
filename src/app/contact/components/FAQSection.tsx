'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What should I bring to the tour?',
    answer: 'Just bring yourself and any questions you have! We encourage you to bring family members who are part of the decision-making process. We\'ll provide all the information you need during the tour, including our care services, amenities, and pricing details.'
  },
  {
    id: 'faq-2',
    question: 'How long does a typical tour take?',
    answer: 'In-person tours typically last 45-60 minutes, giving you plenty of time to see our home, meet our staff, and ask questions. Virtual tours are shorter at about 30 minutes. We\'re happy to extend the time if you need more information or want to meet current residents.'
  },
  {
    id: 'faq-3',
    question: 'Can I visit without an appointment?',
    answer: 'Absolutely! We maintain an open-door policy and welcome unscheduled visits during our regular hours (Monday-Saturday, 9 AM - 5 PM). However, scheduling ahead ensures our director is available to give you a comprehensive tour and answer all your questions.'
  },
  {
    id: 'faq-4',
    question: 'What if I need to reschedule my tour?',
    answer: 'We understand that schedules change. Simply call us at (480) 765-7128 at least 24 hours before your scheduled tour, and we\'ll be happy to find a new time that works for you.'
  },
  {
    id: 'faq-5',
    question: 'Can I meet current residents during the tour?',
    answer: "Yes! With residents' permission, we love introducing prospective families to our current residents. This gives you a genuine sense of the community and allows you to hear firsthand about life at Sample Assisted Living. We always respect our residents' privacy and preferences."
  },
  {
    id: 'faq-6',
    question: 'What happens after the tour?',
    answer: 'After your tour, we\'ll provide you with detailed information packets, pricing details, and next steps. There\'s no pressure to make an immediate decision. We encourage you to take your time, discuss with family, and reach out with any follow-up questions. We\'re here to support you throughout the decision-making process.'
  }
];

interface FAQSectionProps {
  className?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className={`py-12 md:py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 md:py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Tour & Visit FAQs
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about scheduling and visiting Sample Assisted Living
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card border-2 border-border rounded-xl overflow-hidden transition-all duration-300 ease-organic hover:shadow-soft"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-muted/50"
                >
                  <h3 className="font-cta text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-organic ${
                    openFAQ === faq.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="font-body text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-base text-muted-foreground mb-4">
              Have more questions? We're here to help!
            </p>
            <a
              href="tel:+14807657128"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-cta text-base font-semibold rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105"
            >
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;