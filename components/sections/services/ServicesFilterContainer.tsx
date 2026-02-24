"use client";

import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import type { Service } from '@/lib/schemas/content';
import ServicesGrid from './ServicesGrid';

interface ServicesFilterContainerProps {
    filters: Array<{ id: string; label: string }>;
    allServices: Service[];
}

export default function ServicesFilterContainer({ filters, allServices }: ServicesFilterContainerProps) {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredServices = useMemo(() => {
        if (activeFilter === 'all') return allServices;
        return allServices.filter(s => s.category === activeFilter);
    }, [activeFilter, allServices]);

    return (
        <>
            <section className="pb-8 pt-4 sticky top-12 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-all duration-300 border-b border-neutral-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={cn(
                                    "px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-sm",
                                    activeFilter === filter.id
                                        ? "bg-primary text-white scale-105 shadow-primary/20"
                                        : "bg-white dark:bg-slate-800 border border-neutral-border text-slate-600 dark:text-slate-300 hover:border-primary/50"
                                )}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <ServicesGrid services={filteredServices} />
        </>
    );
}
