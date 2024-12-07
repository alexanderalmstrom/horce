"use server";

import { z } from "zod";
import { db } from "~/db";
import { usersTable } from "~/db/schema";

type NewUser = typeof usersTable.$inferInsert;

type FormState = {
  status: number;
  error?: FieldErrors;
};

type FieldErrors = z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];

const userSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(255, "Password cannot be longer than 255 characters"),
});

export default async function createUser(
  prevState: FormState,
  formData: FormData
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
    password: validation.data.password,
  } satisfies NewUser;

  try {
    await db.insert(usersTable).values(newUser);

    return {
      status: 200,
      error: undefined,
    };
  } catch {
    return {
      status: 500,
      error: undefined,
    };
  }
}
