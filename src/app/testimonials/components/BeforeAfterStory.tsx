import AppImage from '@/components/ui/AppImage';

interface BeforeAfterStoryProps {
  name: string;
  story: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  improvements: string[];
}

export default function BeforeAfterStory({
  name,
  story,
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
  improvements
}: BeforeAfterStoryProps) {
  return (
    <div className="bg-card rounded-lg shadow-soft overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative aspect-square bg-muted">
          <AppImage
            src={beforeImage}
            alt={beforeAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-muted-foreground/80 text-white text-sm font-semibold rounded">
            Before
          </div>
        </div>
        
        <div className="relative aspect-square bg-muted">
          <AppImage
            src={afterImage}
            alt={afterAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-success/80 text-white text-sm font-semibold rounded">
            After
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{name}&apos;s Journey</h3>
        <p className="text-foreground font-body leading-relaxed mb-4">{story}</p>
        
        <div className="space-y-2">
          <h4 className="font-body font-semibold text-foreground">Notable Improvements:</h4>
          <ul className="space-y-2">
            {improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-2 text-foreground">
                <span className="text-success mt-1">✓</span>
                <span>{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}