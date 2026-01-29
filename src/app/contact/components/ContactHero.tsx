import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Visit Sample Assisted Living
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the warmth of family-centered care firsthand. Schedule a personal tour and discover why families choose Sample Assisted Living for their loved ones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;