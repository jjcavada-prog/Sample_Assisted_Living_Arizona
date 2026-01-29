import AppImage from '@/components/ui/AppImage';

interface OurStorySectionProps {
  className?: string;
}

const OurStorySection = ({ className = '' }: OurStorySectionProps) => {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground">
              A Home Born from Love
            </h2>
            <div className="space-y-4 font-body text-lg text-foreground/80 leading-relaxed">
              <p>
                Sample Assisted Living began with a simple yet profound belief: that aging should be celebrated, not compromised. Our facility emerged from a deeply personal experience—caring for beloved family members who deserved more than what traditional care facilities could offer.
              </p>
              <p>
                What started as a vision to create a true home environment has blossomed into a trusted boutique assisted living community in Scottsdale. We&apos;ve intentionally remained small, ensuring that every individual receives the personalized attention, dignity, and genuine connection they deserve.
              </p>
              <p>
                Today, Sample Assisted Living stands as a testament to what senior care can be when it&apos;s rooted in faith, family values, professional excellence, and unwavering commitment to quality of life. We&apos;re not just a care facility—we&apos;re a chosen family where every day brings joy, purpose, and the comfort of truly being home.
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-organic">
            <AppImage
              src="/welcome-care-connection.png"
              alt="Caregiver reading a book to an elderly resident in a cozy library nook"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;