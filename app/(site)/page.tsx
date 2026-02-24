import React from 'react';
import { getHomeData, getServices, getProjects } from '@/lib/data';
import type { Project } from '@/lib/schemas/content';
import Hero from '@/components/sections/home/Hero';
import TrustedLogos from '@/components/sections/home/TrustedLogos';
import ServicesGrid from '@/components/sections/home/ServicesGrid';
import WorkingProcess from '@/components/sections/home/WorkingProcess';
import ProjectsPreview from '@/components/sections/home/ProjectsPreview';
import TechLogos from '@/components/sections/home/TechLogos';
import LocalCulture from '@/components/sections/home/LocalCulture';
import Testimonials from '@/components/sections/home/Testimonials';
import FAQ from '@/components/sections/home/FAQ';
import FinalCTA from '@/components/sections/home/FinalCTA';

export default async function HomePage() {
  const homeData = await getHomeData();
  const services = await getServices();
  const projects = await getProjects();

  return (
    <main>
      <Hero data={homeData.hero} />
      <TrustedLogos />
      <ServicesGrid
        services={services}
        title={homeData.servicesPreview.title}
        subtitle={homeData.servicesPreview.subtitle}
      />
      {homeData.processSteps && <WorkingProcess steps={homeData.processSteps} />}
      <ProjectsPreview
        projects={projects.filter((p: Project) => p.featured)}
        title={homeData.projectsPreview.title}
        subtitle={homeData.projectsPreview.subtitle}
      />
      <TechLogos />
      <LocalCulture />
      <Testimonials data={homeData.testimonials} />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
