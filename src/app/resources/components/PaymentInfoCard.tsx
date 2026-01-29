import Icon from '@/components/ui/AppIcon';

interface PaymentInfoCardProps {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const PaymentInfoCard = ({ title, description, icon, details }: PaymentInfoCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="font-body text-base text-muted-foreground">{description}</p>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <Icon name="CheckCircleIcon" size={20} className="text-success mr-2 flex-shrink-0 mt-0.5" />
            <span className="font-body text-base text-foreground">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentInfoCard;