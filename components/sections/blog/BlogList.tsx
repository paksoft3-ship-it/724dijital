"use client";

import React, { useState, useMemo } from 'react';
import BlogHero from './BlogHero';
import BlogFilterBar from './BlogFilterBar';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';
import Pagination from './Pagination';
import { BlogPost, BlogPageData } from '@/lib/schemas/blog';

interface BlogListProps {
    pageData: BlogPageData;
    initialPosts: BlogPost[];
}

const ITEMS_PER_PAGE = 4;

const BlogList: React.FC<BlogListProps> = ({ pageData, initialPosts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('Hepsi');
    const [filters, setFilters] = useState({
        difficulty: 'Zorluk Seviyesi',
        readTime: 'Okuma Süresi',
        city: 'Şehir Odağı'
    });
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredPosts = useMemo(() => {
        let result = [...initialPosts];

        // Search
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(post =>
                post.title.toLowerCase().includes(term) ||
                post.excerpt.toLowerCase().includes(term)
            );
        }

        // Category
        if (category !== 'Hepsi') {
            result = result.filter(post => post.category === category);
        }

        // Difficulty
        if (filters.difficulty !== 'Zorluk Seviyesi') {
            result = result.filter(post => post.difficulty === filters.difficulty);
        }

        // City
        if (filters.city !== 'Şehir Odağı') {
            result = result.filter(post => post.city === filters.city);
        }

        // TODO: Read Time filtering logic if needed (parsing strings like "6 dk okuma")

        // Sort
        result.sort((a, b) => {
            if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (sortBy === 'oldest') return new Date(a.date).getTime() - new Date(b.date).getTime();
            return 0;
        });

        return result;
    }, [searchTerm, category, filters, sortBy, initialPosts]);

    const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const recentPosts = initialPosts.filter(p => p.isRecent).slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-6">
            <BlogHero
                data={pageData.hero}
                categories={pageData.categories}
                onSearch={setSearchTerm}
                onCategoryChange={setCategory}
            />

            <BlogFilterBar
                filters={pageData.filters}
                onFilterChange={(type, val) => {
                    setFilters(prev => ({ ...prev, [type]: val }));
                    setCurrentPage(1);
                }}
                onSortChange={(val) => {
                    setSortBy(val);
                    setCurrentPage(1);
                }}
            />

            <div className="grid grid-cols-12 gap-12">
                <main className="col-span-12 lg:col-span-8">
                    {paginatedPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-8">
                            {paginatedPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Sonuç bulunamadı</h3>
                            <p className="text-slate-500 dark:text-slate-400">Aramanızla eşleşen herhangi bir yazı yok.</p>
                        </div>
                    )}

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </main>

                <BlogSidebar
                    leadMagnet={pageData.leadMagnet}
                    newsletter={pageData.newsletter}
                    recentPosts={recentPosts}
                />
            </div>
        </div>
    );
};

export default BlogList;
