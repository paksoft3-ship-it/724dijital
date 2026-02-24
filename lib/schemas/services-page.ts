import { z } from "zod";

export const ComparisonRowSchema = z.object({
    service: z.string(),
    goals: z.record(z.string(), z.boolean()),
});

export const StrategyPackageSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    price: z.string().optional(),
    isPopular: z.boolean().optional(),
    stepNumber: z.string(),
});

export const ServicesPageSchema = z.object({
    hero: z.object({
        badge: z.string(),
        title: z.string(),
        subtitle: z.string(),
    }),
    filters: z.array(z.object({
        id: z.string(),
        label: z.string(),
    })),
    comparison: z.object({
        title: z.string(),
        subtitle: z.string(),
        columns: z.array(z.string()),
        rows: z.array(ComparisonRowSchema),
    }),
    strategy: z.object({
        badge: z.string(),
        title: z.string(),
        subtitle: z.string(),
        packages: z.array(StrategyPackageSchema),
    }),
    finalCta: z.object({
        title: z.string(),
        subtitle: z.string(),
        primaryCtaText: z.string(),
        secondaryCtaText: z.string(),
    }),
});

export type ServicesPageData = z.infer<typeof ServicesPageSchema>;
