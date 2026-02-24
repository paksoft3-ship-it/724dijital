"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BlogFilterBarProps {
    filters: {
        difficulty: string[];
        readTime: string[];
        cities: string[];
    };
    onFilterChange: (type: string, value: string) => void;
    onSortChange: (value: string) => void;
}

const BlogFilterBar: React.FC<BlogFilterBarProps> = ({ filters, onFilterChange, onSortChange }) => {
    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 mb-12 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-4">
                {/* Difficulty Filter */}
                <div className="relative">
                    <select
                        onChange={(e) => onFilterChange('difficulty', e.target.value)}
                        className="appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-4 pr-10 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary cursor-pointer w-full lg:w-auto"
                    >
                        {filters.difficulty.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-4 h-4" />
                </div>

                {/* Read Time Filter */}
                <div className="relative">
                    <select
                        onChange={(e) => onFilterChange('readTime', e.target.value)}
                        className="appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-4 pr-10 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary cursor-pointer w-full lg:w-auto"
                    >
                        {filters.readTime.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-4 h-4" />
                </div>

                {/* City Filter */}
                <div className="relative">
                    <select
                        onChange={(e) => onFilterChange('city', e.target.value)}
                        className="appearance-none bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-4 pr-10 text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary cursor-pointer w-full lg:w-auto"
                    >
                        {filters.cities.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-4 h-4" />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sıralama</span>
                <select
                    onChange={(e) => onSortChange(e.target.value)}
                    className="bg-transparent border-none text-sm font-black text-primary focus:ring-0 cursor-pointer"
                >
                    <option value="newest">En Yeni</option>
                    <option value="popular">En Çok Okunan</option>
                    <option value="oldest">En Eski</option>
                </select>
            </div>
        </div>
    );
};

export default BlogFilterBar;
