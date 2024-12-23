"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

export default function DashboardNavigationLink({
  href,
  children,
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link className={cn(pathname === href && "underline")} href={href}>
      {children}
    </Link>
  );
}
