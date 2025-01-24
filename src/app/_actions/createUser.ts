"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "~/lib/db";
import { usersTable } from "~/lib/db/schema";
import hashPassword from "~/lib/utils/hashPassword";

type UserInsert = typeof usersTable.$inferInsert;

type UserFieldErrors = z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];

type UserFieldInputs = z.infer<typeof userSchema>;

type FormState = {
  message?: string;
  error?: UserFieldErrors | string;
  inputs?: UserFieldInputs;
};

const userSchema = z.object({
  fullName: z
    .string()
    .min(1, "USER_FULL_NAME_REQUIRED")
    .max(255, "USER_FULL_NAME_TOO_LONG"),
  email: z.string().min(1, "USER_EMAIL_REQUIRED").email("USER_EMAIL_INVALID"),
  password: z
    .string()
    .min(1, "USER_PASSWORD_REQUIRED")
    .min(8, "USER_PASSWORD_TOO_SHORT")
    .max(255, "USER_PASSWORD_TOO_LONG"),
});

export default async function createUser(
  state: FormState | undefined,
  formData: FormData,
) {
  const validation = userSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return {
      error: validation.error.flatten().fieldErrors,
      inputs: {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    };
  }

  const newUser = {
    fullName: validation.data.fullName,
    email: validation.data.email,
    password: hashPassword(validation.data.password),
  } satisfies UserInsert;

  const createdUser = await db
    .insert(usersTable)
    .values(newUser)
    .returning()
    .catch((error) => {
      console.error("Error creating user", error);

      if (error.code === "23505") {
        return {
          error: "USER_ALREADY_EXISTS",
          inputs: validation.data,
        };
      }

      return {
        error: "USER_CREATE_ERROR",
        inputs: validation.data,
      };
    });

  if (createdUser && "error" in createdUser) {
    return createdUser;
  }

  revalidatePath("/dashboard/users");

  return {
    message: "USER_CREATED",
  };
}
