import { z } from 'zod';

export const ContactPageSchema = z.object({
    hero: z.object({
        title: z.string(),
        description: z.string(),
    }),
    contactCards: z.array(z.object({
        type: z.enum(['phone', 'email', 'whatsapp', 'meeting']),
        label: z.string(),
        value: z.string(),
        icon: z.string(),
        href: z.string(),
    })),
    form: z.object({
        title: z.string(),
        description: z.string(),
        services: z.array(z.string()),
        budgets: z.array(z.string()),
        buttonText: z.string(),
    }),
    faqs: z.array(z.object({
        question: z.string(),
        answer: z.string(),
    })),
    office: z.object({
        title: z.string(),
        address: z.string(),
        email: z.string(),
    }),
});

export type ContactPageData = z.infer<typeof ContactPageSchema>;
