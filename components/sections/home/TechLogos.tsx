"use client";

import React from 'react';
import { Code, Database, ShoppingBag, Cloud, Smartphone, Zap } from 'lucide-react';

export default function TechLogos() {
    const techs = [
        { name: 'Next.js', Icon: Code },
        { name: 'Python', Icon: Zap },
        { name: 'Shopify', Icon: ShoppingBag },
        { name: 'PostgreSQL', Icon: Database },
        { name: 'AWS', Icon: Cloud },
        { name: 'Flutter', Icon: Smartphone },
    ];

    return (
        <section className="py-16 border-y border-neutral-border bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-black text-slate-500 uppercase tracking-widest mb-8">
                    Kullandığımız Teknolojiler
                </p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-60">
                    {techs.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-2.5 group cursor-pointer">
                            <div className="p-2.5 bg-neutral-surface dark:bg-slate-800 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                                <tech.Icon size={24} />
                            </div>
                            <span className="text-xl font-black text-primary dark:text-slate-300 group-hover:text-primary transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
