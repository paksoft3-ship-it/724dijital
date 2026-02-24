"use client";

import React from 'react';
import Link from 'next/link';
import {
    Globe,
    ShoppingCart,
    Megaphone,
    Settings,
    BarChart,
    Smartphone,
    ArrowRight
} from 'lucide-react';
import { trackClick } from '@/lib/analytics';
import type { Service } from '@/lib/schemas/content';

interface ServicesGridProps {
    services: Service[];
    title: string;
    subtitle: string;
}

const iconMap: Record<string, React.ElementType> = {
    globe: Globe,
    'shopping-cart': ShoppingCart,
    megaphone: Megaphone,
    settings: Settings,
    'bar-chart': BarChart,
    smartphone: Smartphone,
};

export default function ServicesGrid({ services, title, subtitle }: ServicesGridProps) {
    return (
        <section className="py-20 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = iconMap[service.iconKey] || Globe;
                        return (
                            <div
                                key={service.slug}
                                className="group bg-neutral-surface/30 dark:bg-slate-800/40 p-10 rounded-2xl border border-neutral-border hover:border-secondary hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    {service.shortDesc}
                                </p>
                                <Link
                                    href={`/hizmetler/${service.slug}`}
                                    onClick={() => trackClick(service.title, 'Services Grid')}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary group/link transition-colors"
                                >
                                    Detaylı Bilgi
                                    <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                                </Link>

                                {/* Tags */}
                                <div className="mt-8 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-secondary/10 text-secondary rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
