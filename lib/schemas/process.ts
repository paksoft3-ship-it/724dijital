import { z } from 'zod';

export const ProcessStepSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    duration: z.string(),
    deliverable: z.string(),
});

export const ProcessPageSchema = z.object({
    hero: z.object({
        title: z.string(),
        subtitle: z.string(),
    }),
    steps: z.array(ProcessStepSchema),
    communication: z.object({
        title: z.string(),
        icon: z.string(),
        subtitle: z.string(),
        description: z.string(),
    }),
    cta: z.object({
        text: z.string(),
        buttonText: z.string(),
        image: z.string(),
        imageTagline: z.string(),
    }),
});

export type ProcessStep = z.infer<typeof ProcessStepSchema>;
export type ProcessPageData = z.infer<typeof ProcessPageSchema>;
