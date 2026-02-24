import Link from 'next/link';
import { getBlogPageData, getBlogPosts } from '@/lib/data';
import BlogList from '@/components/sections/blog/BlogList';
import BlogCTA from '@/components/sections/blog/BlogCTA';

export const metadata = {
    title: 'Blog',
    description: 'Dijital dünyadaki en son trendler, e-ticaret ipuçları ve teknoloji haberleri. Markanızı büyütmenize yardımcı olacak rehberler.',
};

export default async function BlogPage() {
    const pageData = await getBlogPageData();
    const posts = await getBlogPosts();

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
            <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
                    <span className="text-slate-200 dark:text-slate-800">/</span>
                    <span className="text-slate-900 dark:text-white">Blog</span>
                </nav>
            </div>

            <BlogList pageData={pageData} initialPosts={posts} />
            <BlogCTA data={pageData.cta} />
        </main>
    );
}
