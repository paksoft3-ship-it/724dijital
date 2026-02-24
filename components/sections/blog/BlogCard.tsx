"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/schemas/blog';
import { trackClick } from '@/lib/analytics';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
            <Link
                href={`/blog/${post.slug}`}
                onClick={() => trackClick(post.title, 'Blog Card')}
                className="block"
            >
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg border border-white/10">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            {post.readTime}
                        </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                        {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group/link mt-auto">
                        Devamını Oku
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default BlogCard;
