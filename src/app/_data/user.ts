import "server-only";
import { eq } from "drizzle-orm";
import { db } from "~/lib/db";
import { usersTable } from "~/lib/db/schema";
import { verifySession } from "~/lib/session";

export async function getUser() {
  const session = await verifySession();

  const users = await db
    .select({
      id: usersTable.id,
      email: usersTable.email,
      role: usersTable.role,
    })
    .from(usersTable)
    .where(eq(usersTable.id, Number(session.userId)));

  const user = users[0];

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return userDTO(user);
}

function userDTO(user: { id: number; email: string; role: string }) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
  };
}
