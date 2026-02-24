"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface ServicesCTAProps {
    data: {
        title: string;
        subtitle: string;
        primaryCtaText: string;
        secondaryCtaText: string;
    };
}

export default function ServicesCTA({ data }: ServicesCTAProps) {
    return (
        <section className="py-24 relative overflow-hidden bg-primary-dark border-t border-white/10">
            {/* Background Image/Pattern Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                    alt="Team meeting"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary/20" />
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    {data.title}
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {data.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => trackClick(data.primaryCtaText, 'Services Page Final CTA')}
                        className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 text-lg flex items-center justify-center gap-2 group"
                    >
                        {data.primaryCtaText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => trackClick(data.secondaryCtaText, 'Services Page Final CTA Secondary')}
                        className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        <Phone className="w-5 h-5 text-secondary" />
                        {data.secondaryCtaText}
                    </button>
                </div>
            </div>
        </section>
    );
}
