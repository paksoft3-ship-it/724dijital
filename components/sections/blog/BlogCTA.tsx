"use client";

import React from 'react';
import { Rocket, MessageSquare } from 'lucide-react';
import { trackClick } from '@/lib/analytics';

interface BlogCTAProps {
    data: {
        title: string;
        subtitle: string;
        primaryButton: string;
        secondaryButton: string;
    };
}

const BlogCTA: React.FC<BlogCTAProps> = ({ data }) => {
    return (
        <section className="mt-20 py-24 bg-slate-900 relative overflow-hidden rounded-[4rem] mx-6">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                    {data.title}
                </h2>
                <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                    {data.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button
                        onClick={() => trackClick(data.primaryButton, 'Blog Page Bottom CTA')}
                        className="w-full sm:w-auto px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black shadow-2xl shadow-primary/20 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                    >
                        <Rocket className="w-5 h-5" />
                        {data.primaryButton}
                    </button>
                    <button
                        onClick={() => trackClick(data.secondaryButton, 'Blog Page WhatsApp CTA')}
                        className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="w-5 h-5" />
                        {data.secondaryButton}
                    </button>
                </div>
            </div>

            {/* Decorative abstract patterns */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full text-primary fill-current" viewBox="0 0 100 100">
                    <circle cx="80" cy="20" r="40"></circle>
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-1/4 h-full opacity-5 pointer-events-none transform rotate-180">
                <svg className="w-full h-full text-white fill-current" viewBox="0 0 100 100">
                    <path d="M0,100 L100,0 L100,100 Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default BlogCTA;
