import { Suspense, type PropsWithChildren } from "react";
import UsersList from "~/app/_components/UsersList";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="text-2xl">Users</h1>
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
