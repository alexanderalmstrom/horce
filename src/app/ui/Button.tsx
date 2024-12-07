import type { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  return (
    <button
      className="rounded-md bg-foreground px-3 py-1.5 text-background"
      {...props}
    />
  );
}
