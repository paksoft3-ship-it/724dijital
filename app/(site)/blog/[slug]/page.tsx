import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogDetailBySlug, getBlogPosts } from '@/lib/data';
import BlogDetailHero from '@/components/sections/blog/BlogDetailHero';
import TableOfContents from '@/components/sections/blog/TableOfContents';
import BlogContentRenderer from '@/components/sections/blog/BlogContentRenderer';
import BlogRelatedPosts from '@/components/sections/blog/BlogRelatedPosts';
import BlogCTA from '@/components/sections/blog/BlogCTA';
import { ContentBlock } from '@/lib/schemas/blog';

interface BlogDetailPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const detail = await getBlogDetailBySlug(params.slug);
    if (!detail) return {};

    return {
        title: detail.post.title,
        description: detail.post.excerpt,
        openGraph: {
            title: detail.post.title,
            description: detail.post.excerpt,
            images: [detail.post.image],
            type: 'article',
            publishedTime: detail.post.date,
            authors: [detail.post.author?.name || '724dijital'],
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const detail = await getBlogDetailBySlug(params.slug);
    if (!detail) notFound();

    const allPosts = await getBlogPosts();
    const relatedPosts = allPosts.filter(p => detail.relatedPostIds.includes(p.id));

    // Extract headings for Table of Contents
    const tocItems = detail.content
        .filter((block: ContentBlock) => block.type === 'heading')
        .map(block => {
            if (block.type === 'heading') {
                return {
                    id: block.id,
                    text: block.text,
                    level: block.level
                };
            }
            return null;
        })
        .filter((item): item is { id: string; text: string; level: number } => item !== null);

    // JSON-LD Article Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: detail.post.title,
        description: detail.post.excerpt,
        image: detail.post.image,
        datePublished: detail.post.date,
        author: {
            '@type': 'Person',
            name: detail.post.author?.name || '724dijital',
        },
        publisher: {
            '@type': 'Organization',
            name: '724dijital',
            logo: {
                '@type': 'ImageObject',
                url: 'https://724dijital.com/logo.png', // Fallback
            },
        },
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 pb-20">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <BlogDetailHero post={detail.post} />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-12 gap-12">
                    {/* Left Sidebar: TOC for Desktop */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <TableOfContents items={tocItems} />
                    </aside>

                    {/* Main Content */}
                    <div className="col-span-12 lg:col-span-9 max-w-4xl">
                        {/* Mobile TOC */}
                        <div className="lg:hidden mb-12">
                            <TableOfContents items={tocItems} />
                        </div>

                        <BlogContentRenderer content={detail.content} />

                        <BlogRelatedPosts posts={relatedPosts} />
                    </div>
                </div>
            </div>

            <BlogCTA
                data={{
                    title: "İşinizi Birlikte Büyütelim",
                    subtitle: "Dijital stratejinizi oluşturmak ve rakiplerinizin önüne geçmek için ücretsiz analiz isteyin.",
                    primaryButton: "Ücretsiz Analiz İsteyin",
                    secondaryButton: "WhatsApp'tan Yaz"
                }}
            />
        </main>
    );
}
