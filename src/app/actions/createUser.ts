"use server";

import { z } from "zod";
import { db } from "~/lib/db";
import { usersTable } from "~/lib/db/schema";
import hashPassword from "~/lib/utils/hashPassword";

type NewUser = typeof usersTable.$inferInsert;

type FormState = {
  status: number;
  error?: CreateUserFieldErrors | string;
  message?: string;
};

export type CreateUserFieldErrors = z.inferFlattenedErrors<
  typeof userSchema
>["fieldErrors"];

const userSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(255, "Password cannot be longer than 255 characters"),
});

export default async function createUser(
  prevState: FormState,
  formData: FormData,
) {
  const validation = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    return {
      status: 400,
      error: validation.error.flatten().fieldErrors,
    };
  }

  const newUser = {
    email: validation.data.email,
    password: hashPassword(validation.data.password),
  } satisfies NewUser;

  const createdUser = await db
    .insert(usersTable)
    .values(newUser)
    .returning()
    .catch((error) => {
      if (error.code === "23505") {
        return {
          status: 400,
          error: "A user with that email already exists",
        };
      }

      return {
        status: 500,
        error: "An error occurred while creating the user",
      };
    });

  if (createdUser && "error" in createdUser) {
    return createdUser;
  }

  return {
    status: 200,
    message: "User created successfully",
  };
}
