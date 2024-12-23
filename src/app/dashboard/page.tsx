import { Suspense } from "react";
import CurrentUserProfile from "../_components/CurrentUserProfile";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-start gap-2 py-1">
          <div className="h-6 w-full max-w-52 animate-pulse rounded-sm bg-foreground/10" />
        </div>
      }
    >
      <CurrentUserProfile />
    </Suspense>
  );
}
