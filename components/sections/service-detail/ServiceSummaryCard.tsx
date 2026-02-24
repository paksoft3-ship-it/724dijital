"use client";

import React from 'react';
import Image from 'next/image';
import { Clock, CreditCard, Package, ArrowRight } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface ServiceSummaryCardProps {
    data: {
        duration: string;
        startingPrice: string;
        format: string;
        contactPerson: {
            name: string;
            role: string;
            image: string;
        };
    };
    serviceTitle: string;
}

export default function ServiceSummaryCard({ data, serviceTitle }: ServiceSummaryCardProps) {
    return (
        <aside className="hidden lg:block lg:col-span-4 relative h-full">
            <div className="sticky top-24 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-primary-dark p-8">
                    <h3 className="text-white text-lg font-extrabold">Hizmet Özeti</h3>
                    <p className="text-slate-300 text-sm mt-1">{serviceTitle}</p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Key Metric 1 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">Tahmini Süre</div>
                            <div className="text-slate-900 dark:text-white font-bold leading-tight">{data.duration}</div>
                        </div>
                    </div>

                    {/* Key Metric 2 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">Başlangıç Fiyatı</div>
                            <div className="text-slate-900 dark:text-white font-bold leading-tight">{data.startingPrice} <span className="text-xs text-slate-400 font-normal ml-1">+ KDV</span></div>
                        </div>
                    </div>

                    {/* Key Metric 3 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <Package className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest mb-1">Teslim Formatı</div>
                            <div className="text-slate-900 dark:text-white font-bold leading-tight">{data.format}</div>
                        </div>
                    </div>

                    <div className="h-px bg-slate-100 dark:bg-slate-800" />

                    <div className="space-y-3">
                        <button
                            onClick={() => trackClick('Teklif Al Sidebar', 'Service Detail Summary')}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group"
                        >
                            <span>Teklif Al</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 font-medium">
                            1 iş günü içinde dönüş yapıyoruz.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 ring-2 ring-primary/20">
                        <Image
                            src={data.contactPerson.image}
                            alt={data.contactPerson.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Sorularınız mı var?</div>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white">{data.contactPerson.name}</div>
                        <div className="text-[10px] text-primary font-bold">{data.contactPerson.role}</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
