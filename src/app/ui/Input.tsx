import type { ComponentProps } from "react";

export default function Input(props: ComponentProps<"input">) {
  return (
    <input
      className="bg-neutral-500/10 py-1.5 px-3 border border-neutral-500/10 focus-within:border-neutral-500 outline-none rounded-md"
      {...props}
    />
  );
}
