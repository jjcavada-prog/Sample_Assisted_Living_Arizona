'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Determine background color based on hydration state to match previous design
  const bgClass = !isHydrated ? "bg-[#2c3640]" : "bg-[#1a1a1a]";

  return (
    <section ref={ref} className={`relative min-h-screen overflow-hidden ${bgClass} ${className}`}>
      {!isHydrated && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {isHydrated && (
        <>
          {/* Decorative grain overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Background Image with Parallax */}
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0 z-0"
          >
            <AppImage
              src="/godsgraceheropage.jpeg"
              alt="Sample - Warm and inviting assisted living home in Phoenix, Arizona"
              className="w-full h-[120%] object-cover"
              priority
            />
            {/* Sophisticated gradient overlay - lighter for better image visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
            {/* Top gradient for header visibility */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/30 to-transparent" />
          </motion.div>

          {/* Main Content - Editorial Left-Aligned Layout */}
          <motion.div
            style={{ y: contentY, opacity }}
            className="relative z-10 min-h-screen flex items-center"
          >
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 xl:col-span-6">
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="h-px w-12 bg-accent" />
                    <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                      Phoenix, Arizona
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white mb-6"
                  >
                    <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95] tracking-tight">
                      Where care
                    </span>
                    <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mt-2">
                      feels like{' '}
                      <em className="font-normal italic text-accent">home</em>
                    </span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10"
                  >
                    An intimate assisted living residence for just ten residents,
                    where personalized attention and genuine connection define every moment.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded-full transition-all duration-500 hover:bg-accent/90 hover:gap-4"
                    >
                      <span>Schedule a Visit</span>
                      <Icon name="ArrowRightIcon" size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <button
                      onClick={() => {/* Virtual tour */ }}
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-medium rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Icon name="PlayIcon" size={16} className="ml-0.5" />
                      </div>
                      <span>Watch Our Story</span>
                    </button>
                  </motion.div>
                </div>

                {/* Right - Floating Stats Card */}
                <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 3 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="relative"
                  >
                    {/* Accent shape behind */}
                    <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />

                    {/* Card */}
                    <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 p-8 max-w-sm">
                      <div className="space-y-6">
                        {/* Stat 1 */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-2xl font-light text-accent">10</span>
                          </div>
                          <div>
                            <p className="text-white font-medium">Residents Only</p>
                            <p className="text-white/50 text-sm">Intimate, personalized care</p>
                          </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="ClockIcon" size={20} className="text-secondary" />
                          </div>
                          <div>
                            <p className="text-white font-medium">24/7 Care</p>
                            <p className="text-white/50 text-sm">Round-the-clock support</p>
                          </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                            <Icon name="ShieldCheckIcon" size={20} className="text-white/70" />
                          </div>
                          <div>
                            <p className="text-white font-medium">State Licensed</p>
                            <p className="text-white/50 text-sm">Arizona certified facility</p>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/10 my-6" />

                      {/* Quick Contact */}
                      <a href="tel:+14807657128" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center transition-transform group-hover:scale-110">
                          <Icon name="PhoneIcon" size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white/50 text-xs uppercase tracking-wider">Call anytime</p>
                          <p className="text-white font-medium group-hover:text-accent transition-colors">(480) 765-7128</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-0 left-0 right-0 z-10"
          >
            <div className="container mx-auto px-6 lg:px-12 pb-8">
              <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <Icon name="MapPinIcon" size={16} />
                    <span>1234 Main Street, Scottsdale, AZ 85251</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-white/60 text-sm">
                    <Icon name="HeartIcon" size={16} className="text-accent" />
                    <span>Medicaid Accepted</span>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <span className="hidden sm:inline">Scroll to explore</span>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Icon name="ChevronDownIcon" size={20} />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </section>
  );
};

export default HeroSection;
