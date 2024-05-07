"use server";

import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  const { email, password } = validatedFields.data;

  return { success: "Email Sent" };
};
