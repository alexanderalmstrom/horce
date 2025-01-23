"use client";

import { usePathname } from "next/navigation";
import LinkAsButton from "../_ui/LinkAsButton";
import { cn } from "~/lib/utils/cn";

export default function NewUserButtonLink() {
  const pathname = usePathname();

  return (
    <LinkAsButton
      className={cn(
        "bg-foreground px-3 py-1.5 text-sm text-background hover:bg-foreground/90 hover:text-background",
        pathname.includes("/dashboard/users/new") &&
          "pointer-events-none select-none opacity-10",
      )}
      href="/dashboard/users/new"
    >
      New user
    </LinkAsButton>
  );
}
