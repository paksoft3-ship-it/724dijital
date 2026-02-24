"use client";

import React from 'react';
import Link from 'next/link';
import {
    Globe,
    ShoppingCart,
    Code,
    BarChart3,
    ArrowRight
} from 'lucide-react';
import { trackClick } from '@/lib/analytics';
import type { Service } from '@/lib/schemas/content';

interface ServicesV2Props {
    services: Service[];
    title: string;
    subtitle: string;
}

const iconMap: Record<string, React.ElementType> = {
    globe: Globe,
    'shopping-cart': ShoppingCart,
    code: Code,
    'bar-chart': BarChart3,
};

export default function ServicesV2({ services, title, subtitle }: ServicesV2Props) {
    return (
        <section className="py-20 bg-slate-50 dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-accent-teal font-semibold tracking-wider uppercase text-xs mb-2">Hizmetler</h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-4">
                        {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.iconKey] || Globe;

                        return (
                            <div
                                key={index}
                                className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700"
                            >
                                <div className={cn(
                                    "w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-colors",
                                    index === 0 && "bg-blue-50 dark:bg-blue-900/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                                    index === 1 && "bg-teal-50 dark:bg-teal-900/20 text-accent-teal group-hover:bg-accent-teal group-hover:text-white",
                                    index === 2 && "bg-amber-50 dark:bg-amber-900/20 text-accent-amber group-hover:bg-accent-amber group-hover:text-white",
                                    index === 3 && "bg-purple-50 dark:bg-purple-900/20 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                                )}>
                                    <Icon size={30} />
                                </div>
                                <h4 className="text-xl font-bold text-primary dark:text-white mb-3">{service.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {service.shortDesc}
                                </p>
                                <Link
                                    href={`/hizmetler/${service.slug}`}
                                    onClick={() => trackClick(service.title, 'Services V2 Card')}
                                    className="inline-flex items-center text-primary dark:text-white text-sm font-semibold hover:gap-2 transition-all hover:text-accent-teal"
                                >
                                    Detaylı İncele <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Fixed cn import to avoid lint issues identified in logs
import { cn } from '@/lib/utils';
