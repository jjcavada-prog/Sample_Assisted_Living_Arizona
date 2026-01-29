'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Life Here', href: '/life-here' },
    { label: 'Contact', href: '/contact' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-lg shadow-sm'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        } ${className}`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/homepage" className="relative z-10 group">
              <div className="flex items-center gap-2">
                <span className={`text-xl lg:text-2xl font-light tracking-tight transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] ${
                  isScrolled ? 'text-foreground drop-shadow-none' : 'text-white'
                }`}>
                  Sample Assisted Living
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isScrolled
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-white hover:text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+14807657128"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white hover:text-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                }`}
              >
                <Icon name="PhoneIcon" size={16} />
                <span>(480) 765-7128</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-accent/90 hover:scale-105"
              >
                <span>Schedule Tour</span>
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`lg:hidden relative z-10 w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? 'text-foreground' : 'text-white'
              }`}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'top-2 rotate-45 bg-foreground'
                    : `top-0 ${isScrolled ? 'bg-foreground' : 'bg-white'}`
                }`} />
                <span className={`absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-0'
                    : `opacity-100 ${isScrolled ? 'bg-foreground' : 'bg-white'}`
                }`} />
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'top-2 -rotate-45 bg-foreground'
                    : `top-4 ${isScrolled ? 'bg-foreground' : 'bg-white'}`
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-background shadow-xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/homepage"
                        className="block py-3 text-lg font-medium text-foreground hover:text-accent transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    {navigationItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTAs */}
                <div className="space-y-4 pt-8 border-t border-border">
                  <a
                    href="tel:+14807657128"
                    className="flex items-center justify-center gap-2 w-full py-3 text-foreground font-medium border border-border rounded-full hover:bg-muted transition-colors"
                  >
                    <Icon name="PhoneIcon" size={18} />
                    <span>(480) 765-7128</span>
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-white font-medium rounded-full transition-colors hover:bg-accent/90"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Schedule Tour</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>

                {/* Bottom Info */}
                <div className="pt-8 text-center text-sm text-muted-foreground">
                  <p>1234 Main Street, Scottsdale, AZ 85251</p>
                  <p className="mt-1">Arizona State Licensed (SAMPLE-001)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
