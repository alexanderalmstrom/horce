"use server";

import { z } from "zod";
import { usersTable } from "~/lib/db/schema";
import checkPassword from "~/lib/utils/checkPassword";
import { db } from "~/lib/db";
import { eq } from "drizzle-orm";

type UserSelect = typeof usersTable.$inferSelect;

type UserFieldErrors = z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];

type FormState = {
  message?: string;
  error?: UserFieldErrors | string;
};

const userSchema = z.object({
  email: z.string().min(1, "USER_EMAIL_REQUIRED").email("USER_EMAIL_INVALID"),
  password: z.string().min(1, "USER_PASSWORD_REQUIRED"),
});

export default async function loginUser(
  prevState: FormState,
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
    !checkPassword(user.password, foundUsers[0].password)
  ) {
    return {
      error: "USER_INCORRECT_CREDENTIALS",
    };
  }

  return {
    message: "USER_LOGGED_IN",
  };
}
