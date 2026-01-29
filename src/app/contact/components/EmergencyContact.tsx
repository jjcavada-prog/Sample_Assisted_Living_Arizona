import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencyContactProps {
  className?: string;
}

const EmergencyContact: React.FC<EmergencyContactProps> = ({ className = '' }) => {
  return (
    <section className={`py-12 md:py-16 bg-error/5 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border-2 border-error rounded-2xl shadow-soft p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-error/10 rounded-full flex items-center justify-center">
                <Icon name="ExclamationTriangleIcon" size={32} className="text-error" />
              </div>
              <div className="flex-1">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  24/7 Emergency Contact
                </h2>
                <p className="font-body text-base text-muted-foreground mb-4">
                  For urgent matters or emergencies involving current residents, please call our emergency line immediately.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <a
                    href="tel:+14807657128"
                    className="flex items-center px-6 py-3 bg-error text-error-foreground font-cta text-base font-semibold rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-error/90 hover:shadow-organic hover:scale-105"
                  >
                    <Icon name="PhoneIcon" size={20} className="mr-2" />
                    (480) 765-7128
                  </a>
                  <p className="font-body text-sm text-muted-foreground">
                    Available 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;