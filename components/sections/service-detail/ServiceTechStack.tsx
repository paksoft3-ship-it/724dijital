"use client";
import React from 'react';
import { Code, Cloud, Database, Layout, Smartphone, PieChart, Activity, Workflow, type LucideIcon } from 'lucide-react';
import type { TechItem } from '@/lib/schemas/service-detail';

const iconMap: Record<string, LucideIcon> = {
    code: Code,
    storage: Database,
    cloud: Cloud,
    css: Layout,
    smartphone: Smartphone,
    analytics: PieChart,
    ads_click: Activity,
    query_stats: Activity,
    description: Workflow,
    logo_dev: Code,
};

interface ServiceTechStackProps {
    data: TechItem[];
}

export default function ServiceTechStack({ data }: ServiceTechStackProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Kullandığımız Teknolojiler
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.map((item, index) => {
                    const Icon = iconMap[item.icon] || Code;
                    return (
                        <div key={index} className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:shadow-md transition-all group">
                            <Icon className="w-10 h-10 text-slate-400 group-hover:text-primary transition-colors" />
                            <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">
                                {item.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
