"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';
import { LucideIcon, TrendingUp, TrendingDown, LayoutDashboard, ShoppingCart, Users, FileText, MousePointer2, Sparkles, Brain, Lightbulb, Database } from 'lucide-react';
import type { ServiceDetail } from '@/lib/schemas/service-detail';
import ServiceFAQ from '../ServiceFAQ';

const iconMap: Record<string, LucideIcon> = {
    ads_click: MousePointer2,
    shopping_cart: ShoppingCart,
    groups: Users,
    description: FileText,
    cleaning_services: Sparkles,
    model_training: Brain,
    dashboard: LayoutDashboard,
    lightbulb: Lightbulb,
};

export default function DataServiceDetail({ data }: { data: ServiceDetail }) {
    const { customSections } = data;

    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-20">
                <div className="flex-1 space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest border border-primary/20">
                        {data.hero.badge}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                        {data.hero.title.split(' ile ').map((part, i) => (
                            i === 1 ? <span key={i} className="text-primary"> ile {part}</span> : part
                        ))}
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                        {data.hero.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-6 pt-4">
                        <button
                            onClick={() => trackClick(data.hero.primaryCta, 'Data Hero')}
                            className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-primary/30 transition-all"
                        >
                            {data.hero.primaryCta}
                        </button>
                    </div>
                </div>
                <div className="flex-1 w-full relative">
                    <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl transform scale-110"></div>
                    <div className="relative bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
                        <div className="w-full aspect-[4/3] bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-end justify-between p-10 gap-4">
                            {[0.3, 0.6, 0.4, 0.8, 0.5, 0.9, 0.7].map((h, i) => (
                                <div key={i} className="flex-1 bg-primary/20 rounded-t-lg group relative" style={{ height: `${h * 100}%` }}>
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Sources Grid */}
            {customSections?.platforms && (
                <section className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="mb-20">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">{customSections.platforms.title}</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {customSections.platforms.items.map((item, idx) => {
                            const Icon = iconMap[item.icon] || Database;
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-primary/40 hover:shadow-2xl transition-all group">
                                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">{item.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Metrics Section */}
            {customSections?.metrics && (
                <section className="max-w-[1280px] mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {customSections.metrics.items.map((metric, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-700 text-center shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-primary/20 group-hover:bg-primary transition-colors"></div>
                                <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-6">{metric.label}</p>
                                <div className="text-5xl font-black text-slate-900 dark:text-white mb-6">{metric.value}</div>
                                <div className={`inline-flex items-center gap-2 font-black text-sm px-4 py-1.5 rounded-full ${metric.trend === 'up' ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'}`}>
                                    {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                    {metric.change}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Process Steps */}
            {customSections?.modules && (
                <section className="py-24 px-6">
                    <div className="max-w-[1280px] mx-auto bg-slate-900 dark:bg-black p-12 lg:p-24 rounded-[4rem] text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-20">{customSections.modules.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {customSections.modules.items.map((item, idx) => {
                                const Icon = iconMap[item.icon] || Lightbulb;
                                return (
                                    <div key={idx} className="relative group">
                                        <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white mx-auto mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                                            <Icon className="w-10 h-10" />
                                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-900 dark:text-white font-black text-lg shadow-xl">
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-black text-white mb-4">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ REUSE */}
            <div className="max-w-[1280px] mx-auto px-6 py-20">
                <ServiceFAQ data={data.faq} />
            </div>

            <section className="max-w-[1280px] mx-auto px-6 py-24">
                <div className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 text-center border-2 border-primary/20">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-10">Verilerinizle Büyümeye <br /> Hemen Başlayın</h2>
                    <button
                        onClick={() => trackClick('Data Final CTA', 'Data Detail')}
                        className="bg-primary text-white px-12 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 transition-all"
                    >
                        Teklif Al
                    </button>
                </div>
            </section>
        </div>
    );
}
