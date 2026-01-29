import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: string;
  downloadUrl?: string;
  linkUrl?: string;
  type: 'download' | 'link' | 'tool';
}

const ResourceCard = ({ title, description, icon, downloadUrl, linkUrl, type }: ResourceCardProps) => {
  const content = (
    <div className="bg-card rounded-lg p-6 shadow-soft transition-all duration-300 ease-organic hover:shadow-organic hover:scale-105 border border-border h-full flex flex-col">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="font-body text-base text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-auto pt-4">
        <div className="flex items-center text-primary font-body font-medium text-base">
          {type === 'download' && (
            <>
              <Icon name="ArrowDownTrayIcon" size={20} className="mr-2" />
              Download PDF
            </>
          )}
          {type === 'link' && (
            <>
              <Icon name="ArrowRightIcon" size={20} className="mr-2" />
              Learn More
            </>
          )}
          {type === 'tool' && (
            <>
              <Icon name="CalculatorIcon" size={20} className="mr-2" />
              Use Tool
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (downloadUrl) {
    return (
      <a href={downloadUrl} download className="block h-full">
        {content}
      </a>
    );
  }

  if (linkUrl) {
    return (
      <Link href={linkUrl} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default ResourceCard;