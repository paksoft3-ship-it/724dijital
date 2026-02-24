"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface SectorsCTAProps {
    data: {
        text: string;
        buttonText: string;
    };
}

const SectorsCTA: React.FC<SectorsCTAProps> = ({ data }) => {
    const handleCtaClick = () => {
        trackClick(data.buttonText, 'Sectors Page Sticky CTA');
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 lg:static lg:bg-transparent lg:border-none lg:mb-20">
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={handleCtaClick}
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:bg-primary/90 active:scale-[0.98] transition-all group"
                >
                    <span>{data.buttonText}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default SectorsCTA;
