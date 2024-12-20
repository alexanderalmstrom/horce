"use server";

import { z } from "zod";
import { db } from "~/lib/db";
import { usersTable } from "~/lib/db/schema";
import hashPassword from "~/lib/utils/hashPassword";

type UserInsert = typeof usersTable.$inferInsert;

type UserFieldErrors = z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];

type FormState = {
  message?: string;
  error?: UserFieldErrors | string;
};

const userSchema = z.object({
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
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return {
      error: validation.error.flatten().fieldErrors,
    };
  }

  const newUser = {
    email: validation.data.email,
    password: hashPassword(validation.data.password),
  } satisfies UserInsert;

  const createdUser = await db
    .insert(usersTable)
    .values(newUser)
    .returning()
    .catch((error) => {
      console.error("Failed to create user", error);

      if (error.code === "23505") {
        return {
          error: "USER_ALREADY_EXISTS",
        };
      }

      return {
        error: "USER_CREATION_FAILED",
      };
    });

  if (createdUser && "error" in createdUser) {
    return createdUser;
  }

  return {
    message: "USER_CREATED",
  };
}
