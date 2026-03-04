"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessStep {
    number: number;
    title: string;
    description: string;
}

interface WorkingProcessProps {
    steps: ProcessStep[];
}

export default function WorkingProcess({ steps }: WorkingProcessProps) {
    return (
        <section className="py-20 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-primary dark:text-white mb-4">
                        Nasıl Çalışıyoruz?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto italic">
                        Şeffaf, planlı ve sonuç odaklı 5 adımlı sürecimiz.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.number} className="group flex flex-col items-center text-center">
                                <div
                                    className={cn(
                                        "w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black mb-8 transition-all duration-500 shadow-xl",
                                        index === 0
                                            ? "bg-primary text-white scale-110 shadow-primary/40 ring-4 ring-primary/20"
                                            : "bg-white dark:bg-slate-800 text-primary border-4 border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-primary/40 group-hover:ring-4 group-hover:ring-primary/20"
                                    )}
                                >
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
