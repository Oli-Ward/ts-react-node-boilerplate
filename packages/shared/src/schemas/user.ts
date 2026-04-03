import { z } from 'zod';

export const UserSchema = z.object({
    id: z.number().int(),
    name: z.string().min(1),
    email: z.email(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export type User = z.infer<typeof UserSchema>;