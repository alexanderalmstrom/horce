import type { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function Button({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "flex place-content-center place-items-center rounded-md bg-foreground px-3 py-2.5 text-center font-medium text-background disabled:opacity-75",
        className,
      )}
      {...props}
    />
  );
}
