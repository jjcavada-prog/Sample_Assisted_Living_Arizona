'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TourType {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const tourTypes: TourType[] = [
  {
    id: 'in-person',
    title: 'In-Person Tour',
    description: 'Visit our home, meet our staff, and experience the warmth firsthand',
    icon: 'HomeIcon',
    duration: '45-60 minutes'
  }
];

const availableDates = [
  { id: '2026-01-22', label: 'Wed, Jan 22' },
  { id: '2026-01-23', label: 'Thu, Jan 23' },
  { id: '2026-01-24', label: 'Fri, Jan 24' },
  { id: '2026-01-25', label: 'Sat, Jan 25' },
  { id: '2026-01-27', label: 'Mon, Jan 27' },
  { id: '2026-01-28', label: 'Tue, Jan 28' }
];

const timeSlots: TimeSlot[] = [
  { id: '09:00', time: '9:00 AM', available: true },
  { id: '10:00', time: '10:00 AM', available: true },
  { id: '11:00', time: '11:00 AM', available: false },
  { id: '13:00', time: '1:00 PM', available: true },
  { id: '14:00', time: '2:00 PM', available: true },
  { id: '15:00', time: '3:00 PM', available: true },
  { id: '16:00', time: '4:00 PM', available: true }
];

interface TourSchedulerProps {
  className?: string;
}

const TourScheduler: React.FC<TourSchedulerProps> = ({ className = '' }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedTourType, setSelectedTourType] = useState<string>('in-person');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSelectedDate('');
        setSelectedTime('');
      }, 3000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.phone && selectedDate && selectedTime;

  if (!isHydrated) {
    return (
      <section className={`py-12 md:py-16 bg-background ${className}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-soft p-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-muted rounded"></div>
                <div className="h-32 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 md:py-16 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Schedule Your Tour
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a convenient time to visit us. We'll confirm your appointment within 24 hours.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-soft p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-center">
                <div className="flex items-center space-x-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-primary">
                    <Icon
                      name="HomeIcon"
                      size={24}
                      className="text-primary-foreground"
                    />
                  </div>
                  <div>
                    <h3 className="font-cta text-lg font-semibold text-foreground mb-1">
                      In-Person Tour
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Visit our home, meet our staff, and experience the warmth firsthand
                    </p>
                    <p className="font-body text-xs text-primary font-medium mt-1">
                      Duration: 45-60 minutes
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-cta text-base font-semibold text-foreground mb-4">
                  Choose Date
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date.id}
                      type="button"
                      onClick={() => setSelectedDate(date.id)}
                      className={`py-3 px-4 rounded-lg border-2 font-body text-sm font-medium transition-all duration-300 ease-organic ${
                        selectedDate === date.id
                          ? 'border-primary bg-primary text-primary-foreground shadow-soft'
                          : 'border-border bg-background text-foreground hover:border-primary/50'
                      }`}
                    >
                      {date.label}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <label className="block font-cta text-base font-semibold text-foreground mb-4">
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => slot.available && setSelectedTime(slot.id)}
                        disabled={!slot.available}
                        className={`py-3 px-4 rounded-lg border-2 font-body text-sm font-medium transition-all duration-300 ease-organic ${
                          selectedTime === slot.id
                            ? 'border-primary bg-primary text-primary-foreground shadow-soft'
                            : slot.available
                            ? 'border-border bg-background text-foreground hover:border-primary/50'
                            : 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="(480) 765-7128"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg font-body text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your loved one's needs or any specific questions you have..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <p className="font-body text-sm text-muted-foreground">
                  * Required fields
                </p>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full sm:w-auto px-8 py-4 rounded-lg font-cta text-base font-semibold transition-all duration-300 ease-organic ${
                    isFormValid && !isSubmitting
                      ? 'bg-terracotta text-terracotta-foreground shadow-soft hover:bg-terracotta/90 hover:shadow-organic hover:scale-105'
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Icon name="ArrowPathIcon" size={20} className="mr-2 animate-spin" />
                      Scheduling...
                    </span>
                  ) : submitSuccess ? (
                    <span className="flex items-center justify-center">
                      <Icon name="CheckCircleIcon" size={20} className="mr-2" />
                      Tour Scheduled!
                    </span>
                  ) : (
                    'Schedule Tour'
                  )}
                </button>
              </div>

              {submitSuccess && (
                <div className="bg-success/10 border-2 border-success rounded-lg p-4">
                  <p className="font-body text-sm text-success text-center">
                    Thank you! We've received your tour request and will send you a confirmation email within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourScheduler;