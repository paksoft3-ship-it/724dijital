import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServices, getServiceDetailBySlug } from '@/lib/data';

// Components
import ServiceDetailHero from '@/components/sections/service-detail/ServiceDetailHero';
import ServiceTargetAudience from '@/components/sections/service-detail/ServiceTargetAudience';
import ServiceDeliverables from '@/components/sections/service-detail/ServiceDeliverables';
import ServiceTimeline from '@/components/sections/service-detail/ServiceTimeline';
import ServiceTechStack from '@/components/sections/service-detail/ServiceTechStack';
import ServiceMiniCases from '@/components/sections/service-detail/ServiceMiniCases';
import ServicePackages from '@/components/sections/service-detail/ServicePackages';
import ServiceFAQ from '@/components/sections/service-detail/ServiceFAQ';
import ServiceSummaryCard from '@/components/sections/service-detail/ServiceSummaryCard';
import MobileServiceCTA from '@/components/sections/service-detail/MobileServiceCTA';

// Custom Renderers
import WebServiceDetail from '@/components/sections/service-detail/custom/WebServiceDetail';
import SoftwareServiceDetail from '@/components/sections/service-detail/custom/SoftwareServiceDetail';
import MarketingServiceDetail from '@/components/sections/service-detail/custom/MarketingServiceDetail';
import SeoServiceDetail from '@/components/sections/service-detail/custom/SeoServiceDetail';
import PythonServiceDetail from '@/components/sections/service-detail/custom/PythonServiceDetail';
import DataServiceDetail from '@/components/sections/service-detail/custom/DataServiceDetail';

interface ServiceDetailPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const services = await getServices();
    return services
        .filter(service => service.slug !== 'web-gelistirme')
        .map((service) => ({
            slug: service.slug,
        }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const data = await getServiceDetailBySlug(slug);

    if (!data) return {};

    return {
        title: data.seo.title,
        description: data.seo.description,
        openGraph: {
            title: data.seo.title,
            description: data.seo.description,
            images: data.seo.ogImage ? [{ url: data.seo.ogImage }] : [],
        },
    };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const { slug } = await params;
    const data = await getServiceDetailBySlug(slug);

    if (!data) {
        notFound();
    }

    if (slug === 'web-gelistirme') {
        return <WebServiceDetail data={data} />;
    }

    if (slug === 'ozel-yazilim') {
        return <SoftwareServiceDetail data={data} />;
    }

    if (slug === 'dijital-pazarlama') {
        return <MarketingServiceDetail data={data} />;
    }

    if (slug === 'seo-hizmeti') {
        return <SeoServiceDetail data={data} />;
    }

    if (slug === 'python-otomasyon') {
        return <PythonServiceDetail data={data} />;
    }

    if (slug === 'veri-analizi') {
        return <DataServiceDetail data={data} />;
    }

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark pb-24 lg:pb-0">
            <ServiceDetailHero data={data.hero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-24 items-start">
                    {/* Left Column content */}
                    <div className="lg:col-span-8 space-y-20">
                        <ServiceTargetAudience data={data.targetAudience} />
                        <ServiceDeliverables data={data.deliverables} />
                        <ServiceTimeline data={data.timeline} />
                        <ServiceTechStack data={data.techStack} />
                        {data.miniCases && <ServiceMiniCases data={data.miniCases} />}
                        <ServicePackages data={data.packages} />
                        <ServiceFAQ data={data.faq} />
                    </div>

                    {/* Right Column Sticky summary */}
                    <ServiceSummaryCard data={data.summary} serviceTitle={data.hero.title} />
                </div>
            </div>

            {/* Mobile Bottom CTA */}
            <MobileServiceCTA startingPrice={data.summary.startingPrice} />
        </main>
    );
}
