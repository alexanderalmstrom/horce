import type { ComponentProps } from "react";

export default function Input(props: ComponentProps<"input">) {
  return (
    <input
      className="rounded-md border border-neutral-500/10 bg-neutral-500/10 px-3 py-1.5 outline-none focus-within:border-neutral-500"
      {...props}
    />
  );
}
