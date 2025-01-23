import type { PropsWithChildren } from "react";
import AccessDenied from "~/app/_components/AccessDenied";
import { getUser } from "~/app/_data/user";

export default async function Layout({ children }: PropsWithChildren) {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return children;
}
