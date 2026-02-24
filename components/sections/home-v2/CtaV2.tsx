"use client";

import React from 'react';
import Link from 'next/link';
import { FileText, Phone } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface CtaV2Props {
    data: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
        secondaryCtaText?: string;
        secondaryCtaLink?: string;
    };
}

export default function CtaV2({ data }: CtaV2Props) {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                    {data.title}
                </h2>
                <p className="text-slate-400 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
                    {data.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        href={data.ctaLink}
                        onClick={() => trackClick(data.ctaText, 'CTA V2 Primary')}
                        className="px-8 py-5 bg-accent-teal hover:bg-teal-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-teal-500/20 flex items-center justify-center group"
                    >
                        {data.ctaText}
                        <FileText size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                    </Link>
                    {data.secondaryCtaText && data.secondaryCtaLink && (
                        <Link
                            href={data.secondaryCtaLink}
                            onClick={() => trackClick(data.secondaryCtaText!, 'CTA V2 Secondary')}
                            className="px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 flex items-center justify-center backdrop-blur-sm group"
                        >
                            {data.secondaryCtaText}
                            <Phone size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
