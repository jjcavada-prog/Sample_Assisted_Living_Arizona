'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface ContactSectionProps {
  className?: string;
}

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className={`relative ${className}`}>
      {/* Main CTA Section */}
      <div className="relative bg-accent overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                Begin your family&apos;s
                <br />
                <em className="italic font-normal">journey with us</em>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Schedule a personal tour and discover why families choose Sample Assisted Living
                for their loved ones. We&apos;re here to answer every question.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-accent font-medium text-lg rounded-full transition-all duration-300 hover:bg-white/95 hover:scale-105"
              >
                <Icon name="CalendarIcon" size={20} />
                <span>Schedule Your Tour</span>
              </Link>
              <a
                href="tel:+14807657128"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium text-lg rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20"
              >
                <Icon name="PhoneIcon" size={20} />
                <span>(480) 765-7128</span>
              </a>
            </motion.div>

            {/* Quick contact options */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 text-white/70"
            >
              <a href="mailto:info@sampleassistedliving.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="EnvelopeIcon" size={18} />
                <span>info@sampleassistedliving.com</span>
              </a>
              <span className="hidden sm:inline text-white/30">|</span>
              <a href="https://maps.google.com/?q=15826+North+10th+Street+Scottsdale+AZ+85022" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="MapPinIcon" size={18} />
                <span>1234 Main Street, Scottsdale, AZ 85251</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <span className="text-2xl font-light">Sample Assisted Living</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-6">
                An intimate assisted living residence where every resident is treated like family.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Icon name="ShieldCheckIcon" size={16} className="text-secondary" />
                <span>Arizona State Licensed (SAMPLE-001)</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {['About Us', 'Services', 'Life Here', 'Testimonials', 'Resources'].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+14807657128" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group">
                    <Icon name="PhoneIcon" size={18} className="mt-0.5 text-accent" />
                    <div>
                      <div className="font-medium text-white">(480) 765-7128</div>
                      <div className="text-sm text-white/50">Main line / 24/7 Emergency</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sampleassistedliving.com" className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                    <Icon name="EnvelopeIcon" size={18} className="mt-0.5 text-secondary" />
                    <div>
                      <div className="font-medium text-white">info@sampleassistedliving.com</div>
                      <div className="text-sm text-white/50">Email</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Location & Hours */}
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider text-white/40 mb-6">
                Visit Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPinIcon" size={18} className="mt-0.5 text-accent" />
                  <div>
                    <div className="text-white">15826 North 10th Street</div>
                    <div className="text-white/60">Scottsdale, AZ 85022</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="ClockIcon" size={18} className="mt-0.5 text-white/60" />
                  <div>
                    <div className="text-white/60">Tours available daily</div>
                    <div className="text-white/60">9:00 AM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Sample Assisted Living. All rights reserved. License: SAMPLE-001
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
