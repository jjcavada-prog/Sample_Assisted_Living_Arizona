'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ease-organic hover:bg-muted"
      >
        <h3 className="font-heading text-lg font-semibold text-foreground pr-4">{question}</h3>
        <Icon
          name="ChevronDownIcon"
          size={24}
          className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2">
          <p className="font-body text-base text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;