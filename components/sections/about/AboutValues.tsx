import React from 'react';
import { Eye, Zap, BarChart3, ArrowRight, LucideIcon } from 'lucide-react';

interface AboutValuesProps {
    data: {
        title: string;
        subtitle: string;
        items: Array<{
            title: string;
            description: string;
            icon: string;
        }>;
    };
}

const iconMap: Record<string, LucideIcon> = {
    eye: Eye,
    zap: Zap,
    'bar-chart': BarChart3,
};

const AboutValues: React.FC<AboutValuesProps> = ({ data }) => {
    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            {data.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {data.subtitle}
                        </p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm group">
                        Tüm Prensiplerimiz
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {data.items.map((item, idx) => {
                        const Icon = iconMap[item.icon] || Zap;
                        return (
                            <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 group">
                                <span className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-8 h-8" />
                                </span>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutValues;
