"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface BlogHeroProps {
    data: {
        title: string;
        placeholder: string;
    };
    categories: string[];
    onSearch: (term: string) => void;
    onCategoryChange: (category: string) => void;
}

const BlogHero: React.FC<BlogHeroProps> = ({ data, categories, onSearch, onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState('Hepsi');

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        onCategoryChange(cat);
    };

    return (
        <section className="text-center mb-16 pt-12 px-6">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight leading-tight max-w-3xl mx-auto">
                {data.title}
            </h1>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10 relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                </div>
                <input
                    type="text"
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder={data.placeholder}
                    className="w-full pl-12 pr-4 py-5 bg-white dark:bg-slate-900 border-none shadow-xl shadow-slate-200/50 dark:shadow-none dark:ring-1 dark:ring-slate-800 rounded-2xl focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 text-lg transition-all"
                />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105'
                                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary hover:border-primary/30 border-slate-100 dark:border-slate-800'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default BlogHero;
