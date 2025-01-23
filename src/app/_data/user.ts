import "server-only";

import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "~/lib/db";
import { User, usersTable } from "~/lib/db/schema/users";
import { verifySession } from "~/lib/session";

export const getUsers = cache(async () => {
  // const users = await db
  //   .select({
  //     id: usersTable.id,
  //     role: usersTable.role,
  //     email: usersTable.email,
  //     fullName: usersTable.fullName,
  //   })
  //   .from(usersTable)
  //   .orderBy(asc(usersTable.id));

  const users = await db.query.users.findMany({
    columns: {
      id: true,
      role: true,
      email: true,
      fullName: true,
    },
    orderBy: (users, { asc }) => [asc(users.id)],
  });

  return users.map(userDTO);
});

export const getUser = cache(async (id?: string) => {
  const session = await verifySession();

  const users = await db
    .select({
      id: usersTable.id,
      role: usersTable.role,
      email: usersTable.email,
      fullName: usersTable.fullName,
    })
    .from(usersTable)
    .where(eq(usersTable.id, Number(id ?? session.userId)));

  const user = users[0];

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return userDTO(user);
});

function userDTO(user: Pick<User, "id" | "role" | "email" | "fullName">) {
  return {
    id: user.id,
    role: user.role,
    email: user.email,
    fullName: user.fullName ?? undefined,
  };
}

export type UserDTO = ReturnType<typeof userDTO>;
