"use client";
import React from 'react';
import type { TimelineStep } from '@/lib/schemas/service-detail';

interface ServiceTimelineProps {
    data: TimelineStep[];
}

export default function ServiceTimeline({ data }: ServiceTimelineProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Süreç ve Teslim Takvimi
            </h2>
            <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12 ml-4">
                {data.map((step) => (
                    <div key={step.step} className="relative">
                        <div className="absolute -left-[41px] bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-background-light dark:ring-background-dark">
                            {step.step}
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                {step.title} <span className="text-primary dark:text-primary-light ml-2 text-sm font-semibold">({step.duration})</span>
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
