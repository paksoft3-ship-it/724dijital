import { z } from 'zod';

export const SectorSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    image: z.string().optional(),
    kpiTags: z.array(z.string()).optional(),
});

export const OfficeLocationSchema = z.object({
    name: z.string(),
    address: z.string(),
    mapImage: z.string(),
});

export const SectorsPageSchema = z.object({
    hero: z.object({
        title: z.string(),
        highlightTitle: z.string(),
        subtitle: z.string(),
    }),
    sectors: z.array(SectorSchema),
    expertise: z.object({
        badge: z.string(),
        title: z.string(),
        description: z.string(),
        stats: z.array(z.object({
            label: z.string(),
            value: z.string(),
        })),
    }),
    offices: z.object({
        title: z.string(),
        locations: z.array(OfficeLocationSchema),
    }),
    cta: z.object({
        text: z.string(),
        buttonText: z.string(),
    }),
});

export type Sector = z.infer<typeof SectorSchema>;
export type SectorsPageData = z.infer<typeof SectorsPageSchema>;
