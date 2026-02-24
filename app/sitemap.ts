import { MetadataRoute } from 'next';
import { getServices, getBlogPosts } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Static routes
    const staticRoutes = [
        '',
        '/hizmetler',
        '/blog',
        '/referanslar',
        '/hakkimizda',
        '/iletisim',
        '/surec',
        '/sektorler',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const services = await getServices();
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/hizmetler/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic blog routes
    const posts = await getBlogPosts();
    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
