"use client";
import React from 'react';
import { Store, Building2, Building, Globe, Zap, Smartphone, Search, BarChart, Settings, Code, Megaphone, Target, type LucideIcon } from 'lucide-react';
import type { TargetAudienceItem } from '@/lib/schemas/service-detail';

const iconMap: Record<string, LucideIcon> = {
    storefront: Store,
    business: Building2,
    domain: Building,
    public: Globe,
    bolt: Zap,
    smartphone: Smartphone,
    search: Search,
    bar_chart: BarChart,
    settings: Settings,
    code: Code,
    megaphone: Megaphone,
    target: Target,
    precision_manufacturing: Settings, // Fallback
};

interface ServiceTargetAudienceProps {
    data: TargetAudienceItem[];
}

export default function ServiceTargetAudience({ data }: ServiceTargetAudienceProps) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                Kimler İçin Uygun?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                {data.map((item, index) => {
                    const Icon = iconMap[item.icon] || Target;
                    return (
                        <div key={index} className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
