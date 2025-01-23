import { Suspense } from "react";
import type { PropsWithChildren } from "react";
import AccessDenied from "~/app/_components/AccessDenied";
import NewUserButtonLink from "~/app/_components/NewUserButtonLink";
import UsersList from "~/app/_components/UsersList";
import { getUser } from "~/app/_data/user";

export default async function Layout({ children }: PropsWithChildren) {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Users</h1>
        <NewUserButtonLink />
      </header>
      <Suspense
        fallback={
          <div className="flex flex-col items-start gap-4 py-6">
            <div className="h-6 w-full max-w-24 animate-pulse rounded-sm bg-foreground/10" />
            <div className="flex h-4 w-full flex-row gap-3">
              <div className="w-full max-w-32 animate-pulse rounded-sm bg-foreground/10" />
              <div className="w-full max-w-32 animate-pulse rounded-sm bg-foreground/10" />
              <div className="w-full max-w-32 animate-pulse rounded-sm bg-foreground/10" />
            </div>
            <div className="flex w-full flex-col gap-2">
              <div className="h-4 w-full animate-pulse rounded-sm bg-foreground/10" />
              <div className="h-4 w-full animate-pulse rounded-sm bg-foreground/10" />
              <div className="h-4 w-full animate-pulse rounded-sm bg-foreground/10" />
            </div>
            <div className="h-12 w-full animate-pulse rounded-sm bg-foreground/20" />
          </div>
        }
      >
        <UsersList />
      </Suspense>
      {children}
    </>
  );
}
