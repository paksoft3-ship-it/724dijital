import fs from "fs/promises";
import path from "path";
import { SiteSchema, type SiteData } from "./schemas/site";
import { HomeSchema, type HomeData } from "./schemas/home";
import { ServiceSchema, ProjectSchema, type Service, type Project } from "./schemas/content";
import { ServicesPageSchema, type ServicesPageData } from "./schemas/services-page";
import { ServiceDetailSchema, type ServiceDetail } from "./schemas/service-detail";
import { SectorsPageSchema, type SectorsPageData } from "./schemas/sectors";
import { ProcessPageSchema, type ProcessPageData } from "./schemas/process";
import { ReferanslarPageSchema, TestimonialSchema, ClientSchema, type ReferanslarPageData, type Testimonial, type Client } from "./schemas/referanslar";
import { AboutPageSchema, type AboutPageData } from "./schemas/about";
import { TeamDataSchema, type TeamData } from "./schemas/team";
import { BlogPageSchema, BlogPostSchema, BlogDetailSchema, type BlogPageData, type BlogPost, type BlogDetail } from "./schemas/blog";
import { ContactPageSchema, type ContactPageData } from "./schemas/contact";
import { z } from "zod";

const DATA_PATH = path.join(process.cwd(), "data");

async function readJsonFile(filePath: string) {
    const fullPath = path.join(DATA_PATH, filePath);
    const content = await fs.readFile(fullPath, "utf-8");
    return JSON.parse(content);
}

export async function getSiteData(): Promise<SiteData> {
    const data = await readJsonFile("site.json");
    return SiteSchema.parse(data);
}

export async function getHomeData(fileName: string = "home.json"): Promise<HomeData> {
    const data = await readJsonFile(fileName);
    return HomeSchema.parse(data);
}

export async function getServices(): Promise<Service[]> {
    const data = await readJsonFile("services.json") as unknown[];
    return data.map((item) => ServiceSchema.parse(item));
}

export async function getProjects(): Promise<Project[]> {
    const data = await readJsonFile("projects.json") as unknown[];
    return data.map((item) => ProjectSchema.parse(item));
}

export async function getServicesPageData(): Promise<ServicesPageData> {
    const data = await readJsonFile("services-page.json");
    return ServicesPageSchema.parse(data);
}

export async function getServiceDetailBySlug(slug: string): Promise<ServiceDetail | undefined> {
    try {
        const data = await readJsonFile(`services/${slug}.json`);
        return ServiceDetailSchema.parse(data);
    } catch (error) {
        console.error(`Error loading service detail for ${slug}:`, error);
        return undefined;
    }
}

export async function getSectorsPageData(): Promise<SectorsPageData> {
    const data = await readJsonFile("sectors.json");
    return SectorsPageSchema.parse(data);
}

export async function getProcessPageData(): Promise<ProcessPageData> {
    const data = await readJsonFile("process.json");
    return ProcessPageSchema.parse(data);
}

export async function getReferanslarPageData(): Promise<ReferanslarPageData> {
    const data = await readJsonFile("referanslar-page.json");
    return ReferanslarPageSchema.parse(data);
}

export async function getTestimonials(): Promise<Testimonial[]> {
    const data = await readJsonFile("testimonials.json");
    return z.array(TestimonialSchema).parse(data);
}

export async function getClients(): Promise<Client[]> {
    const data = await readJsonFile("clients.json");
    return z.array(ClientSchema).parse(data);
}

export async function getAboutPageData(): Promise<AboutPageData> {
    const data = await readJsonFile("about.json");
    return AboutPageSchema.parse(data);
}

export async function getTeamData(): Promise<TeamData> {
    const data = await readJsonFile("team.json");
    return TeamDataSchema.parse(data);
}

export async function getBlogPageData(): Promise<BlogPageData> {
    const data = await readJsonFile("blog-page.json");
    return BlogPageSchema.parse(data);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const data = await readJsonFile(path.join("blog", "posts.json"));
    return z.array(BlogPostSchema).parse(data);
}

export async function getBlogDetailBySlug(slug: string): Promise<BlogDetail | undefined> {
    try {
        const data = await readJsonFile(path.join("blog", "details", `${slug}.json`));
        return BlogDetailSchema.parse(data);
    } catch (error) {
        console.error(`Error loading blog detail for ${slug}:`, error);
        return undefined;
    }
}

export async function getContactPageData(): Promise<ContactPageData> {
    const data = await readJsonFile("contact.json");
    return ContactPageSchema.parse(data);
}
