import React from 'react';
import Image from 'next/image';
import { Share2 } from 'lucide-react';
import { TeamMember } from '@/lib/schemas/team';

interface TeamGridProps {
    data: {
        title: string;
        subtitle: string;
        members: TeamMember[];
    };
}

const TeamGrid: React.FC<TeamGridProps> = ({ data }) => {
    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                        {data.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        {data.subtitle}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.members.map((member) => (
                        <div key={member.id} className="group">
                            <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg shadow-primary/5">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary cursor-pointer hover:bg-primary hover:text-white transition-all shadow-xl">
                                        <Share2 className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">
                                {member.name}
                            </h4>
                            <p className="text-primary font-black text-xs uppercase tracking-widest mb-4">
                                {member.role}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {member.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-full border border-slate-100 dark:border-slate-800 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;
