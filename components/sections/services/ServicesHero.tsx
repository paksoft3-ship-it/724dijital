import React from 'react';

interface ServicesHeroProps {
    data: {
        badge: string;
        title: string;
        subtitle: string;
    };
}

export default function ServicesHero({ data }: ServicesHeroProps) {
    return (
        <section className="relative pt-20 pb-12 overflow-hidden bg-background-light dark:bg-background-dark">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-30 dark:opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20 animate-fade-in">
                    {data.badge}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-dark dark:text-white mb-6 leading-tight animate-slide-up">
                    {data.title.split('Seçin')[0]} <br className="hidden md:block" />
                    <span className="text-primary">Seçin</span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed animate-slide-up delay-100">
                    {data.subtitle}
                </p>
            </div>
        </section>
    );
}
