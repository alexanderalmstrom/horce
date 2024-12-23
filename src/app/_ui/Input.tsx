import type { ComponentProps } from "react";

export default function Input(props: ComponentProps<"input">) {
  return (
    <input
      className="placeholder:text-foreground-accent rounded-md border border-foreground/15 bg-background-accent px-4 py-2 outline-none transition-[border,background-color] focus-within:border-foreground/50 group-hover:[&:not(:focus)]:border-foreground/25"
      {...props}
    />
  );
}
