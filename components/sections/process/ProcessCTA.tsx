"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface ProcessCTAProps {
    data: {
        text: string;
        buttonText: string;
        image: string;
        imageTagline: string;
    };
}

const ProcessCTA: React.FC<ProcessCTAProps> = ({ data }) => {
    const handleCtaClick = () => {
        trackClick(data.buttonText, 'Process Page Final CTA');
    };

    return (
        <section className="px-6 mb-32 max-w-2xl mx-auto">
            {/* CTA Image Block */}
            <div className="rounded-3xl overflow-hidden aspect-video relative group ring-4 ring-slate-50 dark:ring-slate-900 mb-12">
                <Image
                    src={data.image}
                    alt={data.imageTagline}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white font-black text-xl bg-black/30 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
                        {data.imageTagline}
                    </p>
                </div>
            </div>

            {/* Sticky Footer Button (Mobile) & Static Button (Desktop) */}
            <div className="fixed lg:static bottom-0 left-0 right-0 p-4 lg:p-0 bg-white/90 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none border-t border-slate-100 lg:border-none z-50">
                <div className="max-w-[400px] lg:max-w-none mx-auto">
                    <button
                        onClick={handleCtaClick}
                        className="w-full bg-primary text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                    >
                        <span>{data.buttonText}</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProcessCTA;
