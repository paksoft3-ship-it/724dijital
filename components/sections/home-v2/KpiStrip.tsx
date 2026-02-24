"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface Kpi {
    label: string;
    value: string;
}

interface KpiStripProps {
    stats: Kpi[];
}

export default function KpiStrip({ stats }: KpiStripProps) {
    return (
        <div className="relative -mt-10 z-20 max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className={cn(
                            "text-center md:text-left pr-4",
                            index !== stats.length - 1 && "border-r border-slate-100 dark:border-slate-700"
                        )}
                    >
                        <div className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-0.5">
                            {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
