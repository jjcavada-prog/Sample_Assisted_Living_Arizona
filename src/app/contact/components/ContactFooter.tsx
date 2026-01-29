import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ContactFooterProps {
  className?: string;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Life Here', href: '/life-here' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Resources', href: '/resources' }
  ];

  return (
    <footer className={`bg-deepBlueGray text-background py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">Sample Assisted Living</h3>
              <p className="font-body text-sm text-background/80 mb-4">
                Family-sized care in a home-like setting. Where every resident is family.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center transition-all duration-300 ease-organic hover:bg-primary hover:scale-110"
                  aria-label="Facebook"
                >
                  <Icon name="ShareIcon" size={20} className="text-background" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center transition-all duration-300 ease-organic hover:bg-primary hover:scale-110"
                  aria-label="Instagram"
                >
                  <Icon name="CameraIcon" size={20} className="text-background" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-cta text-base font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/80 transition-colors duration-300 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-cta text-base font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Icon name="MapPinIcon" size={18} className="text-background flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-background/80">
                    15826 North 10th Street<br />Scottsdale, AZ 85022
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="PhoneIcon" size={18} className="text-background flex-shrink-0" />
                  <a
                    href="tel:+14807657128"
                    className="font-body text-sm text-background/80 transition-colors duration-300 hover:text-primary"
                  >
                    (480) 765-7128
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="EnvelopeIcon" size={18} className="text-background flex-shrink-0" />
                  <a
                    href="mailto:info@sampleassistedliving.com"
                    className="font-body text-sm text-background/80 transition-colors duration-300 hover:text-primary"
                  >
                    info@sampleassistedliving.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-cta text-base font-semibold mb-4">Hours</h3>
              <div className="space-y-2">
                <p className="font-body text-sm text-background/80">
                  <span className="font-medium">Tour Hours:</span><br />
                  Monday - Saturday<br />
                  9:00 AM - 5:00 PM
                </p>
                <p className="font-body text-sm text-background font-medium">
                  Unscheduled visits welcome
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="font-body text-sm text-background/60 text-center md:text-left">
                &copy; {currentYear} Sample Assisted Living LLC. All rights reserved. License: SAMPLE-001
              </p>
              <div className="flex items-center space-x-6">
                <Link
                  href="/resources"
                  className="font-body text-sm text-background/60 transition-colors duration-300 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/resources"
                  className="font-body text-sm text-background/60 transition-colors duration-300 hover:text-primary"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;