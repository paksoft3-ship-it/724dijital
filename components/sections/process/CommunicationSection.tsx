import React from 'react';
import { BarChart3 } from 'lucide-react';

interface CommunicationSectionProps {
    data: {
        title: string;
        subtitle: string;
        description: string;
    };
}

const CommunicationSection: React.FC<CommunicationSectionProps> = ({ data }) => {
    return (
        <section className="px-6 py-12 max-w-2xl mx-auto">
            <h3 className="text-slate-900 dark:text-white text-2xl font-bold mb-6">{data.title}</h3>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-primary/5 flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-8 h-8" />
                </div>
                <div className="text-center sm:text-left">
                    <h4 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{data.subtitle}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                        {data.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CommunicationSection;
