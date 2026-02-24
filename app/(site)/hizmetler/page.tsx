import React from 'react';
import { getServicesPageData, getServices } from '@/lib/data';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesFilterContainer from '@/components/sections/services/ServicesFilterContainer';
import ComparisonTable from '@/components/sections/services/ComparisonTable';
import StrategyPackages from '@/components/sections/services/StrategyPackages';
import ServicesCTA from '@/components/sections/services/ServicesCTA';

export default async function ServicesPage() {
    const pageData = await getServicesPageData();
    const services = await getServices();

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark">
            <ServicesHero data={pageData.hero} />
            <ServicesFilterContainer
                filters={pageData.filters}
                allServices={services}
            />
            <ComparisonTable data={pageData.comparison} />
            <StrategyPackages data={pageData.strategy} />
            <ServicesCTA data={pageData.finalCta} />
        </main>
    );
}
