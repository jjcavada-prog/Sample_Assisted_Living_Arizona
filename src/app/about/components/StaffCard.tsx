'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StaffMember {
  name: string;
  role: string;
  credentials: string;
  image: string;
  alt: string;
  bio: string;
  philosophy: string;
}

interface StaffCardProps {
  staff: StaffMember;
}

const StaffCard = ({ staff }: StaffCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const handleToggle = () => {
    if (isHydrated) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="bg-background rounded-xl shadow-soft overflow-hidden transition-all duration-300 ease-organic hover:shadow-organic">
      <div className="relative h-80 overflow-hidden">
        <AppImage
          src={staff.image}
          alt={staff.alt}
          className="w-full h-full object-cover transition-transform duration-300 ease-organic hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
          {staff.name}
        </h3>
        <p className="font-body text-lg text-primary font-medium mb-1">
          {staff.role}
        </p>
        <p className="font-body text-sm text-foreground/60 mb-4">
          {staff.credentials}
        </p>
        
        <p className="font-body text-base text-foreground/70 leading-relaxed mb-4">
          {staff.bio}
        </p>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-2 flex items-center">
              <Icon name="SparklesIcon" size={20} className="mr-2 text-accent" />
              Care Philosophy
            </h4>
            <p className="font-body text-base text-foreground/70 leading-relaxed italic">
              &quot;{staff.philosophy}&quot;
            </p>
          </div>
        )}
        
        <button
          onClick={handleToggle}
          className="mt-4 flex items-center text-primary font-body font-medium text-base transition-colors duration-300 ease-organic hover:text-primary/80"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <Icon
            name="ChevronDownIcon"
            size={20}
            className={`ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
};

export default StaffCard;