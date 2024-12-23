import { Suspense } from "react";
import AccessDenied from "~/app/_components/AccessDenied";
import UsersList from "~/app/_components/UsersList";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <div>
      <h1 className="text-2xl">Users</h1>
      <Suspense
        fallback={
          <div className="flex flex-col items-start gap-4 py-6">
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
          </div>
        }
      >
        <UsersList />
      </Suspense>
    </div>
  );
}
