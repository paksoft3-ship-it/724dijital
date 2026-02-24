import React from 'react';
import { CheckCircle2, Minus } from 'lucide-react';
import type { ComparisonRowSchema } from '@/lib/schemas/services-page';
import { z } from 'zod';

type ComparisonRow = z.infer<typeof ComparisonRowSchema>;

interface ComparisonTableProps {
    data: {
        title: string;
        subtitle: string;
        columns: string[];
        rows: ComparisonRow[];
    };
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-3">{data.title}</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        {data.subtitle}
                    </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-neutral-border bg-white dark:bg-slate-900/50 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-neutral-border">
                                <th className="p-6 text-sm font-bold text-primary dark:text-white uppercase tracking-wider min-w-[200px]">
                                    Hizmetler
                                </th>
                                {data.columns.map((col) => (
                                    <th key={col} className="p-6 text-center text-sm font-bold text-slate-600 dark:text-slate-300 min-w-[120px]">
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-border">
                            {data.rows.map((row) => (
                                <tr key={row.service} className="group hover:bg-primary/5 transition-colors">
                                    <td className="p-6 font-bold text-slate-900 dark:text-white">
                                        {row.service}
                                    </td>
                                    {data.columns.map((col) => (
                                        <td key={col} className="p-6 text-center">
                                            {row.goals[col] ? (
                                                <CheckCircle2 className="w-6 h-6 text-primary mx-auto" />
                                            ) : (
                                                <Minus className="w-6 h-6 text-slate-300 dark:text-slate-700 mx-auto" />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
