"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function DashboardNavigationLink({
  children,
  className,
  href,
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      className={cn(pathname === href && "underline", className)}
      href={href}
    >
      {children}
    </Link>
  );
}
