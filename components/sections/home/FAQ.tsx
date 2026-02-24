"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        {
            question: "Proje geliştirme süreci ne kadar sürüyor?",
            answer: "Projenin kapsamına göre değişmekle birlikte, kurumsal web siteleri ortalama 2-4 hafta, özel yazılım projeleri ise 8-12 hafta sürmektedir."
        },
        {
            question: "Destek hizmetiniz var mı?",
            answer: "Evet, tüm projelerimiz teslim edildikten sonra 1 yıl boyunca teknik destek ve bakım garantisi altındadır. Sonrasında bakım anlaşmaları ile devam ediyoruz."
        },
        {
            question: "Fiyatlandırma politikanız nasıl?",
            answer: "Her projenin gereksinimleri farklı olduğu için sabit bir fiyat listemiz yoktur. Ücretsiz keşif sonrası size özel, şeffaf bir teklif sunuyoruz."
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-background-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center text-primary dark:text-white mb-12">
                    Sıkça Sorulan Sorular
                </h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <details
                            key={i}
                            className="group bg-neutral-surface/30 dark:bg-slate-800/40 rounded-2xl border border-neutral-border open:border-secondary open:shadow-2xl open:shadow-secondary/5 transition-all duration-300"
                        >
                            <summary className="flex justify-between items-center p-8 cursor-pointer list-none">
                                <span className="font-black text-primary dark:text-white text-lg pr-8">
                                    {faq.question}
                                </span>
                                <div className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center text-primary group-open:bg-secondary group-open:text-white transition-all">
                                    <ChevronDown className="transform group-open:rotate-180 transition-transform" size={24} />
                                </div>
                            </summary>
                            <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 border-t border-neutral-border/50 pt-6 leading-relaxed text-lg">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
