import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative h-[500px] lg:h-[600px] overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <AppImage
          src="/heropage1.jpeg"
          alt="Sample Assisted Living - Warm and inviting assisted living home in Scottsdale, Arizona"
          className="w-full h-full object-cover object-center"
          priority
        />
        {/* Darker overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/30"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              About Us
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 leading-[0.95] tracking-tight">
            Our Story: Where Family Meets Care
          </h1>
          <p className="font-body text-lg lg:text-xl font-light leading-relaxed text-white/90 max-w-xl">
            Sample Assisted Living has been redefining assisted living in Scottsdale—transforming the concept of senior care from institutional to intimate, from routine to remarkable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;