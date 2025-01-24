import type { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function LayoutCentered({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "mx-auto flex min-h-svh w-full grow flex-col place-content-center place-items-center gap-12 p-4 py-12 md:py-24",
        className,
      )}
      {...props}
    >
      {children}
    </main>
  );
}
