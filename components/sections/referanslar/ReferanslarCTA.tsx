"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';

const ReferanslarCTA = () => {
    return (
        <section className="px-6 py-24 max-w-7xl mx-auto text-center">
            <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-primary/20">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 leading-tight">
                        Sizin Hikayenizi de Birlikte Yazalım
                    </h2>
                    <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                        Dijital hedeflerinize ulaşmanız için profesyonel ekibimizle yanınızdayız. Şimdi ilk adımı atın.
                    </p>
                    <button
                        onClick={() => trackClick('Start Project', 'Referanslar CTA')}
                        className="bg-white text-primary hover:bg-slate-50 font-black py-5 px-10 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 mx-auto"
                    >
                        <span>Projeyi Başlatın</span>
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReferanslarCTA;
