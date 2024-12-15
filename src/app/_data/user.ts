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
    })
    .from(usersTable)
    .where(eq(usersTable.id, Number(session.userId)));

  return userDTO(users[0]);
}

function userDTO(user: { id: number; email: string }) {
  return {
    id: user.id,
    email: user.email,
  };
}
