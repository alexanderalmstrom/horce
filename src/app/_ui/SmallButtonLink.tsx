"use client";

import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";
import LinkAsButton from "../_ui/LinkAsButton";

export default function SmallButtonLink({
  children,
  className,
  href,
  ...props
}: ComponentProps<typeof LinkAsButton>) {
  const pathname = usePathname();

  return (
    <LinkAsButton
      className={cn(
        "bg-foreground px-3 py-1.5 text-sm text-background hover:bg-foreground/90 hover:text-background",
        typeof href === "string" &&
          pathname.includes(href) &&
          "pointer-events-none select-none opacity-10",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </LinkAsButton>
  );
}
