"use client";

import React from 'react';
import { Send } from 'lucide-react';

export default function NewsletterForm() {
    return (
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
                <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-border bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-secondary outline-none transition-all"
                />
            </div>
            <button className="w-full px-4 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                Abone Ol
                <Send size={16} />
            </button>
        </form>
    );
}
