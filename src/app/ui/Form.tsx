import { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function Form({
  className,
  children,
  ...props
}: ComponentProps<"form">) {
  return (
    <form
      className={cn(
        "flex w-full flex-col gap-4 rounded-md bg-neutral-500/5 p-8",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
}
