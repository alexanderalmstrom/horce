import "server-only";

import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "~/lib/db";
import { usersTable } from "~/lib/db/schema";
import { verifySession } from "~/lib/session";

export const getUser = cache(async () => {
  const session = await verifySession();

  const users = await db
    .select({
      id: usersTable.id,
      role: usersTable.role,
      email: usersTable.email,
      fullName: usersTable.fullName,
    })
    .from(usersTable)
    .where(eq(usersTable.id, Number(session.userId)));

  const user = users[0];

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return userDTO(user);
});

function userDTO(user: {
  id: number;
  role: string;
  email: string;
  fullName: string | null;
}) {
  return {
    id: user.id,
    role: user.role,
    email: user.email,
    fullName: user.fullName ?? undefined,
  };
}
