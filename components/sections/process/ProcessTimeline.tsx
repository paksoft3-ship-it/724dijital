import React from 'react';
import { ProcessStep } from '@/lib/schemas/process';

interface ProcessTimelineProps {
    steps: ProcessStep[];
}

const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
    return (
        <section className="px-6 relative py-12 max-w-2xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-9 top-12 bottom-12 w-[2px] bg-primary/30"></div>

            <div className="space-y-8 lg:space-y-12">
                {steps.map((step) => (
                    <div key={step.id} className="relative flex items-start gap-6">
                        {/* Timeline Bullet */}
                        <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-slate-900 shadow-sm mt-5 ring-4 ring-primary/10"></div>

                        {/* Content Card */}
                        <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                    ADIM 0{step.id}
                                </span>
                                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-full border border-slate-100 dark:border-slate-700">
                                    {step.duration}
                                </span>
                            </div>

                            <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                                {step.description}
                            </p>

                            <div className="pt-4 border-t border-dashed border-primary/20 bg-slate-50/50 dark:bg-slate-800/30 -mx-6 -mb-6 px-6 pb-6 rounded-b-2xl">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                    TESLİMAT
                                </span>
                                <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                    {step.deliverable}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessTimeline;
