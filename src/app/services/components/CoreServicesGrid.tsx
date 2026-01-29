import Icon from '@/components/ui/AppIcon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface CoreServicesGridProps {
  className?: string;
}

const CoreServicesGrid = ({ className = '' }: CoreServicesGridProps) => {
  const coreServices: Service[] = [
    {
      id: 1,
      icon: 'HeartIcon',
      title: 'Personal Care Assistance',
      description: 'Compassionate support with daily living activities while maintaining dignity and independence.',
      features: [
        'Bathing and grooming assistance',
        'Dressing and mobility support',
        'Medication management',
        'Incontinence care',
      ],
    },
    {
      id: 2,
      icon: 'HomeIcon',
      title: 'Comfortable Living Spaces',
      description: 'Private and semi-private rooms designed for comfort, safety, and personalization.',
      features: [
        'Furnished private rooms',
        'Personal décor encouraged',
        'Safety features installed',
        'Housekeeping and laundry',
      ],
    },
    {
      id: 3,
      icon: 'CakeIcon',
      title: 'Nutritious Home-Cooked Meals',
      description: 'Three daily meals plus snacks, prepared fresh with dietary accommodations.',
      features: [
        'Family-style dining',
        'Special diet accommodations',
        'Fresh, locally-sourced ingredients',
        'Hydration monitoring',
      ],
    },
    {
      id: 4,
      icon: 'UserGroupIcon',
      title: 'Social & Recreational Activities',
      description: 'Engaging programs that promote mental stimulation, physical wellness, and social connection.',
      features: [
        'Daily group activities',
        'Exercise and wellness programs',
        'Arts and crafts',
        'Community outings',
      ],
    },
    {
      id: 5,
      icon: 'ShieldCheckIcon',
      title: '24/7 Supervision & Safety',
      description: 'Round-the-clock care staff ensuring safety, security, and immediate response to needs.',
      features: [
        'Trained staff on-site 24/7',
        'Emergency response systems',
        'Regular wellness checks',
        'Secure environment',
      ],
    },
    {
      id: 6,
      icon: 'HeartIcon',
      title: 'Healthcare Coordination',
      description: 'Seamless coordination with healthcare providers and family members for comprehensive care.',
      features: [
        'Doctor appointment coordination',
        'Medication administration',
        'Health monitoring',
        'Family communication',
      ],
    },
  ];

  return (
    <section className={`py-20 lg:py-28 bg-muted/40 relative overflow-hidden ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-body font-medium mb-4 tracking-wide">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            Our Core Care Services
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Every service is delivered with the warmth of family and the professionalism of experienced healthcare providers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/50 transition-all duration-300 ease-organic hover:shadow-xl hover:scale-105 hover:bg-white"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={service.icon as any} size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-success mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="font-body text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesGrid;