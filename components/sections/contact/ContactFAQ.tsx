"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface ContactFAQProps {
    faqs: {
        question: string;
        answer: string;
    }[];
}

const ContactFAQ: React.FC<ContactFAQProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="px-6 py-20 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-xl mb-4">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Destek Merkezi
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Sıkça Sorulan Sorular
                </h2>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full px-8 py-6 flex items-center justify-between text-left group"
                        >
                            <span className={`text-lg font-black transition-colors ${openIndex === idx ? 'text-primary' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>
                                {faq.question}
                            </span>
                            <div className={`size-10 rounded-2xl flex items-center justify-center transition-all ${openIndex === idx ? 'bg-primary text-white scale-110 rotate-180' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                                {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-8 pb-8 pt-2">
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactFAQ;
