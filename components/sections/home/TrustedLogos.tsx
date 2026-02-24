"use client";

import React from 'react';

export default function TrustedLogos() {
    return (
        <section className="py-10 border-y border-neutral-border bg-neutral-surface/30 dark:bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
                    Türkiye genelinde 200+ KOBİ’lerle çalışıyoruz
                </p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Logo placeholders as text to match design constraints */}
                    <div className="flex items-center gap-1 text-xl font-black text-slate-600 dark:text-slate-400">
                        YILDIZLAR<span className="text-primary/70">GRUP</span>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-black text-slate-600 dark:text-slate-400">
                        <span className="w-7 h-7 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-[10px]">AY</span>
                        ANKARA<span className="font-light">YAPI</span>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-black text-slate-600 dark:text-slate-400">
                        <span className="w-7 h-7 bg-secondary/20 rounded-full flex items-center justify-center text-secondary text-[10px]">KM</span>
                        KONYA<span className="text-secondary">MAKİNE</span>
                    </div>
                    <div className="flex items-center gap-1 text-xl font-black text-slate-600 dark:text-slate-400">
                        KAYSERİ<span className="italic font-serif font-light">Tekstil</span>
                    </div>
                    <div className="flex items-center gap-2 text-xl font-black text-slate-600 dark:text-slate-400">
                        <span className="w-7 h-7 bg-primary/20 rounded flex items-center justify-center text-primary text-[10px]">AL</span>
                        ANADOLU<span className="font-light">LOJİSTİK</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
