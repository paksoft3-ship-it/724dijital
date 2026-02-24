"use client";

import React from 'react';
import { trackClick } from '@/lib/analytics';

interface MobileServiceCTAProps {
    startingPrice: string;
}

export default function MobileServiceCTA({ startingPrice }: MobileServiceCTAProps) {
    return (
        <div className="lg:hidden fixed bottom-14 left-0 w-full bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-4 z-40 shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4">
            <div className="flex-1">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">Başlangıç</div>
                <div className="font-black text-slate-900 dark:text-white text-lg leading-none">
                    {startingPrice} <span className="text-[10px] font-normal text-slate-400">+ KDV</span>
                </div>
            </div>
            <button
                onClick={() => trackClick('Teklif Al Mobile Bottom', 'Service Detail Mobile')}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-black shadow-xl shadow-primary/20 transition-all active:scale-95"
            >
                Teklif Al
            </button>
        </div>
    );
}
