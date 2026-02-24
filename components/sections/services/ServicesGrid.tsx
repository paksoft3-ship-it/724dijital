import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, ShoppingCart, Megaphone, Settings, BarChart, Smartphone, type LucideIcon } from 'lucide-react';
import type { Service } from '@/lib/schemas/content';
import { trackClick } from '@/lib/analytics';

const iconMap: Record<string, LucideIcon> = {
    globe: Globe,
    'shopping-cart': ShoppingCart,
    megaphone: Megaphone,
    settings: Settings,
    'bar-chart': BarChart,
    smartphone: Smartphone,
};

interface ServicesGridProps {
    services: Service[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
    return (
        <section className="py-16 bg-white dark:bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = iconMap[service.iconKey] || Globe;
                        return (
                            <div
                                key={service.slug}
                                className="group bg-neutral-surface dark:bg-slate-800/50 border border-neutral-border rounded-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                            >
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <Icon className="text-primary w-7 h-7 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{service.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 h-12 overflow-hidden text-sm leading-relaxed">
                                    {service.shortDesc}
                                </p>

                                {service.techStack && (
                                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6 bg-slate-100 dark:bg-slate-800 px-2 py-1.5 rounded-lg w-fit border border-neutral-border">
                                        {service.techStack}
                                    </div>
                                )}

                                <div className="mt-auto pt-6 border-t border-neutral-border">
                                    <ul className="space-y-3 mb-6">
                                        {service.features?.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/hizmetler/${service.slug}`}
                                        onClick={() => trackClick(service.title, 'Services Grid Card')}
                                        className="inline-flex items-center text-primary font-bold text-sm group/link"
                                    >
                                        Detayları Gör
                                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
