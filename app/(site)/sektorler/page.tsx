import React from 'react';
import { getSectorsPageData } from '@/lib/data';
import SectorsHero from '@/components/sections/sectors/SectorsHero';
import SectorCard from '@/components/sections/sectors/SectorCard';
import ExpertiseSection from '@/components/sections/sectors/ExpertiseSection';
import OfficesSection from '@/components/sections/sectors/OfficesSection';
import SectorsCTA from '@/components/sections/sectors/SectorsCTA';

export const metadata = {
    title: 'Sektörel Dijital Çözümler',
    description: 'E-Ticaret, Finans ve Sağlık sektörlerine özel, dönüşüm odaklı dijital stratejiler ve yazılım çözümleri.',
};

export default async function SectorsPage() {
    const data = await getSectorsPageData();

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-24 lg:pb-0 pt-4">
            <SectorsHero data={data.hero} />

            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.sectors.map((sector) => (
                        <SectorCard key={sector.id} sector={sector} />
                    ))}
                </div>
            </section>

            <ExpertiseSection data={data.expertise} />
            <OfficesSection data={data.offices} />
            <SectorsCTA data={data.cta} />
        </main>
    );
}
