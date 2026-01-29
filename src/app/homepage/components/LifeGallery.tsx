'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface LifeGalleryProps {
  className?: string;
}

const LifeGallery = ({ className = '' }: LifeGalleryProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className={`py-24 bg-[#faf9f6] overflow-hidden ${className}`}>
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] leading-none tracking-tight font-serif">
              Moments of <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 italic">joy & connection</span>
                <span className="absolute bottom-1 left-0 right-0 h-4 bg-[#f0e6e0] -z-0 opacity-60 transform -rotate-1"></span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:text-right"
          >
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              Every day brings new opportunities for meaningful experiences. From shared meals to creative activities, life at Sample Assisted Living is filled with warmth and purpose.
            </p>
          </motion.div>
        </div>

        {/* Custom Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* 1. Left Large Portrait - Walking/Outdoors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden min-h-[400px]"
          >
            <AppImage
              src="/gallery-stroll.png"
              alt="Caregiver walking with senior outdoors"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-6 flex flex-col justify-end">
              <div className="text-white/80 text-sm uppercase tracking-wider mb-1">Outdoors</div>
              <div className="text-white text-xl font-medium">Fresh Air & Nature</div>
            </div>
          </motion.div>

          {/* 2. Top Middle - Staff Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[220px]"
          >
            <AppImage
              src="/gallery-staff.png"
              alt="Our friendly staff and volunteers"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* 3. Top Right - Clover (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden min-h-[200px]"
          >
            <AppImage
              src="/services-activities.png"
              alt="Growth and nature"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* 4. Top Right - Family Atmosphere Icon Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]"
          >
            <Icon name="HeartIcon" size={32} className="text-accent mb-3" />
            <h3 className="text-[#1a1a1a] font-medium mb-1">Family Atmosphere</h3>
            <p className="text-[#666] text-xs">Like home, only better</p>
          </motion.div>


          {/* 5. Bottom Middle Left - Bowling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 relative rounded-3xl overflow-hidden min-h-[250px]"
          >
            <AppImage
              src="/gallery-bowling.png"
              alt="Seniors bowling"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end">
              <span className="text-white/90 text-sm font-medium">Activities</span>
              <span className="text-white text-lg font-serif italic">Garden Therapy</span>
            </div>
          </motion.div>


          {/* 6. Bottom Middle Center - Personal Care */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-3 relative rounded-3xl overflow-hidden min-h-[250px]"
          >
            <AppImage
              src="/services-personal-care.png"
              alt="Compassionate care"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* 7. Bottom Middle Right - Residents Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-2 bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center min-h-[250px]"
          >
            <span className="text-5xl font-light text-accent mb-2">10</span>
            <h3 className="text-[#1a1a1a] font-medium">Residents</h3>
            <p className="text-[#666] text-xs mt-1">Maximum capacity</p>
          </motion.div>

        </div>

        {/* Slider Indicator */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="w-12 h-1.5 bg-[#1a1a1a] rounded-full"></div>
          <div className="w-2 h-1.5 bg-[#e0e0e0] rounded-full"></div>
          <div className="w-2 h-1.5 bg-[#e0e0e0] rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default LifeGallery;
