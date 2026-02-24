"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';

interface ServiceDetailHeroProps {
    data: {
        badge: string;
        title: string;
        subtitle: string;
        primaryCta: string;
        secondaryCta: string;
    };
}

export default function ServiceDetailHero({ data }: ServiceDetailHeroProps) {
    return (
        <header className="relative bg-surface-light dark:bg-surface-dark overflow-hidden pb-12 pt-16 lg:pt-24 lg:pb-20 border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
                <div className="lg:w-2/3">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20 animate-fade-in">
                        {data.badge}
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight animate-slide-up">
                        {data.title.split(' ile ')[0]} {data.title.includes(' ile ') && <><span className="text-primary">ile {data.title.split(' ile ')[1]}</span></>}
                        {!data.title.includes(' ile ') && data.title}
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl animate-slide-up delay-100">
                        {data.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-200">
                        <button
                            onClick={() => trackClick(data.primaryCta, 'Service Detail Hero')}
                            className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-lg shadow-lg text-white bg-primary hover:bg-primary-dark transition-all duration-200 hover:shadow-primary/20 hover:-translate-y-0.5"
                        >
                            {data.primaryCta}
                        </button>
                        <button
                            onClick={() => trackClick(data.secondaryCta, 'Service Detail Hero')}
                            className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-300 dark:border-slate-700 text-base font-bold rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            {data.secondaryCta}
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative subtle pattern */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 lg:w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent rounded-full blur-3xl transform translate-x-1/2"></div>
            </div>
        </header>
    );
}
