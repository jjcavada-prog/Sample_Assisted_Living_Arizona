'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonItem {
  feature: string;
  casaTheresita: string | boolean;
  typical: string | boolean;
}

interface ComparisonMatrixProps {
  className?: string;
}

const ComparisonMatrix = ({ className = '' }: ComparisonMatrixProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useState(() => {
    setIsHydrated(true);
  });

  const comparisonData: ComparisonItem[] = [
    {
      feature: 'Number of Residents',
      casaTheresita: '10 residents maximum',
      typical: '20-100+ residents',
    },
    {
      feature: 'Staff-to-Resident Ratio',
      casaTheresita: '1:3 during day, 1:6 at night',
      typical: '1:8 or higher',
    },
    {
      feature: 'Personalized Care Plans',
      casaTheresita: true,
      typical: 'Limited customization',
    },
    {
      feature: 'Home-Cooked Meals',
      casaTheresita: true,
      typical: 'Institutional cafeteria',
    },
    {
      feature: 'Family-Style Dining',
      casaTheresita: true,
      typical: false,
    },
    {
      feature: 'Private Rooms Available',
      casaTheresita: true,
      typical: 'Often shared rooms',
    },
    {
      feature: 'Personal Décor Encouraged',
      casaTheresita: true,
      typical: 'Limited personalization',
    },
    {
      feature: 'Flexible Visiting Hours',
      casaTheresita: 'Anytime, unscheduled welcome',
      typical: 'Restricted hours',
    },
    {
      feature: 'Individual Attention',
      casaTheresita: 'Daily one-on-one time',
      typical: 'Limited individual focus',
    },
    {
      feature: 'Community Atmosphere',
      casaTheresita: 'Intimate family setting',
      typical: 'Institutional environment',
    },
  ];

  const renderValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
      ) : (
        <Icon name="XCircleIcon" size={24} className="text-error mx-auto" />
      );
    }
    return <span className="font-body text-sm text-foreground">{value}</span>;
  };

  if (!isHydrated) {
    return (
      <section className={`py-20 lg:py-28 bg-[#2c3640] relative overflow-hidden ${className}`}>
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl text-white mb-4">
              Sample Assisted Living vs. Typical Facilities
            </h2>
            <p className="font-body text-lg text-white/70">
              See how our intimate, family-centered approach compares to traditional assisted living facilities.
            </p>
          </div>
          <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur rounded-xl shadow-2xl p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-12 bg-muted rounded"></div>
              <div className="h-12 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 lg:py-28 bg-[#2c3640] relative overflow-hidden ${className}`}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-terracotta/20 text-terracotta rounded-full text-sm font-body font-medium mb-4 tracking-wide">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl lg:text-4xl text-white mb-4">
            Sample Assisted Living vs. Typical Facilities
          </h2>
          <p className="font-body text-lg text-white/70">
            See how our intimate, family-centered approach compares to traditional assisted living facilities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur rounded-xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#2c3640] to-[#3d4a56]">
                  <th className="px-6 py-5 text-left font-heading text-lg text-white">
                    Feature
                  </th>
                  <th className="px-6 py-5 text-center font-heading text-lg text-terracotta">
                    Sample Assisted Living
                  </th>
                  <th className="px-6 py-5 text-center font-heading text-lg text-white/60">
                    Typical Facility
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-t border-border/50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-muted/30'
                    } hover:bg-terracotta/5`}
                  >
                    <td className="px-6 py-4 font-body font-medium text-foreground">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-center">{renderValue(item.casaTheresita)}</td>
                    <td className="px-6 py-4 text-center">{renderValue(item.typical)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-terracotta text-white font-cta font-semibold text-base rounded-lg shadow-lg shadow-terracotta/30 transition-all duration-300 ease-organic hover:bg-terracotta/90 hover:shadow-xl hover:shadow-terracotta/40 hover:scale-105"
          >
            Schedule a Tour to Experience the Difference
          </a>
        </div>
      </div>
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-terracotta to-transparent" />
    </section>
  );
};

export default ComparisonMatrix;