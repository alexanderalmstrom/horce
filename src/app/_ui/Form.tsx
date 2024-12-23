import type { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function Form({
  className,
  children,
  ...props
}: ComponentProps<"form">) {
  return (
    <form
      className={cn(
        "flex w-full flex-col gap-4 rounded-md border border-foreground/10 bg-background-accent px-8 py-12",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
}
