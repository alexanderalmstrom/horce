import Link from "next/link";
import { ComponentProps } from "react";

export default function LinkAsButton(props: ComponentProps<typeof Link>) {
  return (
    <Link
      className="flex place-content-center place-items-center rounded-md border border-foreground/15 bg-background px-3 py-2.5 text-center font-medium text-foreground transition-[background-color,color,border] hover:bg-background-accent"
      {...props}
    />
  );
}
