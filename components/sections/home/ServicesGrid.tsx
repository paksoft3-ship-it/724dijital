"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
    Globe,
    ShoppingCart,
    Megaphone,
    Settings,
    BarChart,
    Smartphone,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
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

// Core services shown first and given a subtle visual accent
const FEATURED_SLUGS = ['e-ticaret-gelistirme', 'web-gelistirme', 'dijital-pazarlama'];

const FEATURED_ICON: Record<string, string> = {
    'e-ticaret-gelistirme': 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white',
    'web-gelistirme':       'bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white',
    'dijital-pazarlama':    'bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white',
};

const FEATURED_TOP: Record<string, string> = {
    'e-ticaret-gelistirme': 'border-t-[3px] border-t-secondary',
    'web-gelistirme':       'border-t-[3px] border-t-blue-500',
    'dijital-pazarlama':    'border-t-[3px] border-t-amber-500',
};

const PER_PAGE = 3;

export default function ServicesGrid({ services, title, subtitle }: ServicesGridProps) {
    const [page, setPage]         = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    // Featured slugs first, in defined order
    const sorted: Service[] = [
        ...FEATURED_SLUGS.map(slug => services.find(s => s.slug === slug)).filter(Boolean) as Service[],
        ...services.filter(s => !FEATURED_SLUGS.includes(s.slug)),
    ];

    const totalPages = Math.ceil(sorted.length / PER_PAGE);
    const visible    = sorted.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

    const nextPage = useCallback(() => setPage(p => (p + 1) % totalPages), [totalPages]);
    const prevPage = useCallback(() => setPage(p => (p - 1 + totalPages) % totalPages), [totalPages]);

    useEffect(() => {
        if (!isPlaying) return;
        const id = setInterval(nextPage, 4000);
        return () => clearInterval(id);
    }, [isPlaying, nextPage]);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-secondary text-xs font-extrabold uppercase tracking-[0.2em] mb-3 block">
                        Dijital Ajans
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* Cards */}
                <div
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                >
                    <div key={page} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                        {visible.map((service) => {
                            const Icon       = iconMap[service.iconKey] ?? Globe;
                            const isFeatured = FEATURED_SLUGS.includes(service.slug);
                            const iconStyle  = FEATURED_ICON[service.slug] ?? 'bg-white dark:bg-slate-800 group-hover:bg-secondary group-hover:text-white';
                            const topBorder  = isFeatured ? FEATURED_TOP[service.slug] : '';

                            return (
                                <div
                                    key={service.slug}
                                    className={`group p-10 rounded-2xl border border-neutral-border hover:border-secondary hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500 hover:-translate-y-2 ${
                                        isFeatured
                                            ? `bg-white shadow-sm ${topBorder}`
                                            : 'bg-neutral-surface/30 dark:bg-slate-800/40'
                                    }`}
                                >
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-sm transition-all duration-500 transform group-hover:rotate-6 ${iconStyle}`}>
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

                    {/* Controls: arrows + dots */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={prevPage}
                            aria-label="Önceki"
                            className="w-10 h-10 rounded-full border border-neutral-border flex items-center justify-center text-slate-500 hover:border-secondary hover:text-secondary transition-all duration-300"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(i)}
                                    aria-label={`Sayfa ${i + 1}`}
                                    className={`rounded-full transition-all duration-300 ${
                                        i === page
                                            ? 'w-8 h-2.5 bg-secondary'
                                            : 'w-2.5 h-2.5 bg-neutral-border hover:bg-secondary/40'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            aria-label="Sonraki"
                            className="w-10 h-10 rounded-full border border-neutral-border flex items-center justify-center text-slate-500 hover:border-secondary hover:text-secondary transition-all duration-300"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/hizmetler"
                        onClick={() => trackClick('Tüm Hizmetleri Gör', 'Services Section')}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-primary/20"
                    >
                        Tüm Hizmetleri Gör
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
