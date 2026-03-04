"use client";

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    image: string;
}

interface TestimonialsProps {
    data: Testimonial[];
}

export default function Testimonials({ data }: TestimonialsProps) {
    return (
        <section className="py-20 bg-[#F5F7FA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center text-primary dark:text-white mb-12 px-4">
                    Müşterilerimiz Ne Diyor?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-neutral-border relative group hover:-translate-y-2 transition-transform duration-500"
                        >
                            <Quote className="text-secondary/10 text-8xl absolute top-8 right-8 group-hover:text-secondary/20 transition-colors" size={64} strokeWidth={4} />

                            <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10 text-base leading-relaxed">
                                &quot;{item.quote}&quot;
                            </p>

                            <div className="flex items-center gap-5 mt-auto">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-secondary rounded-full blur group-hover:blur-md transition-all"></div>
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 rounded-full object-cover relative border-2 border-white dark:border-slate-800"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-black text-primary dark:text-white text-lg">{item.author}</h4>
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
