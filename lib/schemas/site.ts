import { z } from "zod";

export const NavItemSchema = z.object({
    label: z.string(),
    href: z.string(),
});

export const SocialLinkSchema = z.object({
    platform: z.string(),
    url: z.string(),
    icon: z.string(),
});

export const FooterColumnSchema = z.object({
    title: z.string(),
    links: z.array(NavItemSchema),
});

export const SiteSchema = z.object({
    brandName: z.string(),
    navItems: z.array(NavItemSchema),
    footerColumns: z.array(FooterColumnSchema),
    contact: z.object({
        phone: z.string(),
        email: z.string(),
        address: z.string(),
        whatsapp: z.string(),
    }),
    socialLinks: z.array(SocialLinkSchema),
});

export type SiteData = z.infer<typeof SiteSchema>;
export type NavItem = z.infer<typeof NavItemSchema>;
export type SocialLink = z.infer<typeof SocialLinkSchema>;
export type FooterColumn = z.infer<typeof FooterColumnSchema>;
