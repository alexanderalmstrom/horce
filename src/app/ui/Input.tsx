import type { ComponentProps } from "react";

export default function Input(props: ComponentProps<"input">) {
  return (
    <input
      className="rounded-md border border-neutral-500/20 bg-neutral-500/5 px-4 py-2 outline-none transition-[border,background-color] focus-within:border-neutral-500/40 focus-within:bg-neutral-500/10"
      {...props}
    />
  );
}
