"use client";

import React from 'react';
import { Phone, Mail, MessageCircle, Calendar } from 'lucide-react';
import { trackClick } from '@/lib/analytics';
import { type ContactPageData } from '@/lib/schemas/contact';

const iconMap = {
    phone: Phone,
    mail: Mail,
    'message-circle': MessageCircle,
    calendar: Calendar,
};

interface ContactCardsProps {
    cards: ContactPageData['contactCards'];
}

const ContactCards: React.FC<ContactCardsProps> = ({ cards }) => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, idx) => {
                    const Icon = iconMap[card.icon as keyof typeof iconMap] || Phone;
                    return (
                        <a
                            key={idx}
                            href={card.href}
                            onClick={() => trackClick(card.label, 'Contact Card')}
                            className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                                {card.label}
                            </h3>
                            <p className="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                {card.value}
                            </p>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default ContactCards;
