import type { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  return (
    <button
      className="bg-foreground text-background py-1.5 px-3 rounded-md"
      {...props}
    />
  );
}
