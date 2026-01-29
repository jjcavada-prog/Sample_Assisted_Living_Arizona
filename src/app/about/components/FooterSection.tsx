'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterSectionProps {
  className?: string;
}

const FooterSection = ({ className = '' }: FooterSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const currentYear = isHydrated ? new Date().getFullYear() : 2026;

  const quickLinks = [
    { label: 'Home', href: '/homepage' },
    { label: 'Services', href: '/services' },
    { label: 'Life Here', href: '/life-here' },
    { label: 'Testimonials', href: '/testimonials' }
  ];

  const resources = [
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' }
  ];

  return (
    <footer className={`bg-deepBlueGray text-white py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Sample Assisted Living</h3>
            <p className="font-body text-base text-white/80 leading-relaxed mb-4">
              Where grace meets care. Providing intimate, personalized assisted living in the heart of Phoenix.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ease-organic hover:bg-white/20"
                aria-label="Facebook"
              >
                <Icon name="ShareIcon" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ease-organic hover:bg-white/20"
                aria-label="Instagram"
              >
                <Icon name="CameraIcon" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-body text-base text-white/80 transition-colors duration-300 ease-organic hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="font-body text-base text-white/80 transition-colors duration-300 ease-organic hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 font-body text-base text-white/80">
              <li className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={20} className="flex-shrink-0 mt-1" />
                <span>1234 Main Street, Scottsdale, AZ 85251</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={20} className="flex-shrink-0" />
                <a href="tel:+14807657128" className="transition-colors duration-300 ease-organic hover:text-white">
                  (480) 765-7128
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={20} className="flex-shrink-0" />
                <a href="mailto:godsgraceaz.0823@gmail.com" className="transition-colors duration-300 ease-organic hover:text-white">
                  godsgraceaz.0823@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-body text-base text-white/70">
            &copy; {currentYear} Sample Assisted Living LLC. All rights reserved. License: SAMPLE-001 - Licensed by Arizona Department of Health Services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;