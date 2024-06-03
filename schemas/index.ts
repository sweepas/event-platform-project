import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {message:"Please enter your password"})
})

export const RegisterSchema = z.object({})