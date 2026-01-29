'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterBar({ selectedFilter, onFilterChange }: FilterBarProps) {
  const filters = [
    { id: 'all', label: 'All Stories', icon: 'Squares2X2Icon' },
    { id: 'family', label: 'Family Members', icon: 'UserGroupIcon' },
    { id: 'resident', label: 'Residents', icon: 'HeartIcon' },
    { id: 'memory-care', label: 'Memory Care', icon: 'SparklesIcon' },
    { id: 'assisted-living', label: 'Assisted Living', icon: 'HomeIcon' }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-body font-medium text-sm transition-all duration-300 ease-organic ${
            selectedFilter === filter.id
              ? 'bg-primary text-primary-foreground shadow-soft'
              : 'bg-card text-foreground hover:bg-muted'
          }`}
        >
          <Icon name={filter.icon as any} size={18} />
          {filter.label}
        </button>
      ))}
    </div>
  );
}