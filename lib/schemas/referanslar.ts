import { z } from 'zod';

export const TestimonialSchema = z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    image: z.string(),
    rating: z.number().optional(),
    service: z.string(), // For filtering
    sector: z.string(),  // For filtering
    results: z.array(z.string()).optional(), // "results badges" mentioned in step
});

export const ClientSchema = z.object({
    id: z.string(),
    name: z.string(),
    logo: z.string(),
    sector: z.string(),
});

export const ReferanslarPageSchema = z.object({
    hero: z.object({
        title: z.string(),
        subtitle: z.string(),
    }),
    filters: z.object({
        services: z.array(z.string()),
        sectors: z.array(z.string()),
    }),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;
export type Client = z.infer<typeof ClientSchema>;
export type ReferanslarPageData = z.infer<typeof ReferanslarPageSchema>;
