import { z } from "zod";

export const FeatureSchema = z.string();

export const TargetAudienceItemSchema = z.object({
    icon: z.string(),
    title: z.string(),
    description: z.string(),
});

export const TimelineStepSchema = z.object({
    step: z.number(),
    title: z.string(),
    duration: z.string(),
    description: z.string(),
});

export const TechItemSchema = z.object({
    icon: z.string(),
    label: z.string(),
});

export const MiniCaseSchema = z.object({
    image: z.string(),
    alt: z.string(),
    link: z.string(),
});

export const ServicePackageSchema = z.object({
    title: z.string(),
    price: z.string(),
    features: z.array(z.string()),
    isPopular: z.boolean().optional(),
    ctaText: z.string(),
});

export const FAQItemSchema = z.object({
    question: z.string(),
    answer: z.string(),
});

export const ServiceDetailSchema = z.object({
    slug: z.string(),
    seo: z.object({
        title: z.string(),
        description: z.string(),
        ogImage: z.string().optional(),
    }),
    hero: z.object({
        badge: z.string(),
        title: z.string(),
        subtitle: z.string(),
        primaryCta: z.string(),
        secondaryCta: z.string(),
    }),
    targetAudience: z.array(TargetAudienceItemSchema),
    deliverables: z.array(FeatureSchema),
    timeline: z.array(TimelineStepSchema),
    techStack: z.array(TechItemSchema),
    miniCases: z.array(MiniCaseSchema).optional(),
    packages: z.array(ServicePackageSchema),
    faq: z.array(FAQItemSchema),
    summary: z.object({
        duration: z.string(),
        startingPrice: z.string(),
        format: z.string(),
        contactPerson: z.object({
            name: z.string(),
            role: z.string(),
            image: z.string(),
        }),
    }),
    customSections: z.object({
        problem: z.object({
            title: z.string(),
            subtitle: z.string(),
            cards: z.array(z.object({
                icon: z.string(),
                title: z.string(),
                description: z.string(),
                color: z.enum(["red", "orange", "blue", "primary"]).optional(),
            })),
        }).optional(),
        solutions: z.object({
            title: z.string(),
            subtitle: z.string(),
            checkmarks: z.array(z.string()),
            grid: z.array(z.object({
                icon: z.string(),
                title: z.string(),
            })),
        }).optional(),
        useCases: z.object({
            title: z.string(),
            subtitle: z.string().optional(),
            cards: z.array(z.object({
                icon: z.string(),
                title: z.string(),
                description: z.string(),
            })),
        }).optional(),
        modules: z.object({
            title: z.string(),
            subtitle: z.string(),
            items: z.array(z.object({
                icon: z.string(),
                title: z.string(),
                description: z.string(),
            })),
        }).optional(),
        architecture: z.object({
            title: z.string(),
            subtitle: z.string(),
            stats: z.array(z.object({
                label: z.string(),
                value: z.string(),
            })),
            techs: z.array(z.object({
                icon: z.string(),
                label: z.string(),
            })),
        }).optional(),
        customCases: z.array(z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            stats: z.array(z.object({
                label: z.string(),
                value: z.string(),
            })),
            category: z.string(),
        })).optional(),
        roadmap: z.object({
            title: z.string(),
            items: z.array(z.object({
                step: z.number(),
                title: z.string(),
                description: z.string(),
            })),
        }).optional(),
        metrics: z.object({
            title: z.string().optional(),
            items: z.array(z.object({
                label: z.string(),
                value: z.string(),
                change: z.string().optional(),
                trend: z.enum(["up", "down", "neutral"]).optional(),
            })),
        }).optional(),
        funnel: z.object({
            title: z.string(),
            subtitle: z.string(),
            steps: z.array(z.object({
                icon: z.string(),
                title: z.string(),
                description: z.string(),
            })),
        }).optional(),
        platforms: z.object({
            title: z.string(),
            subtitle: z.string(),
            items: z.array(z.object({
                icon: z.string(),
                title: z.string(),
                description: z.string(),
                features: z.array(z.string()).optional(),
            })),
        }).optional(),
    }).optional(),
});

export type ServiceDetail = z.infer<typeof ServiceDetailSchema>;
export type TargetAudienceItem = z.infer<typeof TargetAudienceItemSchema>;
export type TimelineStep = z.infer<typeof TimelineStepSchema>;
export type TechItem = z.infer<typeof TechItemSchema>;
export type MiniCase = z.infer<typeof MiniCaseSchema>;
export type ServicePackage = z.infer<typeof ServicePackageSchema>;
export type FAQItem = z.infer<typeof FAQItemSchema>;
