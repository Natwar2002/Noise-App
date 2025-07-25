import { z } from "zod";

export const userSignUpSchema = z.object({
    email: z.email(),
    username: z.string().min(3),
    password: z.string().min(3),
    firstName: z.string(),
    lastName: z.string(),
});

export const userSignInSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(3),
})