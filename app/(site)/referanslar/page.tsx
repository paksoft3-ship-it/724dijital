import React from 'react';
import { getReferanslarPageData, getTestimonials, getClients } from '@/lib/data';
import ReferanslarHero from '@/components/sections/referanslar/ReferanslarHero';
import ReferanslarFilters from '@/components/sections/referanslar/ReferanslarFilters';
import TestimonialCard from '@/components/sections/referanslar/TestimonialCard';
import ClientGrid from '@/components/sections/referanslar/ClientGrid';
import ReferanslarCTA from '@/components/sections/referanslar/ReferanslarCTA';

export const metadata = {
    title: 'Referanslarımız & Müşteri Yorumları',
    description: 'Birlikte başarıya ulaştığımız iş ortaklarımızın hikayeleri ve bize duydukları güven.',
};

export default async function ReferanslarPage() {
    const pageData = await getReferanslarPageData();
    const testimonials = await getTestimonials();
    const clients = await getClients();

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pt-4">
            <ReferanslarHero data={pageData.hero} />

            <ReferanslarFilters
                services={pageData.filters.services}
                sectors={pageData.filters.sectors}
            />

            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} data={t} />
                    ))}
                </div>
            </section>

            <ClientGrid clients={clients} />

            <ReferanslarCTA />
        </main>
    );
}
