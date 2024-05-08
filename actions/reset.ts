"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { resetSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { generateVerificationToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";

export const reset = async (values: z.infer<typeof resetSchema>) => {
  const validatedFields = resetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Field!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email dose not exist!" };
  }

  //   if (!existingUser.emailVerified) {
  //     const verificationToken = await generateVerificationToken(
  //       existingUser.email
  //     );

  //     await sendVerificationEmail(
  //       verificationToken.email,
  //       verificationToken.token
  //     );

  //     return { success: "Confirmation email sent!" };
  //   }

  //   try {
  //     await signIn("credentials", {
  //       email,
  //       redirectTo: DEFAULT_LOGIN_REDIRECT,
  //     });
  //   } catch (error) {
  //     if (error instanceof AuthError) {
  //       switch (error.type) {
  //         case "CredentialsSignin":
  //           return { error: "Invalid credentials!" };
  //         default:
  //           return { error: "Something went wrong!" };
  //       }
  //     }

  //     throw error;
  //   }

  return { success: "Reset email sent!" };
};
