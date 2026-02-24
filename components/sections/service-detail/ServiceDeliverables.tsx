import React from 'react';
import { Check } from 'lucide-react';

interface ServiceDeliverablesProps {
    data: string[];
}

export default function ServiceDeliverables({ data }: ServiceDeliverablesProps) {
    return (
        <section className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Paket İçeriği: Neler Dahil?
            </h2>
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                {data.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                            <Check className="text-primary w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
