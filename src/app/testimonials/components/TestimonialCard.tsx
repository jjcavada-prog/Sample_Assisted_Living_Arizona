import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  name: string;
  relationship: string;
  image: string;
  alt: string;
  testimonial: string;
  rating: number;
  date: string;
  careType?: string;
}

export default function TestimonialCard({
  name,
  relationship,
  image,
  alt,
  testimonial,
  rating,
  date,
  careType
}: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-soft p-6 transition-all duration-300 ease-organic hover:shadow-organic">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{relationship}</p>
          {careType && (
            <span className="inline-block mt-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {careType}
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            variant={index < rating ? 'solid' : 'outline'}
            size={18}
            className={index < rating ? 'text-accent' : 'text-muted'}
          />
        ))}
      </div>
      
      <p className="text-foreground font-body leading-relaxed mb-4">{testimonial}</p>
      
      <p className="text-sm text-muted-foreground">{date}</p>
    </div>
  );
}