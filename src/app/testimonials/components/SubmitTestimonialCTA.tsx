import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function SubmitTestimonialCTA() {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 md:p-12 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
        <Icon name="PencilSquareIcon" size={40} className="text-white" />
      </div>
      
      <h2 className="font-heading text-3xl font-semibold text-white mb-4">
        Share Your Experience
      </h2>
      
      <p className="text-white/90 font-body text-lg max-w-2xl mx-auto mb-8">
        Your story can help other families make the right decision for their loved ones. We'd love to hear about your experience at Sample Assisted Living.
      </p>
      
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-cta font-semibold text-lg rounded-lg shadow-organic transition-all duration-300 ease-organic hover:bg-white/90 hover:scale-105"
      >
        Submit Your Testimonial
        <Icon name="ArrowRightIcon" size={20} />
      </Link>
    </div>
  );
}