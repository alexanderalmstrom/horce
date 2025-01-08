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
    (pagePathname?.parentPathname &&
      pathname.includes(pagePathname.parentPathname)) ||
    url === `/${pagePathname?.currentPathname}`;

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

  const currentPathname = getCurrentPathname(pathname, -1);
  const parentPathname = getCurrentPathname(href);

  return {
    currentPathname,
    parentPathname,
  };
}

function getCurrentPathname(href: string, numberOfLevels = 1) {
  const hrefPathname = href.split("/");
  const currentPathname = hrefPathname
    .filter(Boolean)
    .slice(numberOfLevels, hrefPathname.length)
    .join("/");

  return currentPathname;
}
