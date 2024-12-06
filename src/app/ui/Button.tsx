import type { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  return (
    <button
      className="dark:bg-foreground dark:text-background py-1.5 px-3 rounded-md"
      {...props}
    />
  );
}
