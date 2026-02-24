"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { trackClick } from '@/lib/analytics';
import type { Project } from '@/lib/schemas/content';

interface CaseStudiesV2Props {
    projects: Project[];
    title: string;
}

export default function CaseStudiesV2({ projects, title }: CaseStudiesV2Props) {
    return (
        <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <h2 className="text-accent-teal font-semibold tracking-wider uppercase text-xs mb-2">Başarı Hikayeleri</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">{title}</h3>
                    </div>
                    <Link
                        href="/projeler"
                        onClick={() => trackClick('Tüm Projeleri Gör', 'Case Studies V2 Header')}
                        className="text-primary dark:text-white font-black hover:text-accent-teal transition-colors flex items-center gap-1 group"
                    >
                        Tüm Projeleri Gör <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 3).map((project) => (
                        <article
                            key={project.slug}
                            className="group relative overflow-hidden rounded-xl bg-slate-50 dark:bg-primary shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100 dark:border-slate-800"
                        >
                            <div className="aspect-[16/10] relative overflow-hidden bg-slate-200">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    <span className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-accent-teal text-[10px] font-black uppercase tracking-widest rounded-lg border border-teal-100 dark:border-teal-800">
                                        {project.category}
                                    </span>
                                    {/* Mock location tag to match design */}
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                        Ankara
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold text-primary dark:text-white mb-3 group-hover:text-accent-teal transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed">
                                    {project.description || "Bölgesel büyüme ve dijitalleşme odaklı özel yazılım çözümü."}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
