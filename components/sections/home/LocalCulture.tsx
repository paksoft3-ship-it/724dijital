"use client";

import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function LocalCulture() {
    const regions = [
        { name: 'ANKARA', top: '30%', left: '40%', delay: '0s' },
        { name: 'KONYA', top: '60%', left: '45%', delay: '0.5s' },
        { name: 'KAYSERİ', top: '50%', left: '70%', delay: '1s' },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-extrabold text-primary dark:text-white mb-6 leading-tight">
                            Ankara, Konya ve Kayseri&apos;de <br />
                            <span className="text-secondary">Yerel İş Yapış Kültürü</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Sadece kod yazmıyoruz, bölgenin ticaret dinamiklerini biliyoruz. Yüz yüze iletişime önem veriyor, sanayicinin ve KOBİ&apos;nin dilinden anlıyoruz.
                        </p>
                        <ul className="space-y-6 mb-8">
                            {[
                                'Yerinde ziyaret ve analiz imkanı.',
                                '7/24 ulaşılabilir yerel destek ekibi.',
                                'Bölgesel teşvik ve hibeler konusunda danışmanlık.',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className="bg-secondary/10 text-secondary rounded-full p-1 group-hover:bg-secondary group-hover:text-white transition-colors">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span className="text-base font-bold text-slate-700 dark:text-slate-300">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative h-[500px] w-full bg-neutral-surface/30 dark:bg-slate-800/40 rounded-[3rem] shadow-2xl border border-neutral-border p-12 flex items-center justify-center overflow-hidden">
                        {/* Abstract Map Representation */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#14b825 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <div className="relative w-full h-full">
                            {/* Map SVG Placeholder (Simplified Map of Turkey Focus) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <MapPin size={300} strokeWidth={0.5} className="text-primary" />
                            </div>

                            {/* Pins */}
                            {regions.map((region) => (
                                <div
                                    key={region.name}
                                    className="absolute flex flex-col items-center group cursor-pointer transition-transform hover:scale-125"
                                    style={{ top: region.top, left: region.left }}
                                >
                                    <div
                                        className="w-6 h-6 bg-secondary rounded-full animate-ping absolute"
                                        style={{ animationDelay: region.delay }}
                                    ></div>
                                    <div className="w-6 h-6 bg-secondary rounded-full relative z-10 border-4 border-white dark:border-slate-800 shadow-lg"></div>
                                    <span className="mt-2 text-xs font-black text-primary dark:text-white bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl shadow-2xl border border-neutral-border uppercase tracking-widest">
                                        {region.name}
                                    </span>

                                    {/* Tooltip on hover */}
                                    <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-lg whitespace-nowrap shadow-xl">
                                        Yerel Ofisimiz
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
