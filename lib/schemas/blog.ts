import { z } from 'zod';

export const BlogPostSchema = z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    image: z.string(),
    author: z.object({
        name: z.string(),
        avatar: z.string().optional(),
        role: z.string().optional(),
    }).optional(),
    difficulty: z.enum(['Başlangıç', 'Orta', 'İleri']).optional(),
    city: z.string().optional(),
    isRecent: z.boolean().optional(),
});

export const ContentBlockSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('paragraph'),
        content: z.string(),
    }),
    z.object({
        type: z.literal('heading'),
        level: z.number(),
        text: z.string(),
        id: z.string(),
    }),
    z.object({
        type: z.literal('list'),
        items: z.array(z.string()),
        ordered: z.boolean().optional(),
    }),
    z.object({
        type: z.literal('callout'),
        title: z.string(),
        description: z.string(),
        buttonText: z.string(),
        link: z.string(),
    }),
    z.object({
        type: z.literal('image'),
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
    }),
]);

export const BlogDetailSchema = z.object({
    post: BlogPostSchema,
    content: z.array(ContentBlockSchema),
    relatedPostIds: z.array(z.string()),
});

export const BlogPageSchema = z.object({
    hero: z.object({
        title: z.string(),
        placeholder: z.string(),
    }),
    categories: z.array(z.string()),
    filters: z.object({
        difficulty: z.array(z.string()),
        readTime: z.array(z.string()),
        cities: z.array(z.string()),
    }),
    leadMagnet: z.object({
        badge: z.string(),
        title: z.string(),
        description: z.string(),
        buttonText: z.string(),
        icon: z.string(),
    }),
    newsletter: z.object({
        title: z.string(),
        description: z.string(),
        buttonText: z.string(),
    }),
    cta: z.object({
        title: z.string(),
        subtitle: z.string(),
        primaryButton: z.string(),
        secondaryButton: z.string(),
    }),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;
export type BlogPageData = z.infer<typeof BlogPageSchema>;
export type ContentBlock = z.infer<typeof ContentBlockSchema>;
export type BlogDetail = z.infer<typeof BlogDetailSchema>;
