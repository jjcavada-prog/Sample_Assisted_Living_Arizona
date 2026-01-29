'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Credential {
  title: string;
  description: string;
  icon: string;
  downloadUrl: string;
}

interface LicensingSectionProps {
  className?: string;
}

const LicensingSection = ({ className = '' }: LicensingSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const credentials: Credential[] = [
    {
      title: 'Arizona State License',
      description: 'Fully licensed by the Arizona Department of Health Services for assisted living operations.',
      icon: 'ShieldCheckIcon',
      downloadUrl: '#'
    },
    {
      title: 'Medicaid Certified',
      description: 'Certified to accept Medicaid, ensuring quality care is accessible to more families.',
      icon: 'DocumentCheckIcon',
      downloadUrl: '#'
    },
    {
      title: 'Healthcare Partnerships',
      description: 'Established relationships with leading Phoenix healthcare providers and specialists.',
      icon: 'BuildingOffice2Icon',
      downloadUrl: '#'
    },
    {
      title: 'Safety Certifications',
      description: 'Current certifications in fire safety, emergency preparedness, and infection control.',
      icon: 'FireIcon',
      downloadUrl: '#'
    }
  ];

  const handleDownload = (url: string) => {
    if (isHydrated) {
      console.log('Download:', url);
    }
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Licensing & Credentials
          </h2>
          <p className="font-body text-xl text-foreground/70 leading-relaxed">
            Our commitment to excellence is backed by comprehensive licensing, certifications, and partnerships that ensure the highest standards of care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft transition-all duration-300 ease-organic hover:shadow-organic"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name={credential.icon} size={32} className="text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {credential.title}
                  </h3>
                  <p className="font-body text-base text-foreground/70 leading-relaxed mb-4">
                    {credential.description}
                  </p>
                  <button
                    onClick={() => handleDownload(credential.downloadUrl)}
                    className="flex items-center text-primary font-body font-medium text-base transition-colors duration-300 ease-organic hover:text-primary/80"
                  >
                    <Icon name="ArrowDownTrayIcon" size={20} className="mr-2" />
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted p-8 rounded-xl max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Icon name="InformationCircleIcon" size={32} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                Open-Door Policy
              </h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed mb-4">
                We believe in complete transparency. Families are welcome to visit at any time—scheduled or unscheduled—to see firsthand the quality of care and the warmth of our community. We have nothing to hide and everything to share.
              </p>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                All licensing documents, inspection reports, and certifications are available for review upon request. We\'re proud of our track record and committed to maintaining the highest standards of care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicensingSection;