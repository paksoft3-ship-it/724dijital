"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { trackLead } from '@/lib/analytics';

interface ContactFormProps {
    data: {
        title: string;
        description: string;
        services: string[];
        budgets: string[];
        buttonText: string;
    };
}

const ContactForm: React.FC<ContactFormProps> = ({ data }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const payload = Object.fromEntries(formData.entries());

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        trackLead("Contact Form", payload);
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-12 text-center border border-slate-100 dark:border-slate-800 shadow-2xl shadow-primary/5 animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto my-20">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Mesajınız Alındı!</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                    Uzman ekibimiz projenizi incelemeye başladı. En geç 24 saat içinde sizinle iletişime geçeceğiz.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
                >
                    Yeni Bir Form Gönder
                </button>
            </div>
        );
    }

    return (
        <section className="px-6 py-20 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:bg-primary/10 transition-colors duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-50 dark:bg-primary/5 rounded-full -ml-32 -mb-32 blur-3xl opacity-50"></div>

                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                            {data.title}
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Ad Soyad</label>
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    placeholder="Örn: Ahmet Yılmaz"
                                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">E-posta</label>
                                <input
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="ahmet@sirketiniz.com"
                                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hizmet Türü</label>
                                <select
                                    name="service"
                                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white appearance-none cursor-pointer font-medium"
                                >
                                    {data.services.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tahmini Bütçe</label>
                                <select
                                    name="budget"
                                    className="w-full h-16 px-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white appearance-none cursor-pointer font-medium"
                                >
                                    {data.budgets.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mesajınız</label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                placeholder="Projenizden kısaca bahsedin..."
                                className="w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder:text-slate-400 transition-all font-medium resize-none"
                            ></textarea>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input
                                required
                                type="checkbox"
                                id="kvkk"
                                className="size-5 rounded-lg border-none bg-slate-100 dark:bg-slate-800 text-primary focus:ring-primary"
                            />
                            <label htmlFor="kvkk" className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                <a href="/kvkk" className="text-primary hover:underline">KVKK metnini</a> okudum ve kabul ediyorum.
                            </label>
                        </div>

                        <button
                            disabled={isLoading}
                            className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                        >
                            {isLoading ? (
                                <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    {data.buttonText}
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
