"use client";
import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/schemas/service-detail';

interface ServiceFAQProps {
    data: FAQItem[];
}

export default function ServiceFAQ({ data }: ServiceFAQProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
                {data.map((item, index) => (
                    <details
                        key={index}
                        className="group bg-surface-light dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 hover:border-primary/30"
                    >
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-900 dark:text-white list-none">
                            <span>{item.question}</span>
                            <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" />
                        </summary>
                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed pt-2">
                            <div className="w-full h-px bg-slate-100 dark:bg-slate-800 mb-4" />
                            {item.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
