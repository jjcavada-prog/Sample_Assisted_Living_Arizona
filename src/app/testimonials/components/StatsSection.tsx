import Icon from '@/components/ui/AppIcon';

interface StatItemProps {
  icon: string;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
        <Icon name={icon as any} size={32} className="text-primary" />
      </div>
      <div className="font-heading text-3xl font-semibold text-foreground mb-1">{value}</div>
      <div className="text-muted-foreground font-body">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { icon: 'StarIcon', value: '4.9/5', label: 'Average Rating' },
    { icon: 'UserGroupIcon', value: '150+', label: 'Happy Families' },
    { icon: 'HeartIcon', value: '98%', label: 'Would Recommend' },
    { icon: 'ChatBubbleLeftRightIcon', value: '200+', label: 'Testimonials' }
  ];

  return (
    <div className="bg-muted rounded-lg p-8 md:p-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}