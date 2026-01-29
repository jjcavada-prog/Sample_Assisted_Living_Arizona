'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CostCalculatorProps {
  className?: string;
}

const CostCalculator = ({ className = '' }: CostCalculatorProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [roomType, setRoomType] = useState<'private' | 'semi-private'>('private');
  const [careLevel, setCareLevel] = useState<'basic' | 'moderate' | 'advanced'>('basic');
  const [showBreakdown, setShowBreakdown] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const basePrices = {
    private: 5500,
    'semi-private': 4800,
  };

  const careLevelCosts = {
    basic: 0,
    moderate: 800,
    advanced: 1500,
  };

  const calculateTotal = () => {
    return basePrices[roomType] + careLevelCosts[careLevel];
  };

  const handleCalculate = () => {
    if (!isHydrated) return;
    setShowBreakdown(true);
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-28 bg-gradient-to-br from-terracotta/10 via-terracotta/5 to-background relative overflow-hidden ${className}`}>
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
                Cost Transparency Calculator
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Get a clear estimate of monthly costs based on your specific needs.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-terracotta/10 p-8">
              <div className="animate-pulse space-y-6">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-16 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-28 bg-gradient-to-br from-terracotta/10 via-terracotta/5 to-background relative overflow-hidden ${className}`}>
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-terracotta/15 text-terracotta rounded-full text-sm font-body font-medium mb-4 tracking-wide">
              Transparent Pricing
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
              Cost Transparency Calculator
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Get a clear estimate of monthly costs based on your specific needs. No hidden fees.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-terracotta/10 p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block font-body font-medium text-foreground mb-4">
                  Room Type
                </label>
                <div className="space-y-3">
                  <button
                    onClick={() => setRoomType('private')}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                      roomType === 'private' ?'border-primary bg-primary/10 shadow-soft' :'border-border bg-background hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-body font-semibold text-foreground">Private Room</div>
                        <div className="font-body text-sm text-muted-foreground">
                          Your own personal space
                        </div>
                      </div>
                      <div className="font-body font-bold text-primary">
                        ${basePrices.private.toLocaleString()}/mo
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => setRoomType('semi-private')}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                      roomType === 'semi-private' ?'border-primary bg-primary/10 shadow-soft' :'border-border bg-background hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-body font-semibold text-foreground">
                          Semi-Private Room
                        </div>
                        <div className="font-body text-sm text-muted-foreground">
                          Shared with one roommate
                        </div>
                      </div>
                      <div className="font-body font-bold text-primary">
                        ${basePrices['semi-private'].toLocaleString()}/mo
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-foreground mb-4">
                  Care Level Needed
                </label>
                <div className="space-y-3">
                  <button
                    onClick={() => setCareLevel('basic')}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                      careLevel === 'basic' ?'border-primary bg-primary/10 shadow-soft' :'border-border bg-background hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-body font-semibold text-foreground">Basic Care</div>
                        <div className="font-body text-sm text-muted-foreground">
                          Minimal assistance
                        </div>
                      </div>
                      <div className="font-body font-bold text-primary">Included</div>
                    </div>
                  </button>
                  <button
                    onClick={() => setCareLevel('moderate')}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                      careLevel === 'moderate' ?'border-primary bg-primary/10 shadow-soft' :'border-border bg-background hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-body font-semibold text-foreground">
                          Moderate Care
                        </div>
                        <div className="font-body text-sm text-muted-foreground">
                          Regular assistance
                        </div>
                      </div>
                      <div className="font-body font-bold text-primary">
                        +${careLevelCosts.moderate.toLocaleString()}/mo
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => setCareLevel('advanced')}
                    className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all duration-300 ${
                      careLevel === 'advanced' ?'border-primary bg-primary/10 shadow-soft' :'border-border bg-background hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-body font-semibold text-foreground">
                          Advanced Care
                        </div>
                        <div className="font-body text-sm text-muted-foreground">
                          Extensive support
                        </div>
                      </div>
                      <div className="font-body font-bold text-primary">
                        +${careLevelCosts.advanced.toLocaleString()}/mo
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="w-full px-8 py-4 bg-terracotta text-terracotta-foreground font-cta font-semibold text-base rounded-lg shadow-soft transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-organic hover:scale-105"
            >
              Calculate Monthly Cost
            </button>

            {showBreakdown && (
              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-2 border-primary">
                <h3 className="font-heading text-xl text-foreground mb-4">
                  Your Estimated Monthly Cost
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-foreground">
                      {roomType === 'private' ? 'Private Room' : 'Semi-Private Room'}
                    </span>
                    <span className="font-body font-semibold text-foreground">
                      ${basePrices[roomType].toLocaleString()}
                    </span>
                  </div>
                  {careLevelCosts[careLevel] > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="font-body text-foreground">
                        {careLevel.charAt(0).toUpperCase() + careLevel.slice(1)} Care Level
                      </span>
                      <span className="font-body font-semibold text-foreground">
                        ${careLevelCosts[careLevel].toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="border-t border-border pt-3 flex justify-between items-center">
                    <span className="font-heading text-lg text-foreground">Total Monthly Cost</span>
                    <span className="font-heading text-2xl text-primary">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <h4 className="font-body font-semibold text-foreground mb-2">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-success mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-sm text-foreground">
                        Three home-cooked meals daily plus snacks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-success mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-sm text-foreground">
                        24/7 trained staff supervision
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-success mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-sm text-foreground">
                        Housekeeping and laundry services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-success mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-sm text-foreground">
                        Daily activities and social programs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Icon
                        name="CheckCircleIcon"
                        size={16}
                        className="text-success mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="font-body text-sm text-foreground">
                        Medication management and healthcare coordination
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 text-center">
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Medicaid accepted. Financial assistance available.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-card text-foreground font-cta font-semibold text-base rounded-lg border-2 border-primary shadow-soft transition-all duration-300 ease-organic hover:bg-primary hover:text-primary-foreground"
                  >
                    Discuss Payment Options
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;