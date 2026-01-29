import Icon from '@/components/ui/AppIcon';

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  className?: string;
}

const PhilosophySection = ({ className = '' }: PhilosophySectionProps) => {
  const philosophyItems: PhilosophyItem[] = [
    {
      icon: 'HeartIcon',
      title: 'Family-Centered Care',
      description: 'Every resident is treated as family, with personalized attention that honors their unique story, preferences, and dignity.'
    },
    {
      icon: 'HomeIcon',
      title: 'Home, Not Institution',
      description: 'We create a warm, residential environment where comfort and familiarity replace the clinical feel of traditional facilities.'
    },
    {
      icon: 'UserGroupIcon',
      title: 'Intimate Community',
      description: 'With up to 10 residents, meaningful relationships flourish naturally, creating genuine connections that enrich daily life.'
    },
    {
      icon: 'SparklesIcon',
      title: 'Dignity & Joy',
      description: 'We celebrate each resident\'s individuality, fostering an environment where aging is embraced with grace and happiness.'
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Professional Excellence',
      description: 'Our licensed, experienced staff combines medical expertise with compassionate care, ensuring safety without sacrificing warmth.'
    },
    {
      icon: 'SunIcon',
      title: 'Quality of Life',
      description: 'Every day is designed to bring purpose, engagement, and joy through activities, social connection, and personalized experiences.'
    }
  ];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Our Care Philosophy
          </h2>
          <p className="font-body text-xl text-foreground/70 leading-relaxed">
            At Sample Assisted Living, our philosophy is simple yet profound: treat every resident as we would our own family, with unwavering respect, genuine compassion, and personalized attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-soft transition-all duration-300 ease-organic hover:shadow-organic hover:scale-105"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name={item.icon} size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;