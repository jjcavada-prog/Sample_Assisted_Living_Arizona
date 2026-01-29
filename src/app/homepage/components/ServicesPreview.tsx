'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ServicesPreviewProps {
  className?: string;
}

const ServicesPreview = ({ className = '' }: ServicesPreviewProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: 'HeartIcon',
      title: 'Personal Care',
      subtitle: 'Compassionate daily support',
      description: 'Assistance with bathing, dressing, medication management, and mobility—always with dignity.',
      image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Caring nurse helping elderly woman',
      accent: 'bg-accent',
    },
    {
      icon: 'HomeIcon',
      title: 'Comfortable Living',
      subtitle: 'A place to call home',
      description: 'Private rooms with personalized décor, housekeeping, and all the comforts of home.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Cozy bedroom with natural light',
      accent: 'bg-secondary',
    },
    {
      icon: 'SparklesIcon',
      title: 'Enriching Activities',
      subtitle: 'Purpose & connection',
      description: 'Arts, music therapy, gardening, and social events that bring joy to every day.',
      image: 'https://images.pexels.com/photos/7551422/pexels-photo-7551422.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Seniors enjoying art activities',
      accent: 'bg-accent',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Family-Style Dining',
      subtitle: 'Nourishment & togetherness',
      description: 'Nutritious home-cooked meals served together, honoring dietary needs and preferences.',
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Residents sharing a meal together',
      accent: 'bg-secondary',
    },
  ];

  return (
    <section ref={sectionRef} className={`relative py-24 lg:py-32 bg-[#1a1a1a] overflow-hidden ${className}`}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-sm font-medium tracking-[0.15em] uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
              Care that adapts
              <br />
              <em className="italic font-normal text-white/60">to your needs</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <span>View All Services</span>
              <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index === 0 ? 'aspect-square lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}`}>
                <AppImage
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                {/* Icon badge */}
                <div className={`w-12 h-12 rounded-xl ${service.accent} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon name={service.icon as "HeartIcon" | "HomeIcon" | "SparklesIcon" | "UserGroupIcon"} size={24} className="text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-white mb-1 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-3">{service.subtitle}</p>

                {/* Description - only visible on hover or for featured item */}
                <p className={`text-white/70 text-sm leading-relaxed transition-all duration-300 ${
                  index === 0
                    ? 'opacity-100 max-h-24'
                    : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24'
                }`}>
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-white/50 group-hover:text-accent transition-colors duration-300">
                  <span className="text-sm">Learn more</span>
                  <Icon name="ArrowRightIcon" size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl lg:text-3xl text-white mb-3">
                  Every person deserves personalized care
                </h3>
                <p className="text-white/60">
                  We create individualized care plans that evolve with each resident&apos;s changing needs,
                  ensuring they always receive the right level of support.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full transition-all duration-300 hover:bg-accent/90"
                >
                  <span>Schedule a Visit</span>
                  <Icon name="CalendarIcon" size={18} />
                </Link>
                <a
                  href="tel:+14807657128"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-medium rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10"
                >
                  <Icon name="PhoneIcon" size={18} />
                  <span>(480) 765-7128</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
