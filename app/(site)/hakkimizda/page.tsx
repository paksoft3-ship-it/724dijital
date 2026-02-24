import React from 'react';
import { getAboutPageData, getTeamData } from '@/lib/data';
import AboutHero from '@/components/sections/about/AboutHero';
import AboutStory from '@/components/sections/about/AboutStory';
import AboutValues from '@/components/sections/about/AboutValues';
import TeamGrid from '@/components/sections/about/TeamGrid';
import TalentMatrix from '@/components/sections/about/TalentMatrix';
import AboutCTA from '@/components/sections/about/AboutCTA';

export const metadata = {
    title: 'Hakkımızda',
    description: 'Yenilikçi çözümlerle markanızı geleceğe taşıyan tutkulu ve yaratıcı ekibimizle tanışın. Yolculuğumuz ve değerlerimiz.',
};

export default async function AboutPage() {
    const aboutData = await getAboutPageData();
    const teamData = await getTeamData();

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pt-4">
            <AboutHero data={aboutData.hero} />
            <AboutStory data={aboutData.story} />
            <AboutValues data={aboutData.values} />
            <TeamGrid data={teamData} />
            <TalentMatrix data={aboutData.talent} />
            <AboutCTA data={aboutData.cta} />
        </main>
    );
}
