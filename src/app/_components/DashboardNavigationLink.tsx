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
  const url = typeof href === "string" ? href : undefined;
  const pagePathname = getPathnameByUrl(pathname, url);

  const isCurrent =
    (pagePathname?.parentPath && pathname.includes(pagePathname.parentPath)) ||
    url === `/${pagePathname?.currentPath}`;

  return (
    <Link className={cn(isCurrent && "underline", className)} href={href}>
      {children}
    </Link>
  );
}

function getPathnameByUrl(pathname: string, href?: string) {
  if (!href) {
    return undefined;
  }

  const currentPath = getCurrentPath(pathname, -1);
  const parentPath = getCurrentPath(href);

  return {
    currentPath,
    parentPath,
  };
}

function getCurrentPath(href: string, numberOfLevels = 1) {
  const path = href
    .split("/")
    .filter(Boolean)
    .slice(numberOfLevels, href.split("/").length)
    .join("/");

  return path;
}
