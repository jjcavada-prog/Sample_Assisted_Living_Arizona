import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationMapProps {
  className?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ className = '' }) => {
  return (
    <section className={`py-12 md:py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Find Us in Scottsdale
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in a peaceful residential neighborhood in Maricopa County with easy access to healthcare facilities, shopping, and community amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-background rounded-2xl shadow-soft overflow-hidden h-[400px] md:h-[500px]">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="Sample Assisted Living Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=32.1707,-110.9594&z=15&output=embed"
                  className="border-0"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background border-2 border-border rounded-xl p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPinIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-cta text-lg font-semibold text-foreground mb-2">
                      Our Address
                    </h3>
                    <p className="font-body text-base text-muted-foreground">
                      123 Sample Street<br />
                      Scottsdale, AZ 85000
                    </p>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=123+Sample+Street+Scottsdale+AZ+85000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground font-cta text-base font-semibold rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105"
                >
                  <Icon name="MapIcon" size={20} className="mr-2" />
                  Get Directions
                </a>
              </div>

              <div className="bg-background border-2 border-border rounded-xl p-6">
                <h3 className="font-cta text-lg font-semibold text-foreground mb-4">
                  Nearby Landmarks
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Icon name="BuildingOfficeIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">
                      Banner University Medical Center (4 miles)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="ShoppingBagIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">
                      Park Place Mall (3 miles)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="BuildingLibraryIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">
                      Scottsdale Public Library (2.5 miles)
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Icon name="HomeModernIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">
                      Downtown Scottsdale (5 miles)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 border-2 border-accent rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <Icon name="ClockIcon" size={24} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-cta text-base font-semibold text-foreground mb-2">
                      Tour Hours
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Monday - Saturday<br />
                      9:00 AM - 5:00 PM
                    </p>
                    <p className="font-body text-xs text-accent font-medium mt-2">
                      Unscheduled visits welcome anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;