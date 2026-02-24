import React from 'react';

interface TalentMatrixProps {
    data: {
        title: string;
        description: string;
        skills: Array<{ name: string; percentage: number }>;
        stats: Array<{ label: string; value: string }>;
    };
}

const TalentMatrix: React.FC<TalentMatrixProps> = ({ data }) => {
    return (
        <section className="py-24 px-6 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8">
                        {data.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-12">
                        {data.description}
                    </p>

                    <div className="space-y-8">
                        {data.skills.map((skill, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-black text-slate-900 dark:text-white uppercase tracking-wider text-sm">
                                        {skill.name}
                                    </span>
                                    <span className="text-primary font-black text-sm">{skill.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                                    <div
                                        className="bg-primary h-full rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/50 p-12 lg:p-16 rounded-[3rem] shadow-2xl shadow-primary/5 relative overflow-hidden border border-slate-100 dark:border-slate-800">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16 blur-2xl"></div>

                    <div className="grid grid-cols-2 gap-8 relative z-10">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-8 bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 group hover:border-primary/20 transition-all">
                                <p className="text-4xl lg:text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </p>
                                <p className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-widest leading-tight">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TalentMatrix;
