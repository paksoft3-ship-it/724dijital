import { z } from "zod";

export const ServiceSchema = z.object({
    slug: z.string(),
    title: z.string(),
    shortDesc: z.string(),
    iconKey: z.string(),
    tags: z.array(z.string()),
    features: z.array(z.string()).optional(),
    techStack: z.string().optional(),
    category: z.string().optional(),
});

export const ProjectSchema = z.object({
    slug: z.string(),
    title: z.string(),
    category: z.string(),
    image: z.string(),
    featured: z.boolean().optional(),
    description: z.string().optional(),
    stats: z.array(z.string()).optional(),
});

export const BlogPostSchema = z.object({
    slug: z.string(),
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.string(),
    readingTime: z.string(),
    author: z.string(),
    coverImage: z.string(),
});

export type Service = z.infer<typeof ServiceSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
