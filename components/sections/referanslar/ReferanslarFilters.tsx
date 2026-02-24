"use client";

import React, { useState } from 'react';

interface ReferanslarFiltersProps {
    services: string[];
    sectors: string[];
}

const ReferanslarFilters: React.FC<ReferanslarFiltersProps> = ({ services, sectors }) => {
    const [activeService, setActiveService] = useState('Tümü');
    const [activeSector, setActiveSector] = useState('Tümü');

    return (
        <section className="px-6 py-8 max-w-7xl mx-auto space-y-6">
            <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Hizmete Göre</span>
                <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                        <button
                            key={s}
                            onClick={() => setActiveService(s)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeService === s
                                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary/30'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Sektöre Göre</span>
                <div className="flex flex-wrap gap-2">
                    {sectors.map((s) => (
                        <button
                            key={s}
                            onClick={() => setActiveSector(s)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${activeSector === s
                                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary/30'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReferanslarFilters;
