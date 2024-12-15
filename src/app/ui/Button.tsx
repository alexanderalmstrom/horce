import type { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
  return (
    <button
      className="flex place-content-center place-items-center rounded-md bg-foreground px-3 py-2.5 text-center font-medium text-background disabled:opacity-50"
      {...props}
    />
  );
}
