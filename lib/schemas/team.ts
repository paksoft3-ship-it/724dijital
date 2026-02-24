import { z } from 'zod';

export const TeamMemberSchema = z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    image: z.string(),
    skills: z.array(z.string()),
});

export const TeamDataSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    members: z.array(TeamMemberSchema),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type TeamData = z.infer<typeof TeamDataSchema>;
