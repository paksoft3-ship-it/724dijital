import React from 'react';
import { BlogPost } from '@/lib/schemas/blog';
import BlogCard from './BlogCard';

interface BlogRelatedPostsProps {
    posts: BlogPost[];
}

const BlogRelatedPosts: React.FC<BlogRelatedPostsProps> = ({ posts }) => {
    if (posts.length === 0) return null;

    return (
        <section className="py-24 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-12 text-center tracking-tight">
                Benzer Yazılar
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default BlogRelatedPosts;
