import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 ${className}`}>
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl text-foreground leading-tight">
              Comprehensive Care Services Designed Around You
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground leading-relaxed">
              At Sample Assisted Living, we provide personalized assisted living services that honor dignity, independence, and joy. With up to 10 residents, every care plan is tailored to individual needs and preferences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#care-assessment"
                className="inline-flex items-center px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
              >
                Take Care Assessment
              </a>
              <a
                href="tel:+14807657128"
                className="inline-flex items-center px-8 py-4 bg-card text-foreground font-cta font-semibold text-base rounded-lg border-2 border-primary shadow-soft transition-all duration-300 ease-organic hover:bg-primary hover:text-primary-foreground hover:shadow-organic"
              >
                Call to Discuss Care
              </a>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-organic">
            <AppImage
              src="/services-care-vaccine.png"
              alt="Compassionate caregiver assisting elderly woman with vaccine and checkup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;