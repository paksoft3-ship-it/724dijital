"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';
import { LucideIcon, TrendingUp, MousePointer2, Megaphone, Eye, Heart, ShoppingCart, RotateCcw, TrendingDown, ArrowRight, CheckCircle, BarChart4 } from 'lucide-react';
import type { ServiceDetail } from '@/lib/schemas/service-detail';
import ServiceFAQ from '../ServiceFAQ';

const iconMap: Record<string, LucideIcon> = {
    trending_up: TrendingUp,
    ads_click: MousePointer2,
    campaign: Megaphone,
    visibility: Eye,
    favorite: Heart,
    shopping_cart: ShoppingCart,
    replay: RotateCcw,
    data_exploration: BarChart4,
};

export default function MarketingServiceDetail({ data }: { data: ServiceDetail }) {
    const { customSections } = data;

    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="relative overflow-hidden px-6 py-20 lg:py-32 bg-white dark:bg-slate-900">
                <div className="max-w-[1280px] mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        {data.hero.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
                        {data.hero.title.split(' ile ').map((part, i) => (
                            i === 1 ? <span key={i} className="text-primary"> ile {part}</span> : part
                        ))}
                    </h1>
                    <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {data.hero.subtitle}
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        <button
                            onClick={() => trackClick(data.hero.primaryCta, 'Marketing Hero')}
                            className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-primary/20"
                        >
                            {data.hero.primaryCta}
                        </button>
                        <button
                            onClick={() => trackClick(data.hero.secondaryCta, 'Marketing Hero')}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                        >
                            {data.hero.secondaryCta}
                        </button>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[120px] pointer-events-none">
                    <div className="h-[400px] w-[600px] bg-primary rounded-full"></div>
                </div>
            </section>

            {/* Platforms Section */}
            {customSections?.platforms && (
                <section className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{customSections.platforms.title}</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">{customSections.platforms.subtitle}</p>
                    </div>
                    <div className="grid gap-10 md:grid-cols-2">
                        {customSections.platforms.items.map((item, idx) => {
                            const Icon = iconMap[item.icon] || MousePointer2;
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                                    <div className="mb-8 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">{item.description}</p>
                                    <ul className="space-y-3">
                                        {item.features?.map((f, fi) => (
                                            <li key={fi} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                                                <CheckCircle className="w-4 h-4 text-primary" /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Funnel Approach */}
            {customSections?.funnel && (
                <section className="bg-slate-50 dark:bg-slate-900/50 py-24 my-10 rounded-[3rem] mx-6 lg:mx-10 overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{customSections.funnel.title}</h2>
                            <p className="mt-4 text-slate-600 dark:text-slate-400">{customSections.funnel.subtitle}</p>
                        </div>
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
                            {customSections.funnel.steps.map((step, idx) => {
                                const Icon = iconMap[step.icon] || Eye;
                                return (
                                    <React.Fragment key={idx}>
                                        <div className="flex flex-1 flex-col items-center text-center">
                                            <div className="mb-6 w-24 h-24 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center text-primary border-8 border-slate-100 dark:border-slate-900 group">
                                                <Icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                            </div>
                                            <h4 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[160px]">{step.description}</p>
                                        </div>
                                        {idx < customSections.funnel!.steps.length - 1 && (
                                            <ArrowRight className="hidden md:block w-8 h-8 text-primary/20" />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Metrics Grid */}
            {customSections?.metrics && (
                <section className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="grid gap-8 md:grid-cols-3">
                        {customSections.metrics.items.map((metric, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{metric.label}</span>
                                    {metric.change && (
                                        <div className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${metric.trend === 'down' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'}`}>
                                            {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                            {metric.change}
                                        </div>
                                    )}
                                </div>
                                <p className="text-4xl font-black text-slate-900 dark:text-white">{metric.value}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Reporting Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="bg-slate-900 text-white rounded-[3rem] overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                    <div className="grid lg:grid-cols-2 items-center">
                        <div className="p-12 lg:p-20 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">Şeffaf Raporlama Paneli</h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Karmaşık tablolarla vaktinizi boşa harcamayın. Gerçek zamanlı verilerle reklam performansınızı tek bir panelden takip edin.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary">
                                        <BarChart4 className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold">Detaylı ROI Analizi</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 lg:p-12 bg-slate-800/50 flex justify-center">
                            <div className="w-full max-w-sm aspect-video bg-slate-900 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
                                <div className="flex gap-2 mb-8">
                                    {Array(3).fill(0).map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white/20"></div>)}
                                </div>
                                <div className="flex items-end gap-3 h-full">
                                    {[0.4, 0.7, 1, 0.6, 0.3].map((h, i) => (
                                        <div key={i} className="flex-1 bg-primary/40 rounded-t-lg" style={{ height: `${h * 100}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ and Packages - Generic but consistent */}
            <div className="max-w-[1280px] mx-auto px-6 py-20">
                <ServiceFAQ data={data.faq} />
            </div>

            <section className="max-w-[1280px] mx-auto px-6 py-24 text-center">
                <div className="bg-primary p-12 lg:p-20 rounded-[3rem] text-white shadow-2xl shadow-primary/20">
                    <h2 className="text-3xl md:text-5xl font-black mb-8">Büyümeye Hazır mısınız?</h2>
                    <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">Sektörünüze özel strateji paketi ile hemen bir toplantı planlayalım.</p>
                    <button
                        onClick={() => trackClick('Marketing Final CTA', 'Marketing Detail')}
                        className="bg-white text-primary px-12 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-xl"
                    >
                        Teklif Al
                    </button>
                </div>
            </section>
        </div>
    );
}
