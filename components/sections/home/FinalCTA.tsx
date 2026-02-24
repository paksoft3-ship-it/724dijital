"use client";

import React, { useState } from 'react';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import { trackLead } from '@/lib/analytics';

export default function FinalCTA() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
        };

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        trackLead('Homepage Quick Form', data);
        setStatus('success');
    };

    return (
        <section className="py-20 bg-primary relative overflow-hidden" id="contact">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="text-white">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
                            Projenizi 48 saat içinde planlayalım.
                        </h2>
                        <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed font-medium">
                            Vakit kaybetmeyin. İşletmeniz için en doğru dijital stratejiyi belirlemek üzere uzmanlarımız sizinle iletişime geçsin.
                        </p>

                        <div className="space-y-6">
                            {[
                                'Ücretsiz ihtiyaç analizi',
                                'Rakip analizi raporu',
                                'Bütçe ve zaman planlaması'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="bg-white/20 p-1 rounded-full">
                                        <CheckCircle2 size={24} className="text-white" />
                                    </div>
                                    <span className="text-lg font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 relative">
                        {status === 'success' ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-primary dark:text-white mb-3">Mesajınız Alındı!</h3>
                                <p className="text-slate-500 dark:text-slate-400">En kısa sürede size dönüş yapacağız.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-primary font-bold hover:underline"
                                >
                                    Yeni Mesaj Gönder
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <h3 className="text-2xl font-black text-primary dark:text-white mb-2">Hemen Başlayın</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Formu doldurun, uzmanlarımız sizi arasın.</p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-black text-primary dark:text-slate-300 mb-2 uppercase tracking-widest" htmlFor="name">Ad Soyad</label>
                                        <input
                                            required
                                            name="name"
                                            id="name"
                                            placeholder="Adınız Soyadınız"
                                            className="w-full px-6 py-4 rounded-2xl bg-neutral-surface/50 dark:bg-slate-900 border border-neutral-border focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white"
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-primary dark:text-slate-300 mb-2 uppercase tracking-widest" htmlFor="phone">Telefon</label>
                                        <input
                                            required
                                            name="phone"
                                            id="phone"
                                            placeholder="05XX XXX XX XX"
                                            className="w-full px-6 py-4 rounded-2xl bg-neutral-surface/50 dark:bg-slate-900 border border-neutral-border focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white"
                                            type="tel"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-primary dark:text-slate-300 mb-2 uppercase tracking-widest" htmlFor="email">E-posta</label>
                                        <input
                                            required
                                            name="email"
                                            id="email"
                                            placeholder="ornek@sirketiniz.com"
                                            className="w-full px-6 py-4 rounded-2xl bg-neutral-surface/50 dark:bg-slate-900 border border-neutral-border focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white"
                                            type="email"
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={status === 'loading'}
                                    className="w-full bg-primary hover:bg-primary-hover text-white font-black py-5 rounded-2xl shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] active:scale-95 text-lg flex items-center justify-center gap-3 disabled:opacity-70"
                                    type="submit"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="animate-spin" size={24} />
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        <>
                                            Teklif İste
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-slate-400 mt-6 font-bold uppercase tracking-widest">
                                    Kişisel verileriniz KVKK kapsamında korunmaktadır.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
