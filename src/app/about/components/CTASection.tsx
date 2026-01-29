import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-primary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Experience the Sample Assisted Living Difference
          </h2>
          <p className="font-body text-xl text-primary-foreground/90 leading-relaxed mb-10">
            See firsthand why families trust us with their loved ones. Schedule a personal tour and discover what makes our community truly special.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-lg rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105 flex items-center"
            >
              <Icon name="CalendarIcon" size={24} className="mr-2" />
              Schedule Your Tour
            </Link>
            
            <a
              href="tel:+14807657128"
              className="px-8 py-4 bg-primary-foreground text-primary font-cta font-semibold text-lg rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary-foreground/90 hover:shadow-organic hover:scale-105 flex items-center"
            >
              <Icon name="PhoneIcon" size={24} className="mr-2" />
              Call (480) 765-7128
            </a>
          </div>
          
          <p className="font-body text-base text-primary-foreground/80 mt-8">
            Open for tours daily • Walk-ins welcome • No appointment necessary
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;