'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  if (!isHydrated) {
    return (
      <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="EnvelopeIcon" size={32} className="text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
            Stay Connected with Sample Assisted Living
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-6">
            Subscribe to receive weekly family tips, facility updates, and valuable resources for senior care decisions.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="EnvelopeIcon" size={32} className="text-primary" />
        </div>
        <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
          Stay Connected with Sample Assisted Living
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-6">
          Subscribe to receive weekly family tips, facility updates, and valuable resources for senior care decisions.
        </p>
        
        {isSubmitted ? (
          <div className="bg-success/10 border border-success rounded-lg p-4 flex items-center justify-center space-x-2">
            <Icon name="CheckCircleIcon" size={24} className="text-success" />
            <p className="font-body text-base text-success font-medium">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-base focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-primary/90 hover:shadow-organic hover:scale-105 flex items-center justify-center"
            >
              Subscribe
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;