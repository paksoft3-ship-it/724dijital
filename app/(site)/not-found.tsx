import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-xl w-full text-center">
                <div className="relative mb-8">
                    <h1 className="text-[12rem] md:text-[16rem] font-black text-slate-100 dark:text-slate-900 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl">
                            <span className="text-primary font-black text-xl md:text-2xl uppercase tracking-[0.2em]">Sayfa Bulunamadı</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                    Üzgünüz, Aradığınız Sayfa Mevcut Değil
                </h2>

                <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed font-medium">
                    Aradığınız adres değişmiş olabilir veya sayfa tamamen kaldırılmış olabilir.
                    Endişelenmeyin, sizi ana sayfaya güvenli bir şekilde yönlendirebiliriz.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-8 h-16 bg-primary text-white rounded-2xl font-black text-sm flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <Home className="w-5 h-5" />
                        Ana Sayfaya Dön
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-8 h-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-100 dark:border-slate-800 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Geri Git
                    </button>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Faydalı Linkler</p>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <Link href="/hizmetler" className="text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-colors">Hizmetlerimiz</Link>
                        <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-colors">Blog Yazıları</Link>
                        <Link href="/iletisim" className="text-slate-600 dark:text-slate-400 hover:text-primary font-bold transition-colors">İletişim</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
