import React from 'react';

interface ContactHeroProps {
    data: {
        title: string;
        description: string;
    };
}

const ContactHero: React.FC<ContactHeroProps> = ({ data }) => {
    return (
        <section className="px-6 pt-12 pb-8 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-8">
                {data.title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                {data.description}
            </p>
        </section>
    );
};

export default ContactHero;
