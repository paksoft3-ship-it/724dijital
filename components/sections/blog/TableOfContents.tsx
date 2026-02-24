"use client";

import React, { useState } from 'react';
import { List, ChevronDown } from 'lucide-react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TOCItem[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(true);

    if (items.length === 0) return null;

    return (
        <div className="mb-10 lg:mb-0">
            {/* Mobile View */}
            <div className="lg:hidden">
                <details
                    className="group bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800"
                    open={isOpen}
                    onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
                >
                    <summary className="flex cursor-pointer items-center justify-between p-5 list-none">
                        <div className="flex items-center gap-3">
                            <List className="text-primary w-5 h-5" />
                            <span className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest">İçindekiler</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </summary>
                    <div className="px-5 pb-5 flex flex-col gap-4">
                        {items.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary flex items-center gap-3 font-medium transition-colors"
                            >
                                <span className="size-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                {item.text}
                            </a>
                        ))}
                    </div>
                </details>
            </div>

            {/* Desktop View (Sticky Sidebar style) */}
            <div className="hidden lg:block sticky top-32 bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <List className="text-primary w-5 h-5" />
                    <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase tracking-widest">İçindekiler</h4>
                </div>
                <nav className="flex flex-col gap-5">
                    {items.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary flex items-center gap-3 font-black transition-all group"
                        >
                            <span className="size-2 rounded-full border-2 border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all flex-shrink-0"></span>
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default TableOfContents;
