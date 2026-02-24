import React from 'react';
import { getContactPageData } from '@/lib/data';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactCards from '@/components/sections/contact/ContactCards';
import ContactForm from '@/components/sections/contact/ContactForm';
import ContactFAQ from '@/components/sections/contact/ContactFAQ';

export const metadata = {
    title: 'İletişim',
    description: 'Dijital dünyadaki hedeflerinize ulaşmak için bizimle iletişime geçin. Uzman ekibimiz projeniz için hazır.',
};

export default async function ContactPage() {
    const data = await getContactPageData();

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-4">
            <ContactHero data={data.hero} />
            <ContactCards cards={data.contactCards} />
            <ContactForm data={data.form} />
            <ContactFAQ faqs={data.faqs} />

            {/* Office Info Bottom */}
            <section className="px-6 py-12 text-center border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 mt-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
                    <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                        {data.office.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
                        {data.office.address}
                    </p>
                    <div className="h-px w-12 bg-primary/30 my-2" />
                    <a
                        href={`mailto:${data.office.email}`}
                        className="text-primary font-black text-lg hover:underline transition-all"
                    >
                        {data.office.email}
                    </a>
                </div>
            </section>
        </main>
    );
}
