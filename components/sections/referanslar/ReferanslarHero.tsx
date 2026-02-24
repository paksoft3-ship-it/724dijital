import React from 'react';

interface ReferanslarHeroProps {
    data: {
        title: string;
        subtitle: string;
    };
}

const ReferanslarHero: React.FC<ReferanslarHeroProps> = ({ data }) => {
    return (
        <section className="px-6 pt-12 pb-8 text-center bg-background-light dark:bg-background-dark">
            <h1 className="text-slate-900 dark:text-white text-3xl lg:text-5xl font-black leading-tight tracking-tight mb-4">
                {data.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                {data.subtitle}
            </p>
        </section>
    );
};

export default ReferanslarHero;
