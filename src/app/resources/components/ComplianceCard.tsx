import Icon from '@/components/ui/AppIcon';

interface ComplianceCardProps {
  title: string;
  description: string;
  certifications: string[];
  icon: string;
}

const ComplianceCard = ({ title, description, certifications, icon }: ComplianceCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-success" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="font-body text-base text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center">
            <Icon name="ShieldCheckIcon" size={20} className="text-success mr-2 flex-shrink-0" />
            <span className="font-body text-base text-foreground">{cert}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplianceCard;