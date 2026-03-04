"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { trackClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/schemas/content';

interface ProjectsPreviewProps {
    projects: Project[];
    title: string;
    subtitle: string;
}

export default function ProjectsPreview({ projects, title, subtitle }: ProjectsPreviewProps) {
    return (
        <section className="py-20 bg-white" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-primary dark:text-white mb-4">
                            {title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            {subtitle}
                        </p>
                    </div>
                    <Link
                        href="/projeler"
                        onClick={() => trackClick('Tüm Projeleri Gör', 'Projects Preview Header')}
                        className="hidden md:flex items-center gap-2 group text-primary font-black hover:text-secondary transition-colors mt-8 md:mt-0"
                    >
                        Tüm Projeleri Gör
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {projects.slice(0, 3).map((project) => (
                        <div
                            key={project.slug}
                            className="group bg-neutral-surface/20 dark:bg-slate-800/20 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border border-neutral-border"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-6 left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-4 py-2 rounded-xl text-xs font-black text-secondary shadow-xl">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-black text-primary dark:text-white mb-3 group-hover:text-secondary transition-colors">
                                    {project.title}
                                </h3>
                                {project.description && (
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                )}

                                <div className="flex flex-wrap items-center gap-4">
                                    {project.stats?.map((stat: string, i: number) => (
                                        <span
                                            key={i}
                                            className={cn(
                                                "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black shadow-sm",
                                                i === 0
                                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                            )}
                                        >
                                            {i === 0 ? <TrendingUp size={12} /> : <Zap size={12} />}
                                            {stat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Link */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/projeler"
                        className="inline-flex items-center gap-2 group text-primary font-black hover:text-secondary transition-colors"
                    >
                        Tüm Projeleri Gör
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
