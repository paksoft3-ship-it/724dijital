"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-16 flex items-center justify-center gap-3">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-400 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:hover:border-slate-100 dark:disabled:hover:border-slate-800"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, idx) => {
                const pageNum = idx + 1;
                return (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`w-12 h-12 flex items-center justify-center rounded-2xl font-black text-sm transition-all ${currentPage === pageNum
                                ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-110'
                                : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 hover:border-primary/50'
                            }`}
                    >
                        {pageNum}
                    </button>
                );
            })}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-6 h-12 flex items-center gap-2 rounded-2xl border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white font-black text-sm hover:border-primary hover:text-primary transition-all group disabled:opacity-30"
            >
                Sonraki
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

export default Pagination;
