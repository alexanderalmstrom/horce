import { Suspense } from "react";
import CurrentUserProfile from "../_components/CurrentUserProfile";

export default function Page() {
  return (
    <>
      <h1 className="text-xl">Dashboard</h1>
      <Suspense
        fallback={
          <div className="flex flex-col items-start gap-2 py-1">
            <div className="h-4 w-full max-w-8 animate-pulse rounded-sm bg-foreground/10" />
            <div className="h-4 w-full max-w-64 animate-pulse rounded-sm bg-foreground/10" />
            <div className="h-4 w-full max-w-24 animate-pulse rounded-sm bg-foreground/10" />
            <div className="h-4 w-full max-w-16 animate-pulse rounded-sm bg-foreground/10" />
          </div>
        }
      >
        <CurrentUserProfile />
      </Suspense>
    </>
  );
}
