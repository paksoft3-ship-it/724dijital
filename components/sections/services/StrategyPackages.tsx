import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { StrategyPackageSchema } from '@/lib/schemas/services-page';
import { z } from 'zod';

type StrategyPackage = z.infer<typeof StrategyPackageSchema>;

interface StrategyPackagesProps {
    data: {
        badge: string;
        title: string;
        subtitle: string;
        packages: StrategyPackage[];
    };
}

export default function StrategyPackages({ data }: StrategyPackagesProps) {
    return (
        <section className="py-20 relative overflow-hidden bg-white dark:bg-slate-900/10">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
                        {data.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary dark:text-white">
                        {data.title}
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
                    {data.packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={cn(
                                "group bg-neutral-surface dark:bg-slate-800/80 rounded-2xl p-8 border-t-4 shadow-lg relative transition-all duration-300 hover:-translate-y-2",
                                pkg.id === 'starter' ? "border-slate-300 dark:border-slate-600" :
                                    pkg.id === 'growth' ? "border-primary scale-105 z-10 shadow-primary/10 shadow-2xl" :
                                        "border-secondary"
                            )}
                        >
                            {pkg.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
                                    En Çok Tercih Edilen
                                </div>
                            )}

                            <div className="absolute top-8 right-8 text-primary/10 dark:text-white/5 text-6xl font-black -z-0">
                                {pkg.stepNumber}
                            </div>

                            <div className="relative z-10">
                                <h3 className={cn(
                                    "text-2xl font-extrabold mb-4",
                                    pkg.id === 'growth' ? "text-primary" : "text-primary dark:text-white"
                                )}>
                                    {pkg.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                                    {pkg.description}
                                </p>

                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-slate-700 dark:text-slate-300">
                                            <Check className={cn(
                                                "w-5 h-5 mr-3 mt-0.5 shrink-0",
                                                pkg.id === 'growth' ? "text-primary" : "text-slate-400 dark:text-slate-600"
                                            )} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
