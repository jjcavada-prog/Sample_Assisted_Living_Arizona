import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface ImpactMetric {
  value: string;
  label: string;
  icon: string;
}

interface Partnership {
  name: string;
  logo: string;
  alt: string;
}

interface CommunityImpactSectionProps {
  className?: string;
}

const CommunityImpactSection = ({ className = '' }: CommunityImpactSectionProps) => {
  const impactMetrics: ImpactMetric[] = [
    {
      value: '500+',
      label: 'Families Served',
      icon: 'UserGroupIcon'
    },
    {
      value: '12+',
      label: 'Years of Excellence',
      icon: 'CalendarIcon'
    },
    {
      value: '98%',
      label: 'Family Satisfaction',
      icon: 'HeartIcon'
    },
    {
      value: '15+',
      label: 'Healthcare Partners',
      icon: 'BuildingOffice2Icon'
    }
  ];

  const partnerships: Partnership[] = [
    {
      name: 'Banner Health',
      logo: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=200&q=80',
      alt: 'Banner Health medical center logo with blue and white color scheme'
    },
    {
      name: 'Hospice of the Valley',
      logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&q=80',
      alt: 'Hospice of the Valley logo featuring caring hands symbol'
    },
    {
      name: 'Phoenix Medical Group',
      logo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=200&q=80',
      alt: 'Phoenix Medical Group professional healthcare logo with medical cross'
    },
    {
      name: 'Arizona Senior Care Network',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80',
      alt: 'Arizona Senior Care Network logo with state outline and care symbol'
    }
  ];

  const awards = [
    'Arizona Excellence in Senior Care Award (2016)',
    'Phoenix Community Impact Recognition (2019)',
    'Best Small Assisted Living Facility - Maricopa County (2021)',
    'Family Choice Award for Senior Care (2023)'
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Community Impact & Recognition
          </h2>
          <p className="font-body text-xl text-foreground/70 leading-relaxed">
            Our commitment to excellence extends beyond our walls, making a meaningful difference in the Phoenix community and earning recognition for our dedication to quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-soft text-center transition-all duration-300 ease-organic hover:shadow-organic hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={metric.icon} size={32} className="text-primary" />
              </div>
              <div className="font-heading text-4xl font-semibold text-primary mb-2">
                {metric.value}
              </div>
              <div className="font-body text-base text-foreground/70">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="font-heading text-3xl font-semibold text-foreground text-center mb-8">
            Healthcare Partnerships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-soft flex items-center justify-center transition-all duration-300 ease-organic hover:shadow-organic"
              >
                <AppImage
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background p-8 rounded-xl shadow-soft max-w-4xl mx-auto">
          <h3 className="font-heading text-3xl font-semibold text-foreground mb-6 flex items-center justify-center">
            <Icon name="TrophyIcon" size={32} className="mr-3 text-accent" />
            Awards & Recognition
          </h3>
          <ul className="space-y-4">
            {awards.map((award, index) => (
              <li
                key={index}
                className="flex items-start gap-4 font-body text-lg text-foreground/70"
              >
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-1" />
                <span>{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;