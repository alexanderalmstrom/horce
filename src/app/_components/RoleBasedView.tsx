import { PropsWithChildren } from "react";
import type { User } from "~/lib/db/schema";
import { verifySession } from "~/lib/session";

export default async function RoleBasedView({
  children,
  role,
}: PropsWithChildren<{ role: User["role"] }>) {
  const session = await verifySession();

  if (session?.role === role) {
    return children;
  }

  return null;
}
