import { z } from "zod";

export const StatSchema = z.object({
    label: z.string(),
    value: z.string(),
});

export const HeroSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
    secondaryCtaText: z.string(),
    secondaryCtaLink: z.string(),
});

export const HomeSchema = z.object({
    hero: HeroSchema,
    stats: z.array(StatSchema),
    servicesPreview: z.object({
        title: z.string(),
        subtitle: z.string(),
    }),
    projectsPreview: z.object({
        title: z.string(),
        subtitle: z.string(),
    }),
    ctaBand: z.object({
        title: z.string(),
        subtitle: z.string(),
        ctaText: z.string(),
        ctaLink: z.string(),
        secondaryCtaText: z.string().optional(),
        secondaryCtaLink: z.string().optional(),
    }),
    processSteps: z.array(z.object({
        number: z.number(),
        title: z.string(),
        description: z.string(),
    })).optional(),
    testimonials: z.array(z.object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
        image: z.string(),
    })),
});

export type HomeData = z.infer<typeof HomeSchema>;
