"use server";

import { z } from "zod";
import { db } from "~/db";
import { usersTable } from "~/db/schema";

type NewUser = typeof usersTable.$inferInsert;

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export default async function createUser(formData: FormData) {
  const validation = userSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validation.success) {
    throw new Error("Failed to validate user form data");
  }

  const newUser: NewUser = {
    email: validation.data.email,
    password: validation.data.password,
  };

  try {
    await db.insert(usersTable).values(newUser);
  } catch {
    throw new Error("Failed to create user");
  }
}
