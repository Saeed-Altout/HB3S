import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string()),
});

export const registerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Password is required" }),
});

export const resetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const newPasswordSchema = z.object({
  password: z.string().min(6, { message: "Password is required" }),
});

export const personSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
});

export const patientSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "email is required",
  }),
});
