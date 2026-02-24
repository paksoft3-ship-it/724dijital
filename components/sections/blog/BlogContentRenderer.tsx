"use client";

import React from 'react';
import Image from 'next/image';
import { trackClick } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';
import { ContentBlock } from '@/lib/schemas/blog';

interface BlogContentRendererProps {
    content: ContentBlock[];
}

const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ content }) => {
    return (
        <div className="prose prose-slate dark:prose-invert max-w-none">
            {content.map((block, idx) => {
                switch (block.type) {
                    case 'paragraph':
                        return (
                            <p key={idx} className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 font-medium">
                                {block.content}
                            </p>
                        );
                    case 'heading':
                        const HeadingTag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
                        return (
                            <HeadingTag
                                key={idx}
                                id={block.id}
                                className="text-slate-900 dark:text-white font-black tracking-tight mt-12 mb-6 scroll-mt-32"
                            >
                                {block.text}
                            </HeadingTag>
                        );
                    case 'list':
                        const ListTag = block.ordered ? 'ol' : 'ul';
                        return (
                            <ListTag key={idx} className="space-y-4 mb-8 list-none pl-0">
                                {block.items.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                                        <span className="size-2 rounded-full bg-primary mt-2.5 flex-shrink-0 shadow-sm" />
                                        {item}
                                    </li>
                                ))}
                            </ListTag>
                        );
                    case 'callout':
                        return (
                            <div key={idx} className="my-12 p-10 bg-primary/5 dark:bg-primary/10 border-l-4 border-primary rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-50"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
                                        {block.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                                        {block.description}
                                    </p>
                                    <button
                                        onClick={() => trackClick(block.buttonText, 'Blog Detail Callout')}
                                        className="bg-primary text-white px-8 py-4 rounded-xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                    >
                                        {block.buttonText}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        );
                    case 'image':
                        return (
                            <figure key={idx} className="my-12">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                                    <Image
                                        src={block.src}
                                        alt={block.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="text-center text-sm text-slate-400 mt-4 font-bold uppercase tracking-widest">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default BlogContentRenderer;
