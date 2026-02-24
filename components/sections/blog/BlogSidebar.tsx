"use client";

import React from 'react';
import Image from 'next/image';
import { Download, Mail, History } from 'lucide-react';
import { trackLead } from '@/lib/analytics';
import { BlogPost } from '@/lib/schemas/blog';

interface BlogSidebarProps {
    leadMagnet: {
        badge: string;
        title: string;
        description: string;
        buttonText: string;
        icon: string;
    };
    newsletter: {
        title: string;
        description: string;
        buttonText: string;
    };
    recentPosts: BlogPost[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ leadMagnet, newsletter, recentPosts }) => {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        trackLead("Blog Subscribe", { location: "Blog Sidebar Newsletter" });
        alert('Bültene abone olduğunuz için teşekkürler!');
    };

    const handleDownload = () => {
        trackLead("Blog Download", { title: leadMagnet.title });
        alert('İndirme başlatıldı!');
    };

    return (
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-10">
            <div className="sticky top-28 flex flex-col gap-10">
                {/* Lead Magnet Card */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200 dark:shadow-none overflow-hidden relative group border border-slate-800">
                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-primary text-[10px] font-black uppercase tracking-widest rounded-xl mb-6 shadow-lg shadow-black/20">
                            {leadMagnet.badge}
                        </span>
                        <h4 className="text-2xl font-black mb-4 leading-tight tracking-tight">
                            {leadMagnet.title}
                        </h4>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">
                            {leadMagnet.description}
                        </p>
                        <button
                            onClick={handleDownload}
                            className="w-full bg-white text-slate-900 hover:bg-slate-50 py-4 rounded-2xl text-sm font-black transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-black/10"
                        >
                            <Download className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                            {leadMagnet.buttonText}
                        </button>
                    </div>
                    {/* Decorative Icon Background */}
                    <div className="absolute -bottom-10 -right-10 text-primary/10 select-none pointer-events-none transform -rotate-12 transition-transform group-hover:rotate-12 duration-1000">
                        <Download size={200} />
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-2xl">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-slate-900 dark:text-white tracking-tight">
                            {newsletter.title}
                        </h4>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                        {newsletter.description}
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-4">
                        <input
                            required
                            type="email"
                            placeholder="E-posta adresiniz"
                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 font-medium"
                        />
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl text-sm font-black transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                            {newsletter.buttonText}
                        </button>
                    </form>
                </div>

                {/* Recent Posts */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                    <h4 className="font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
                        <History className="w-5 h-5 text-primary" />
                        Son Yazılar
                    </h4>
                    <div className="space-y-8">
                        {recentPosts.map((post) => (
                            <a key={post.id} href={`/blog/${post.slug}`} className="group flex gap-5">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h5 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2 tracking-tight">
                                        {post.title}
                                    </h5>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{post.date}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
