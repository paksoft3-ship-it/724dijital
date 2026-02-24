"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';
import { LucideIcon, Terminal, Database, Activity, Share2, Settings, LogIn, Cpu, LogOut, Bell, Shield, ShieldCheck, Gauge } from 'lucide-react';
import type { ServiceDetail } from '@/lib/schemas/service-detail';

const iconMap: Record<string, LucideIcon> = {
    terminal: Terminal,
    database: Database,
    monitoring: Activity,
    api: Share2,
    settings_suggest: Settings,
    input: LogIn,
    memory: Cpu,
    output: LogOut,
    notifications_active: Bell,
    shield: Shield,
    shield_check: ShieldCheck,
    gauge: Gauge,
};

export default function PythonServiceDetail({ data }: { data: ServiceDetail }) {
    const { customSections } = data;

    return (
        <div className="bg-background-light dark:bg-background-dark">
            {/* Hero Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-20 lg:py-32 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-10 shadow-sm border border-primary/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {data.hero.badge}
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight max-w-4xl">
                    Tekrarlayan İşleri <span className="text-primary italic">Python</span> ile Otomatikleştirin
                </h1>
                <p className="mt-10 text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                    {data.hero.subtitle}
                </p>
                <div className="mt-14 flex flex-wrap justify-center gap-5">
                    <button
                        onClick={() => trackClick(data.hero.primaryCta, 'Python Hero')}
                        className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-primary/30"
                    >
                        {data.hero.primaryCta}
                    </button>
                    <button
                        onClick={() => trackClick(data.hero.secondaryCta, 'Python Hero')}
                        className="bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-800 dark:text-white px-12 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                    >
                        {data.hero.secondaryCta}
                    </button>
                </div>
            </section>

            {/* Use Case Grid */}
            {customSections?.useCases && (
                <section className="bg-white dark:bg-slate-900/50 py-24 border-t border-slate-100 dark:border-slate-800">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="mb-20 text-center md:text-left">
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white">{customSections.useCases.title}</h2>
                            <p className="mt-4 text-slate-500 font-medium">{customSections.useCases.subtitle}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {customSections.useCases.cards.map((card, idx) => {
                                const Icon = iconMap[card.icon] || Database;
                                return (
                                    <div key={idx} className="bg-slate-50 dark:bg-slate-800/80 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                                        <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{card.title}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Flow Chart Section */}
            {customSections?.modules && (
                <section className="py-24 px-6">
                    <div className="max-w-[1280px] mx-auto bg-primary/5 dark:bg-primary/10 rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden text-center">
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-20 relative z-10">{customSections.modules.title}</h2>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4">
                            {customSections.modules.items.map((item, idx) => {
                                const Icon = iconMap[item.icon] || LogIn;
                                return (
                                    <React.Fragment key={idx}>
                                        <div className="flex flex-col items-center max-w-[200px]">
                                            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full shadow-lg border-4 border-slate-100 dark:border-slate-900 flex items-center justify-center text-primary mb-6 animate-pulse-subtle">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <span className="text-slate-900 dark:text-white font-black">{item.title}</span>
                                            <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest">{item.description}</p>
                                        </div>
                                        {idx < customSections.modules!.items.length - 1 && (
                                            <div className="hidden lg:block w-full h-0.5 bg-primary/20 relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-8 border-l-primary/20 border-y-4 border-y-transparent"></div>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Trust Box */}
            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
                    <div className="max-w-xl relative z-10">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-500/20">
                            <ShieldCheck className="w-4 h-4" /> Güvenlik Birinci Sırada
                        </div>
                        <h3 className="text-3xl font-black text-white mb-6">Etik Veri Kullanımı ve Gizlilik</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Tüm otomasyon süreçlerimizde KVKK uyumluluğu ve veri gizliliği en öncelikli kuralımızdır. Geliştirdiğimiz çözümler en yüksek güvenlik standartlarına göre test edilir.
                        </p>
                    </div>
                    <div className="bg-slate-800/50 p-12 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center backdrop-blur-sm min-w-[280px]">
                        <Shield className="w-16 h-16 text-primary mb-6" />
                        <span className="text-white font-black text-xl mb-2">AES-256</span>
                        <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">Uçtan Uca Şifreleme</span>
                    </div>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl">
                    Sürecinizi Otomatikleştirelim
                </button>
            </div>
        </div>
    );
}
