import { z } from 'zod';

export const MilestoneSchema = z.object({
    year: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
});

export const ValueSchema = z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
});

export const SkillSchema = z.object({
    name: z.string(),
    percentage: z.number(),
});

export const StatSchema = z.object({
    label: z.string(),
    value: z.string(),
});

export const AboutPageSchema = z.object({
    hero: z.object({
        badge: z.string(),
        title: z.string(),
        subtitle: z.string(),
    }),
    story: z.object({
        title: z.string(),
        subtitle: z.string(),
        milestones: z.array(MilestoneSchema),
    }),
    values: z.object({
        title: z.string(),
        subtitle: z.string(),
        items: z.array(ValueSchema),
    }),
    talent: z.object({
        title: z.string(),
        description: z.string(),
        skills: z.array(SkillSchema),
        stats: z.array(StatSchema),
    }),
    cta: z.object({
        title: z.string(),
        subtitle: z.string(),
        buttonText: z.string(),
    }),
});

export type AboutPageData = z.infer<typeof AboutPageSchema>;
