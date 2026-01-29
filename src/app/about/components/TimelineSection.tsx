'use client';

import { useState } from 'react';


interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  className?: string;
}

const TimelineSection = ({ className = '' }: TimelineSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2014',
      title: 'The Beginning',
      description: "Sample Assisted Living opens its doors with a vision to revolutionize assisted living through intimate, family-centered care."
    },
    {
      year: '2016',
      title: 'State Recognition',
      description: 'Received Arizona State Excellence in Senior Care Award for outstanding quality and resident satisfaction.'
    },
    {
      year: '2018',
      title: 'Healthcare Partnerships',
      description: 'Established partnerships with leading Scottsdale healthcare providers, hospice services, and medical specialists.'
    },
    {
      year: '2020',
      title: 'Community Impact',
      description: 'Launched community outreach programs and became a trusted resource for families navigating senior care decisions.'
    },
    {
      year: '2022',
      title: 'Medicaid Certification',
      description: 'Achieved Medicaid certification, expanding access to quality care for more families in our community.'
    },
    {
      year: '2026',
      title: 'Continued Excellence',
      description: 'Celebrating over a decade of transforming lives, with hundreds of families trusting us with their loved ones\' care.'
    }
  ];

  if (!isHydrated) {
    return (
      <section className={`py-20 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="font-body text-xl text-foreground/70 leading-relaxed">
              A decade of dedication to redefining senior care in Scottsdale
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-heading text-2xl font-semibold text-primary">
                    {event.year}
                  </span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="font-body text-base text-foreground/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Our Journey
          </h2>
          <p className="font-body text-xl text-foreground/70 leading-relaxed">
            A decade of dedication to redefining senior care in Scottsdale
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="flex gap-8 items-start transition-all duration-300 ease-organic hover:translate-x-2"
            >
              <div className="flex-shrink-0 w-24 text-right">
                <span className="font-heading text-2xl font-semibold text-primary">
                  {event.year}
                </span>
              </div>
              
              <div className="flex-shrink-0 relative">
                <div className="w-4 h-4 bg-primary rounded-full transition-all duration-300 ease-organic hover:scale-150"></div>
                {index < timelineEvents.length - 1 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
                )}
              </div>
              
              <div className="flex-1 pb-12">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="font-body text-base text-foreground/70 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;