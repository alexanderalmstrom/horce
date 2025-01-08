import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function LinkAsButton({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "flex place-content-center place-items-center rounded-md border border-foreground/15 bg-background px-3 py-2.5 text-center font-medium text-foreground transition-[background-color,color,border] hover:bg-background-accent",
        className,
      )}
      {...props}
    />
  );
}
