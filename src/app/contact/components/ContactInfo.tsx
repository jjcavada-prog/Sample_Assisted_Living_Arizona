import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  value: string;
  link: string;
  description: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'phone',
    icon: 'PhoneIcon',
    title: 'Call Us',
    value: '(480) 765-7128',
    link: 'tel:+14807657128',
    description: 'Available 24/7 for families and emergencies'
  },
  {
    id: 'email',
    icon: 'EnvelopeIcon',
    title: 'Email Us',
    value: 'info@sampleassistedliving.com',
    link: 'mailto:info@sampleassistedliving.com',
    description: 'Send us an email anytime'
  },
  {
    id: 'location',
    icon: 'MapPinIcon',
    title: 'Visit Us',
    value: '1234 Main Street, Scottsdale, AZ 85251',
    link: 'https://maps.google.com/?q=123+Sample+Street+Scottsdale+AZ+85000',
    description: 'Open for tours Monday - Saturday, 9 AM - 5 PM'
  },
  {
    id: 'text',
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Text Us',
    value: '(480) 765-7128',
    link: 'sms:+14807657128',
    description: 'Quick questions? Send us a text message'
  }
];

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className = '' }) => {
  return (
    <section className={`py-12 md:py-16 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with us. We're here to answer your questions and help you find the perfect home for your loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method) => (
              <a
                key={method.id}
                href={method.link}
                className="group bg-background border-2 border-border rounded-xl p-6 transition-all duration-300 ease-organic hover:border-primary hover:shadow-organic hover:scale-[1.02]"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
                    <Icon 
                      name={method.icon as any} 
                      size={24} 
                      className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-cta text-lg font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="font-body text-base text-primary font-medium mb-2">
                      {method.value}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;