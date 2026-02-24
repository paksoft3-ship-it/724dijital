"use client";

import React from 'react';
import Image from 'next/image';
import { trackClick } from '@/lib/analytics';
import { CheckCircle, Bolt, Frown, UserCog, MonitorSmartphone, Search, Shield, BarChart, type LucideIcon } from 'lucide-react';
import type { ServiceDetail } from '@/lib/schemas/service-detail';
import ServiceFAQ from '../ServiceFAQ';

const iconMap: Record<string, LucideIcon> = {
    bolt: Bolt,
    sentiment_dissatisfied: Frown,
    settings_account_box: UserCog,
    devices: MonitorSmartphone,
    search: Search,
    shield: Shield,
    bar_chart: BarChart,
};

export default function WebServiceDetail({ data }: { data: ServiceDetail }) {
    const { customSections } = data;

    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Custom Hero */}
            <section className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-16 md:py-24">
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">{data.hero.badge}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                        {data.hero.title.split(' ile ').map((part, i) => (
                            i === 1 ? <span key={i} className="text-primary"> ile {part}</span> : part
                        ))}
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                        {data.hero.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => trackClick(data.hero.primaryCta, 'Web Hero')}
                            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/20"
                        >
                            {data.hero.primaryCta}
                        </button>
                        <button
                            onClick={() => trackClick(data.hero.secondaryCta, 'Web Hero')}
                            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-900 dark:text-white px-8 py-4 rounded-xl text-base font-bold transition-all"
                        >
                            {data.hero.secondaryCta}
                        </button>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="w-full aspect-square bg-gradient-to-tr from-primary/10 to-white dark:to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
                        <div className="relative p-8 h-full flex flex-col justify-end">
                            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Search className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 font-bold uppercase">Performans Skoru</div>
                                        <div className="text-2xl font-black text-slate-900 dark:text-white">99/100</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            {customSections?.problem && (
                <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{customSections.problem.title}</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{customSections.problem.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {customSections.problem.cards.map((card, idx) => {
                            const Icon = iconMap[card.icon] || Bolt;
                            const colorClass = card.color === 'red' ? 'bg-red-50 text-red-500' :
                                card.color === 'orange' ? 'bg-orange-50 text-orange-500' :
                                    'bg-blue-50 text-blue-500';
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colorClass}`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{card.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{card.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Solution Section */}
            {customSections?.solutions && (
                <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-24 bg-primary/5 dark:bg-primary/10 rounded-[3rem] my-10 overflow-hidden relative">
                    <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{customSections.solutions.title}</h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">{customSections.solutions.subtitle}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {customSections.solutions.checkmarks.map((check, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="text-primary w-5 h-5" />
                                        <span className="font-semibold text-slate-800 dark:text-slate-200">{check}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                {customSections.solutions.grid.map((item, idx) => {
                                    const Icon = iconMap[item.icon] || MonitorSmartphone;
                                    return (
                                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-primary/10 text-center">
                                            <Icon className="text-primary w-10 h-10 mx-auto mb-2" />
                                            <p className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Tech Stack - Reusing or Custom? I'll re-implement for parity */}
            <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Kullandığımız Teknolojiler</h2>
                    <p className="text-slate-600 dark:text-slate-400">Sektör lideri araçlarla en iyi performansı garanti ediyoruz.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {data.techStack.map((tech, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-8 py-6 rounded-xl flex items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-default">
                            <span className="font-bold text-lg text-slate-800 dark:text-white">{tech.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 bg-white dark:bg-slate-900 rounded-[3rem] my-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Başarıya Giden Yol Haritamız</h2>
                    <p className="text-slate-600 dark:text-slate-400">Şeffaf ve planlı bir süreçle hayallerinizi gerçeğe dönüştürüyoruz.</p>
                </div>
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 hidden md:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {data.timeline.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 ring-8 ring-white dark:ring-slate-900 shadow-lg font-bold">
                                    {step.step}
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Case Studies */}
            {customSections?.customCases && (
                <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-10">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Başarı Hikayelerimiz</h2>
                            <p className="text-slate-600 dark:text-slate-400Small">Müşterilerimiz için yarattığımız farkı rakamlarla görün.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {customSections.customCases.map((caseItem, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800">
                                    <Image
                                        src={caseItem.image}
                                        alt={caseItem.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {caseItem.stats.map((stat, sIdx) => (
                                            <span key={sIdx} className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                                {stat.value} {stat.label}
                                            </span>
                                        ))}
                                        <span className="bg-slate-900/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                                            {caseItem.category}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{caseItem.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{caseItem.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ */}
            <div className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
                <ServiceFAQ data={data.faq} />
            </div>

            {/* Final CTA */}
            <section className="max-w-[1280px] mx-auto px-6 md:px-20 py-20">
                <div className="bg-slate-900 dark:bg-black rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Dijital Dönüşümünüzü <br /> Bugün Başlatın</h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg">
                            Mevcut sitenizi analiz edelim ve size en uygun stratejiyi birlikte kuralım.
                        </p>
                        <div className="pt-6">
                            <button
                                onClick={() => trackClick('Web Final CTA', 'Web Detail')}
                                className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-xl text-lg font-black transition-all shadow-xl shadow-primary/30"
                            >
                                Web Sitemi Yenilemek İstiyorum
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
