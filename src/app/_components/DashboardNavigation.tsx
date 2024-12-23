"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils/cn";
import LogoutUserButton from "./LogoutUserButton";

export default function DashboardNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex grow flex-col gap-1">
      <Link
        className={cn(pathname === "/dashboard" && "underline")}
        href="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className={cn(pathname === "/dashboard/users" && "underline")}
        href="/dashboard/users"
      >
        Users
      </Link>
      <Link
        className={cn(pathname === "/dashboard/settings" && "underline")}
        href="/dashboard/settings"
      >
        Settings
      </Link>
      <LogoutUserButton className="mt-auto" />
    </nav>
  );
}
