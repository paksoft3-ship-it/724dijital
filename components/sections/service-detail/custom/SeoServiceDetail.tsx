"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';
import { CheckCircle, ArrowRight, Search } from 'lucide-react';
import type { ServiceDetail } from '@/lib/schemas/service-detail';
import ServiceFAQ from '../ServiceFAQ';



export default function SeoServiceDetail({ data }: { data: ServiceDetail }) {
    const { customSections } = data;

    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="px-6 py-20 lg:py-32 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-[1280px] mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        {data.hero.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto">
                        {data.hero.title}
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {data.hero.subtitle}
                    </p>
                    <button
                        onClick={() => trackClick(data.hero.primaryCta, 'SEO Hero')}
                        className="mt-12 w-full max-w-xs bg-primary hover:bg-primary-dark text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95"
                    >
                        {data.hero.primaryCta}
                    </button>
                </div>
            </section>

            {/* Roadmap Section */}
            {customSections?.roadmap && (
                <section className="max-w-[1280px] mx-auto px-6 py-24 bg-white dark:bg-slate-900 rounded-[3rem] my-10 shadow-sm border border-slate-100 dark:border-slate-800">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-16 text-center">{customSections.roadmap.title}</h3>
                    <div className="relative space-y-12 before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-primary/10 before:-translate-x-1/2 text-left">
                        {customSections.roadmap.items.map((item, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-slate-900 z-10 flex items-center justify-center text-white text-[10px] font-bold">
                                    {item.step}
                                </div>
                                <div className={`flex-1 w-full bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-2">{item.step}. Ay: {item.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                                </div>
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Local SEO Section */}
            {customSections?.solutions && (
                <section className="max-w-[1280px] mx-auto px-6 py-24 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-10 border border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8 text-center lg:text-left">
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white">{customSections.solutions.title}</h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{customSections.solutions.subtitle}</p>
                            <ul className="grid sm:grid-cols-2 gap-6 text-left">
                                {customSections.solutions.checkmarks.map((check, ci) => (
                                    <li key={ci} className="flex items-start gap-4">
                                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{check}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1 w-full max-w-sm aspect-square relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572021335469-3171624c995c?auto=format&fit=crop&q=80&w=800')" }}></div>
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                        </div>
                    </div>
                </section>
            )}

            {/* Tech & FAQ REUSE */}
            <div className="max-w-[1280px] mx-auto px-6 py-20">
                <ServiceFAQ data={data.faq} />
            </div>

            {/* Sticky Footer Analysis CTA */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-[340px] px-4">
                <button
                    onClick={() => trackClick('Free SEO Analysis', 'SEO Detail')}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black py-4 rounded-full shadow-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all group active:scale-95"
                >
                    <Search className="w-5 h-5 text-primary" />
                    Ücretsiz SEO Analizi
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
