'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface WelcomeSectionProps {
  className?: string;
}

const WelcomeSection = ({ className = '' }: WelcomeSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      number: '01',
      title: 'Intimate Setting',
      description: 'Just ten residents means everyone receives the personal attention they deserve.',
    },
    {
      number: '02',
      title: 'Genuine Connection',
      description: 'Meaningful relationships between residents, families, and caregivers.',
    },
    {
      number: '03',
      title: 'Dignified Care',
      description: 'Professional support that honors independence and celebrates life.',
    },
  ];

  return (
    <section ref={sectionRef} className={`relative py-24 lg:py-32 overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-medium tracking-[0.15em] uppercase">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
              More than care,
              <br />
              <em className="italic font-normal">we&apos;re family</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 flex items-end"
          >
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              At Sample Assisted Living, we believe aging should be celebrated, not endured.
              Our boutique residence provides the perfect balance of independence and support,
              where every resident thrives in a genuine home environment.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Layout: Image + Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Images */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10">
                <AppImage
                  src="/welcome-care-connection.png"
                  alt="Caregiver sharing a joyful moment with a resident"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
              </div>

              {/* Secondary Image - Overlapping */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-8 -right-8 lg:-right-16 w-48 lg:w-64 z-20"
              >
                <AppImage
                  src="https://images.pexels.com/photos/7551421/pexels-photo-7551421.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Senior enjoying garden activities"
                  className="w-full aspect-square object-cover rounded-xl shadow-editorial"
                />
              </motion.div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-8 -left-4 lg:-left-8 z-20"
              >
                <div className="bg-accent text-white px-6 py-4 rounded-xl shadow-editorial">
                  <div className="text-center">
                    <div className="text-4xl font-light">15+</div>
                    <div className="text-sm opacity-90">Years of Care</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Values */}
          <div className="lg:col-span-5 lg:col-start-8 pt-8 lg:pt-16">
            <div className="space-y-8 lg:space-y-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  className="group"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-5xl lg:text-6xl font-light text-border group-hover:text-accent transition-colors duration-500">
                        {value.number}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl lg:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 lg:mt-16 flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors duration-300"
              >
                <span className="border-b border-current pb-0.5">Learn Our Story</span>
                <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-border">|</span>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-muted-foreground font-medium hover:text-accent transition-colors duration-300"
              >
                <span className="border-b border-transparent hover:border-current pb-0.5">View Services</span>
                <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 lg:mt-32 max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-accent/10 font-serif">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed relative z-10">
              Every resident here is treated like my own grandparent.
              That&apos;s not just a philosophy—it&apos;s a promise.
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <cite className="text-muted-foreground not-italic">
                Your Name Here, <span className="text-accent">Owner</span>
              </cite>
              <div className="h-px w-12 bg-accent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
