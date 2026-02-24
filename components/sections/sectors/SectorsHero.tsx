import React from 'react';

interface SectorsHeroProps {
    data: {
        title: string;
        highlightTitle: string;
        subtitle: string;
    };
}

const SectorsHero: React.FC<SectorsHeroProps> = ({ data }) => {
    return (
        <section className="px-6 pt-12 pb-8 text-center bg-background-light dark:bg-background-dark">
            <h2 className="text-3xl lg:text-5xl font-black leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
                {data.title} <br />
                <span className="text-primary">{data.highlightTitle}</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                {data.subtitle}
            </p>
        </section>
    );
};

export default SectorsHero;
