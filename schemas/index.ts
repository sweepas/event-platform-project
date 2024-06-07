import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {message:"Please enter your password"})
})

export const RegisterSchema = z.object({authId: z.string().min(1, "authId is required"),
email: z.string().email("Invalid email address").min(1, "email is required"),
username: z.string().min(1, "username is required"),
firstName: z.string().min(1, "Name is required"),
lastName: z.string().min(1, "Last Name is required"),
password: z.string().min(6, "Minimum 6 character password is required"),
})