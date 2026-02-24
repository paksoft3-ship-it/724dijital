"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackClick } from '@/lib/analytics';
import type { ServicePackage } from '@/lib/schemas/service-detail';

interface ServicePackagesProps {
    data: ServicePackage[];
}

export default function ServicePackages({ data }: ServicePackagesProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Paket Seçenekleri
            </h2>
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
                {data.map((pkg, index) => (
                    <div
                        key={index}
                        className={cn(
                            "bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border flex flex-col transition-all duration-300",
                            pkg.isPopular
                                ? "border-primary border-2 shadow-2xl shadow-primary/10 relative -translate-y-2 z-10"
                                : "border-slate-200 dark:border-slate-800 hover:border-primary/30"
                        )}
                    >
                        {pkg.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                POPÜLER
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className={cn(
                                "text-lg font-extrabold mb-2",
                                pkg.isPopular ? "text-primary" : "text-slate-900 dark:text-white"
                            )}>
                                {pkg.title}
                            </h3>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">
                                {pkg.price}
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {pkg.features.map((feature, fIndex) => (
                                <li key={fIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-3">
                                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span className="font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => trackClick(pkg.title, 'Service Detail Packages')}
                            className={cn(
                                "w-full py-3.5 rounded-xl text-sm font-bold transition-all transform active:scale-95",
                                pkg.isPopular
                                    ? "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark"
                                    : "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                            )}
                        >
                            {pkg.ctaText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
