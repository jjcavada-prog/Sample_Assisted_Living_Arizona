'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCarouselProps {
  className?: string;
}

interface Testimonial {
  id: number;
  name: string;
  relationship: string;
  content: string;
  image: string;
  alt: string;
  highlight: string;
}

const TestimonialCarousel = ({ className = '' }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      relationship: "Daughter of resident Mary",
      content: "Sample Assisted Living gave us peace of mind we never thought possible. Mom is thriving here—she's made genuine friendships and the staff treats her like their own family. The personalized care and attention to detail is extraordinary.",
      image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Professional woman smiling confidently",
      highlight: "Mom is thriving here"
    },
    {
      id: 2,
      name: "Robert Chen",
      relationship: "Son of resident James",
      content: "The difference between Sample Assisted Living and other facilities is night and day. Dad actually looks forward to meals and activities. The staff knows his preferences, his stories, and treats him with such dignity and respect.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Man in glasses smiling warmly",
      highlight: "Night and day difference"
    },
    {
      id: 3,
      name: "Linda Martinez",
      relationship: "Daughter of resident Rosa",
      content: "Finding Sample Assisted Living was a blessing. Mom was hesitant about assisted living, but the home-like atmosphere and genuine care from the staff made all the difference. She's happier now than she's been in years.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Woman with warm smile",
      highlight: "Happier than ever"
    }
  ];

  const nextTestimonial = useCallback(() => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [isHydrated, testimonials.length]);

  const prevTestimonial = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    if (!isHydrated) return;
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [isHydrated, nextTestimonial]);

  if (!isHydrated) {
    return (
      <section className={`py-24 lg:py-32 bg-card ${className}`}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="h-96 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className={`relative py-24 lg:py-32 bg-card overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-sm font-medium tracking-[0.15em] uppercase">
              Testimonials
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
            Families trust us with
            <br />
            <em className="italic font-normal">their loved ones</em>
          </h2>
        </motion.div>

        {/* Testimonial Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Large quote mark */}
              <div className="absolute -top-8 left-0 lg:left-12 text-[12rem] leading-none text-accent/10 font-serif pointer-events-none select-none">
                "
              </div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Quote Content */}
                <div className="lg:col-span-8 relative z-10">
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
                    {currentTestimonial.content}
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="lg:hidden">
                      <AppImage
                        src={currentTestimonial.image}
                        alt={currentTestimonial.alt}
                        className="w-14 h-14 object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <div className="h-px w-6 bg-accent" />
                        <cite className="not-italic font-medium text-foreground text-lg">
                          {currentTestimonial.name}
                        </cite>
                      </div>
                      <p className="text-muted-foreground pl-9">
                        {currentTestimonial.relationship}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Author Image - Desktop */}
                <div className="lg:col-span-4 hidden lg:block">
                  <div className="relative">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 border border-accent/20 rounded-2xl" />
                    <div className="absolute -inset-8 border border-accent/10 rounded-3xl" />

                    <AppImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.alt}
                      className="w-full aspect-[3/4] object-cover rounded-xl"
                    />

                    {/* Highlight badge */}
                    <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-lg shadow-editorial">
                      <span className="text-sm font-medium">{currentTestimonial.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 lg:mt-16 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRightIcon" size={20} />
              </button>
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-4">
                {String(currentIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentIndex === index
                      ? 'w-8 bg-accent'
                      : 'w-4 bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Link
              href="/testimonials"
              className="group hidden sm:inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors duration-300"
            >
              <span className="border-b border-current pb-0.5">Read All Stories</span>
              <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
