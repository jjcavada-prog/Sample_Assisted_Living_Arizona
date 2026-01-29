'use client';

import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';


interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc: string;
    icon: string;
    href: string;
    className?: string;
    delay?: number;
}

const ServiceCard = ({ title, description, imageSrc, icon, href, className = '', delay = 0 }: ServiceCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <AppImage
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8">
            <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white">
                    <Icon name={icon} size={24} />
                </div>
                <h3 className="text-2xl font-medium text-white mb-2">{title}</h3>
                <p className="text-white/70 text-sm mb-6 max-w-xs">{description}</p>
            </div>

            <Link
                href={href}
                className="inline-flex items-center gap-2 text-white/90 text-sm font-medium hover:text-white transition-colors group/link"
            >
                <span>Learn more</span>
                <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
    </motion.div>
);

const ServicesSection = () => {
    return (
        <section className="py-24 bg-[#1a1a1a]">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-accent" />
                            <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                                What We Offer
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.1]">
                            Care that adapts <br />
                            <span className="font-serif italic text-white/50">to your needs</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                        >
                            <span>View All Services</span>
                            <Icon name="ArrowRightIcon" size={16} />
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                    {/* Main Card - Personal Care (Left, spans 2 rows) */}
                    <ServiceCard
                        title="Personal Care"
                        description="Compassionate daily support. Assistance with bathing, dressing, medication management, and mobility—always with dignity."
                        imageSrc="/services-personal-care.png"
                        icon="HeartIcon"
                        href="/services#personal-care"
                        className="lg:row-span-2 h-[400px] lg:h-full"
                        delay={0}
                    />

                    {/* Top Middle - Comfortable Living */}
                    <ServiceCard
                        title="Comfortable Living"
                        description="A place to call home. Private rooms with personalized touches."
                        imageSrc="/services-living.png"
                        icon="HomeIcon"
                        href="/services#living"
                        className="h-[300px] lg:h-auto"
                        delay={0.1}
                    />

                    {/* Top Right - Enriching Activities */}
                    <ServiceCard
                        title="Enriching Activities"
                        description="Purpose & connection. Daily activities to stimulate mind and body."
                        imageSrc="/services-activities.png"
                        icon="SparklesIcon"
                        href="/services#activities"
                        className="h-[300px] lg:h-auto"
                        delay={0.2}
                    />

                    {/* Bottom Wide - Family-Style Dining (Spans 2 columns) */}
                    <ServiceCard
                        title="Family-Style Dining"
                        description="Nourishment & togetherness. Home-cooked meals shared in good company."
                        imageSrc="/services-dining.png"
                        icon="UsersIcon"
                        href="/services#dining"
                        className="md:col-span-2 h-[300px] lg:h-auto"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
