'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Guide {
  id: number;
  title: string;
  description: string;
  icon: string;
  fileSize: string;
}

interface DownloadableGuidesProps {
  className?: string;
}

const DownloadableGuides = ({ className = '' }: DownloadableGuidesProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const guides: Guide[] = [
    {
      id: 1,
      title: 'Complete Service Guide',
      description:
        "Comprehensive overview of all care services, amenities, and daily life at Sample Assisted Living.",
      icon: 'DocumentTextIcon',
      fileSize: '2.4 MB',
    },
    {
      id: 2,
      title: 'Care Protocols & Standards',
      description:
        'Detailed documentation of our care procedures, safety protocols, and quality standards.',
      icon: 'ClipboardDocumentCheckIcon',
      fileSize: '1.8 MB',
    },
    {
      id: 3,
      title: 'Staff Credentials & Training',
      description:
        'Information about our team qualifications, ongoing training, and staff-to-resident ratios.',
      icon: 'AcademicCapIcon',
      fileSize: '1.2 MB',
    },
    {
      id: 4,
      title: 'Family Handbook',
      description:
        'Essential information for families including visiting policies, communication guidelines, and involvement opportunities.',
      icon: 'BookOpenIcon',
      fileSize: '3.1 MB',
    },
  ];

  const handleDownload = (guideTitle: string) => {
    if (!isHydrated) return;
    alert(`Download initiated for: ${guideTitle}\n\nIn a production environment, this would download the actual PDF file.`);
  };

  if (!isHydrated) {
    return (
      <section className={`py-16 lg:py-24 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              Downloadable Service Guides
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Access detailed information about our services, care protocols, and what makes Sample Assisted Living special.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card rounded-xl shadow-soft p-6">
                <div className="animate-pulse space-y-4">
                  <div className="h-12 w-12 bg-muted rounded-full"></div>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-10 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 lg:py-24 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Downloadable Service Guides
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Access detailed information about our services, care protocols, and what makes Sample Assisted Living special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-card rounded-xl shadow-soft p-6 transition-all duration-300 ease-organic hover:shadow-organic hover:scale-105"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Icon name={guide.icon as any} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-foreground mb-2">{guide.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {guide.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Icon name="DocumentIcon" size={14} className="mr-1" />
                    <span>PDF • {guide.fileSize}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleDownload(guide.title)}
                className="w-full flex items-center justify-center px-6 py-3 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic"
              >
                <Icon name="ArrowDownTrayIcon" size={20} className="mr-2" />
                Download Guide
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-6">
            Have questions about our services? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14807657128"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-cta font-semibold text-base rounded-lg border-2 border-primary shadow-soft transition-all duration-300 ease-organic hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              Call (480) 765-7128
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadableGuides;