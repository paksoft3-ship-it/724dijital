import React from 'react';
import { getProcessPageData } from '@/lib/data';
import ProcessHero from '@/components/sections/process/ProcessHero';
import ProcessTimeline from '@/components/sections/process/ProcessTimeline';
import CommunicationSection from '@/components/sections/process/CommunicationSection';
import ProcessCTA from '@/components/sections/process/ProcessCTA';

export const metadata = {
    title: 'Nasıl Çalışıyoruz?',
    description: 'Dijital projelerinizin hayata geçme sürecini adım adım keşfedin. Tasarımdan yayına şeffaf iş süreci.',
};

export default async function ProcessPage() {
    const data = await getProcessPageData();

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pt-4">
            <ProcessHero data={data.hero} />
            <ProcessTimeline steps={data.steps} />
            <CommunicationSection data={data.communication} />
            <ProcessCTA data={data.cta} />
        </main>
    );
}
