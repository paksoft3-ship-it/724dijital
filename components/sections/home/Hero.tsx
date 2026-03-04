"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface HeroProps {
    data: {
        title: string;
        subtitle: string;
        ctaText: string;
        ctaLink: string;
        secondaryCtaText: string;
        secondaryCtaLink: string;
    };
}

export default function Hero({ data }: HeroProps) {
    return (
        <section className="relative pt-0 pb-12 lg:pt-0 lg:pb-20 overflow-hidden bg-gradient-to-br from-[#F0FDFB] via-[#F5F7FA] to-[#EEF2FF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4 border border-secondary/20 animate-fade-in">
                            <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                            KOBİ&apos;ler için Dijital Dönüşüm
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-primary dark:text-white mb-6 leading-[1.2]">
                            İşinizi Büyüten <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-600">
                                Yazılım ve Dijital
                            </span> Çözümler
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            {data.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href={data.ctaLink}
                                onClick={() => trackClick(data.ctaText, 'Hero Primary')}
                                className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                            >
                                {data.ctaText}
                                <ArrowRight size={20} />
                            </Link>
                            <Link
                                href={data.secondaryCtaLink}
                                onClick={() => trackClick(data.secondaryCtaText, 'Hero Secondary')}
                                className="group bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-2 border-neutral-border hover:border-secondary px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:bg-neutral-surface dark:hover:bg-slate-700"
                            >
                                {data.secondaryCtaText}
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>

                    {/* Right Content */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        {/* Decorative Background Blob */}
                        <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-secondary/20 to-primary/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

                        {/* Mockup Container */}
                        <div className="relative w-full max-w-lg">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-700 aspect-video">
                                <Image
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                                    alt="Modern Dashboard"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl border border-neutral-border flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                                <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-[10px]">Aylık Büyüme</p>
                                    <p className="font-extrabold text-primary dark:text-white text-2xl">%128</p>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute -top-8 -right-8 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl border border-neutral-border flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-[10px]">Aktif Müşteri</p>
                                    <p className="font-extrabold text-primary dark:text-white text-2xl">2.4k+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
