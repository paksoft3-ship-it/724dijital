"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';

interface AboutCTAProps {
    data: {
        title: string;
        subtitle: string;
        buttonText: string;
    };
}

const AboutCTA: React.FC<AboutCTAProps> = ({ data }) => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto">
                <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            {data.title}
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            {data.subtitle}
                        </p>
                        <button
                            onClick={() => trackClick(data.buttonText, 'About Page Final CTA')}
                            className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-2xl shadow-black/10 hover:scale-105 active:scale-95"
                        >
                            {data.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
