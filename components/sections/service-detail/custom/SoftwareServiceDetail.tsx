"use client";

import React from 'react';
import Image from 'next/image';
import { trackClick } from '@/lib/analytics';
import { Users, LayoutDashboard, Settings, ShieldCheck, PieChart, Bell, Share2, Terminal, RefreshCw, Database, type LucideIcon } from 'lucide-react';
import type { ServiceDetail } from '@/lib/schemas/service-detail';
import ServiceFAQ from '../ServiceFAQ';

const iconMap: Record<string, LucideIcon> = {
    group: Users,
    dashboard: LayoutDashboard,
    settings_applications: Settings,
    shield_person: ShieldCheck,
    analytics: PieChart,
    notifications_active: Bell,
    api: Share2,
    terminal: Terminal,
    rebase_edit: RefreshCw,
    database: Database,
};

export default function SoftwareServiceDetail({ data }: { data: ServiceDetail }) {
    const { customSections } = data;

    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-[540px]">
                        {data.hero.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => trackClick(data.hero.primaryCta, 'Software Hero')}
                            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:translate-y-[-2px] transition-all"
                        >
                            {data.hero.primaryCta}
                        </button>
                        <button
                            onClick={() => trackClick(data.hero.secondaryCta, 'Software Hero')}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all"
                        >
                            {data.hero.secondaryCta}
                        </button>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <div className="aspect-square bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 p-4 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=800"
                                alt="Dashboard Preview"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Case Grid */}
            {customSections?.useCases && (
                <section className="max-w-[1280px] mx-auto px-6 py-20">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{customSections.useCases.title}</h2>
                        <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {customSections.useCases.cards.map((card, idx) => {
                            const Icon = iconMap[card.icon] || Users;
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-8 rounded-2xl hover:border-primary/40 transition-colors shadow-sm">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{card.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {card.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Module Cards */}
            {customSections?.modules && (
                <section className="max-w-[1280px] mx-auto px-6 py-20">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{customSections.modules.title}</h2>
                        <p className="text-slate-600 dark:text-slate-400">{customSections.modules.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {customSections.modules.items.map((item, idx) => {
                            const Icon = iconMap[item.icon] || ShieldCheck;
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex gap-6 items-start hover:border-primary/20 transition-all">
                                    <div className="p-3 bg-primary rounded-lg text-white shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Architecture Section */}
            {customSections?.architecture && (
                <section className="max-w-[1280px] mx-auto px-6 py-20">
                    <div className="bg-primary/5 dark:bg-slate-900/50 border border-primary/10 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{customSections.architecture.title}</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                {customSections.architecture.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-8">
                                {customSections.architecture.techs.map((tech, idx) => {
                                    const Icon = iconMap[tech.icon] || Terminal;
                                    return (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <span className="font-bold text-slate-800 dark:text-slate-200">{tech.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            {customSections.architecture.stats.map((stat, idx) => (
                                <div key={idx} className="bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/40 dark:border-white/10">
                                    <p className="text-primary font-bold text-3xl mb-1">{stat.value}</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process Flow */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Geliştirme Süreci</h2>
                    <p className="text-slate-600 dark:text-slate-400">Fikirden ürüne uzanan şeffaf yol haritamız.</p>
                </div>
                <div className="relative flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto gap-12 md:gap-4">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 -z-10"></div>
                    {data.timeline.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center bg-background-light dark:bg-background-dark px-4 z-10">
                            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 border-4 border-white dark:border-slate-900 shadow-md">
                                {step.step}
                            </div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                                {step.description.split('<br/>').map((line, lIdx) => (
                                    <React.Fragment key={lIdx}>{line}<br /></React.Fragment>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <div className="max-w-[1280px] mx-auto px-6 py-20">
                <ServiceFAQ data={data.faq} />
            </div>

            {/* Final CTA */}
            <section className="max-w-[1280px] mx-auto px-6 py-20 text-center">
                <div className="max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl font-black text-slate-900 dark:text-white">{data.packages[0].ctaText}</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Hemen bir toplantı planlayalım ve hayalinizdeki yazılım projesini birlikte gerçeğe dönüştürmeye ne dersiniz?</p>
                    <button
                        onClick={() => trackClick('Software Final CTA', 'Software Detail')}
                        className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        Teklif Formunu Doldur
                    </button>
                </div>
            </section>
        </div>
    );
}
