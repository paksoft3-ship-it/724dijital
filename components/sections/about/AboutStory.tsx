import React from 'react';
import { Rocket, Trophy, BarChart3, LucideIcon } from 'lucide-react';

interface AboutStoryProps {
    data: {
        title: string;
        subtitle: string;
        milestones: Array<{
            year: string;
            title: string;
            description: string;
            icon?: string;
        }>;
    };
}

const iconMap: Record<string, LucideIcon> = {
    rocket: Rocket,
    trophy: Trophy,
    analytics: BarChart3,
};

const AboutStory: React.FC<AboutStoryProps> = ({ data }) => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                        {data.title}
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                <div className="relative px-4">
                    {/* Horizontal Line for Desktop */}
                    <div className="absolute top-[40px] left-0 w-full h-1 bg-slate-50 dark:bg-slate-800 hidden lg:block"></div>

                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {data.milestones.map((milestone, idx) => {
                            const Icon = milestone.icon ? iconMap[milestone.icon] : Rocket;
                            return (
                                <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] text-center lg:text-left group border border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
                                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8 mx-auto lg:mx-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6 group-hover:scale-110 shadow-lg shadow-primary/5">
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <span className="text-primary font-black text-sm block mb-4 tracking-widest bg-primary/5 px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0 border border-primary/10">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                        {milestone.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
