"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket, Box } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface HeroV2Props {
    data: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
        secondaryCtaText: string;
        secondaryCtaLink: string;
    };
}

export default function HeroV2({ data }: HeroV2Props) {
    return (
        <section className="relative pt-0 pb-16 lg:pt-0 lg:pb-20 overflow-hidden bg-primary text-white">
            {/* Hero Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Abstract gradient shapes */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-accent-teal/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-3 w-fit animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-accent-amber animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Yeni Nesil Yazılım Çözümleri</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                        Dijital Dönüşümde <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-cyan-200">
                            Güvenilir Çözüm Ortağınız
                        </span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
                        {data.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href={data.ctaLink}
                            onClick={() => trackClick(data.ctaText, 'Hero V2 Primary')}
                            className="relative group px-8 py-4 bg-accent-amber hover:bg-amber-500 text-primary font-bold rounded-lg transition-all duration-300 flex items-center justify-center overflow-hidden"
                        >
                            {/* Pulse animation simulation */}
                            <span className="absolute inset-0 rounded-lg shadow-[0_0_0_0_rgba(245,158,11,0.7)] group-hover:animate-ping-slow pointer-events-none"></span>
                            <span className="relative z-10">{data.ctaText}</span>
                            <Rocket className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>

                        <Link
                            href={data.secondaryCtaLink}
                            onClick={() => trackClick(data.secondaryCtaText, 'Hero V2 Secondary')}
                            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center backdrop-blur-sm"
                        >
                            {data.secondaryCtaText}
                        </Link>
                    </div>

                    {/* Service Cities */}
                    <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                        <span>Hizmet Bölgelerimiz:</span>
                        <div className="flex gap-4 text-slate-400">
                            <span className="flex items-center gap-1">
                                <Box className="text-accent-teal" size={14} /> Ankara
                            </span>
                            <span className="flex items-center gap-1">
                                <Box className="text-accent-teal" size={14} /> Konya
                            </span>
                            <span className="flex items-center gap-1">
                                <Box className="text-accent-teal" size={14} /> Kayseri
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="lg:col-span-5 relative hidden lg:block">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm aspect-[4/3] group">
                        <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                            alt="Modern Dashboard"
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-700 shadow-lg animate-float">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-slate-400">Aylık Büyüme</span>
                                <span className="text-accent-teal text-xs font-bold">+%124</span>
                            </div>
                            <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                                <div className="bg-accent-teal h-full rounded-full w-3/4 animate-shimmer"></div>
                            </div>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-teal to-blue-500 rounded-2xl opacity-20 -z-10 rotate-12"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-accent-amber to-orange-600 rounded-full opacity-10 -z-10"></div>
                </div>
            </div>
        </section>
    );
}
