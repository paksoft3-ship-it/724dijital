import React from 'react';
import Image from 'next/image';

interface AboutHeroProps {
    data: {
        badge: string;
        title: string;
        subtitle: string;
    };
}

const AboutHero: React.FC<AboutHeroProps> = ({ data }) => {
    return (
        <section className="py-20 lg:py-32 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {data.badge}
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                        {data.title}
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
                        {data.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                            Hemen Başlayalım
                        </button>
                        <button className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-black hover:border-primary/30 transition-all">
                            Başarı Hikayeleri
                        </button>
                    </div>
                </div>
                <div className="relative group lg:mt-0">
                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-100 dark:ring-slate-800">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                            alt="Team Collaboration"
                            fill
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
