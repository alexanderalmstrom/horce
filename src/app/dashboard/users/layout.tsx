import type { PropsWithChildren } from "react";
import UsersList from "~/app/_components/UsersList";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="text-2xl">Users</h1>
      <UsersList />
      {children}
    </>
  );
}
