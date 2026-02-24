import React from 'react';
import { Globe } from 'lucide-react';

interface ExpertiseSectionProps {
    data: {
        badge: string;
        title: string;
        description: string;
        stats: Array<{
            label: string;
            value: string;
        }>;
    };
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ data }) => {
    return (
        <section className="mt-12 px-6 py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {data.badge}
                    </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
                            {data.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                            {data.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <div className="text-4xl font-black text-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
