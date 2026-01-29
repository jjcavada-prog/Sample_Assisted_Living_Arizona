'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import ServicesSection from './ServicesSection';
import LifeGallery from './LifeGallery';
import ContactSection from './ContactSection';

interface HomepageInteractiveProps {
  className?: string;
}

const HomepageInteractive = ({ className = '' }: HomepageInteractiveProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className={`min-h-screen bg-background ${className}`}>
        <Header />
        <main className="pt-20">
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-heading font-semibold text-foreground mb-4">
                Welcome to Sample Assisted Living
              </h1>
              <p className="text-lg text-muted-foreground">
                Loading...
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Header />
      <main className="pt-20">
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <LifeGallery />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomepageInteractive;