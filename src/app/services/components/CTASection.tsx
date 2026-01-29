import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 lg:py-28 bg-gradient-to-br from-[#2c3640] via-[#3a4550] to-[#2c3640] relative overflow-hidden ${className}`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-terracotta/20 text-terracotta rounded-full text-sm font-body font-medium mb-6 tracking-wide">
            Take the Next Step
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-white mb-6">
            Ready to Experience the Sample Assisted Living Difference?
          </h2>
          <p className="font-body text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Schedule a personal tour to see our home-like environment, meet our caring staff, and discover why families choose Sample Assisted Living for their loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-white font-cta font-semibold text-base rounded-lg shadow-lg shadow-terracotta/30 transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-xl hover:shadow-terracotta/40 hover:scale-105"
            >
              <Icon name="CalendarIcon" size={20} className="mr-2" />
              Schedule Your Tour
            </a>
            <a
              href="tel:+14807657128"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-cta font-semibold text-base rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-300 ease-organic hover:bg-white/20 hover:border-white/50"
            >
              <Icon name="PhoneIcon" size={20} className="mr-2" />
              Call (480) 765-7128
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Icon name="ClockIcon" size={32} className="text-terracotta mx-auto mb-3" />
              <h3 className="font-heading text-lg text-white mb-2">Flexible Tours</h3>
              <p className="font-body text-sm text-white/60">
                Visit anytime, unscheduled visits welcome
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Icon name="UserGroupIcon" size={32} className="text-terracotta mx-auto mb-3" />
              <h3 className="font-heading text-lg text-white mb-2">Meet Our Team</h3>
              <p className="font-body text-sm text-white/60">
                Talk with staff and current residents
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Icon name="HomeIcon" size={32} className="text-terracotta mx-auto mb-3" />
              <h3 className="font-heading text-lg text-white mb-2">See Our Home</h3>
              <p className="font-body text-sm text-white/60">
                Experience our warm, family atmosphere
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;