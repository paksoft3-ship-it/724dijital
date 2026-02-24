import React from 'react';
import { getHomeData, getServices, getProjects } from '@/lib/data';
import type { Project } from '@/lib/schemas/content';
import HeroV2 from '@/components/sections/home-v2/HeroV2';
import KpiStrip from '@/components/sections/home-v2/KpiStrip';
import ServicesV2 from '@/components/sections/home-v2/ServicesV2';
import CaseStudiesV2 from '@/components/sections/home-v2/CaseStudiesV2';
import Testimonials from '@/components/sections/home/Testimonials';
import CtaV2 from '@/components/sections/home-v2/CtaV2';

export default async function HomeV2Page() {
    // Fetch data using the v2 variant
    const homeData = await getHomeData("home.v2.json");
    const services = await getServices();
    const projects = await getProjects();

    return (
        <main>
            <HeroV2 data={homeData.hero} />
            <KpiStrip stats={homeData.stats} />
            <ServicesV2
                services={services.slice(0, 4)}
                title={homeData.servicesPreview.title}
                subtitle={homeData.servicesPreview.subtitle}
            />
            <CaseStudiesV2
                projects={projects.filter((p: Project) => p.featured)}
                title={homeData.projectsPreview.title}
            />
            <Testimonials data={homeData.testimonials} />
            <CtaV2 data={homeData.ctaBand} />
        </main>
    );
}
