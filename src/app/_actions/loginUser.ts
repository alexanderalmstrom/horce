"use server";

import { z } from "zod";
import { eq } from "drizzle-orm";
import { usersTable } from "~/lib/db/schema";
import { db } from "~/lib/db";
import verifyPassword from "~/lib/utils/verifyPassword";
import { createSession } from "~/lib/session";

type UserSelect = typeof usersTable.$inferSelect;

type UserFieldErrors = z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];

type FormState = {
  message?: string;
  error?: UserFieldErrors | string;
  inputs?: {
    email: string;
    password: string;
  };
};

const userSchema = z.object({
  email: z.string().min(1, "USER_EMAIL_REQUIRED").email("USER_EMAIL_INVALID"),
  password: z.string().min(1, "USER_PASSWORD_REQUIRED"),
});

export default async function loginUser(
  state: FormState | undefined,
  formData: FormData,
) {
  const rawInputData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const validation = userSchema.safeParse(rawInputData);

  if (!validation.success) {
    return {
      error: validation.error.flatten().fieldErrors,
      inputs: rawInputData,
    };
  }

  const user = {
    email: validation.data.email,
    password: validation.data.password,
  } satisfies Partial<UserSelect>;

  const foundUsers = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, user.email));

  if (
    !foundUsers.length ||
    !verifyPassword(user.password, foundUsers[0].password)
  ) {
    return {
      error: "USER_INCORRECT_CREDENTIALS",
      inputs: rawInputData,
    };
  }

  await createSession({
    userId: String(foundUsers[0].id),
    role: foundUsers[0].role,
  });

  return {
    message: "USER_LOGGED_IN",
  };
}
