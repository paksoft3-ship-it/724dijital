import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/lib/schemas/blog';

interface BlogDetailHeroProps {
    post: BlogPost;
}

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({ post }) => {
    return (
        <section className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Anasayfa</Link>
                    <span className="text-slate-200 dark:text-slate-800">/</span>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                    <span className="text-slate-200 dark:text-slate-800">/</span>
                    <span className="text-primary">{post.category}</span>
                </nav>

                <h1 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-black leading-tight tracking-tight mb-8">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 mb-10">
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
                        {post.author?.avatar ? (
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <User className="text-primary w-6 h-6" />
                        )}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-900 dark:text-white tracking-tight">
                            {post.author?.name || '724dijital Ekibi'}
                        </span>
                        <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-100 dark:ring-slate-800">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogDetailHero;
