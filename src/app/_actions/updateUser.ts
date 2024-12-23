"use server";

import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/lib/db";
import { usersTable } from "~/lib/db/schema";
import { getUser } from "../_data/user";
import { revalidatePath } from "next/cache";

type UserFieldErrors = z.inferFlattenedErrors<typeof userSchema>["fieldErrors"];

type FormState = {
  message?: string;
  error?: UserFieldErrors | string;
  inputs?: {
    fullName: string;
    email: string;
  };
};

const userSchema = z.object({
  fullName: z
    .string()
    .min(1, "USER_FULL_NAME_REQUIRED")
    .max(255, "USER_FULL_NAME_TOO_LONG"),
  email: z.string().min(1, "USER_EMAIL_REQUIRED").email("USER_EMAIL_INVALID"),
});

export default async function updateUser(
  state: FormState | undefined,
  formData: FormData,
) {
  const rawInputData = {
    fullName: formData.get("fullName") as string,
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

  const currentUser = await getUser();

  const newUser = {
    fullName: validation.data.fullName,
    email: validation.data.email,
  };

  const updatedUser = await db
    .update(usersTable)
    .set(newUser)
    .where(eq(usersTable.id, currentUser.id))
    .catch((error) => {
      console.error("Failed to update user", error);

      return {
        error: "USER_UPDATE_FAILED",
        inputs: rawInputData,
      };
    });

  if (updatedUser && "error" in updatedUser) {
    return updatedUser;
  }

  revalidatePath("/dashboard/settings");

  return {
    message: "USER_UPDATED",
  };
}
