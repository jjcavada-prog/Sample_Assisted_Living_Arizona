import Icon from '@/components/ui/AppIcon';

interface VisitingGuidelineCardProps {
  title: string;
  guidelines: string[];
  icon: string;
}

const VisitingGuidelineCard = ({ title, guidelines, icon }: VisitingGuidelineCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={20} className="text-secondary" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {guidelines.map((guideline, index) => (
          <li key={index} className="flex items-start">
            <Icon name="ArrowRightIcon" size={20} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
            <span className="font-body text-base text-foreground">{guideline}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitingGuidelineCard;