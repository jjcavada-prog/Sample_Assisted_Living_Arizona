import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative h-[500px] lg:h-[600px] overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <AppImage
          src="/life-here-hero.png"
          alt="Bright communal living room with comfortable seating, warm lighting, and garden views"
          className="w-full h-full object-cover brightness-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl bg-black/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
          <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-6 leading-tight drop-shadow-md">
            Life at Sample Assisted Living
          </h1>
          <p className="font-body text-lg lg:text-xl text-white/90 mb-8 leading-relaxed drop-shadow">
            Experience the warmth, joy, and dignity of daily life in our family-sized community. Every day is filled with meaningful connections, engaging activities, and the comfort of home.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
            >
              Schedule Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;