import { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";
import LogoutButton from "./LogoutButton";
import RoleBasedView from "./RoleBasedView";
import DashboardNavigationLink from "./DashboardNavigationLink";

export default function DashboardNavigation({
  className,
  ...props
}: ComponentProps<"nav">) {
  return (
    <>
      <nav
        className={cn("flex grow flex-col gap-1 max-md:order-1", className)}
        {...props}
      >
        <DashboardNavigationLink className="py-1" href="/dashboard">
          Dashboard
        </DashboardNavigationLink>
        <RoleBasedView role="admin">
          <DashboardNavigationLink className="py-1" href="/dashboard/products">
            Products
          </DashboardNavigationLink>
        </RoleBasedView>
        <RoleBasedView role="admin">
          <DashboardNavigationLink className="py-1" href="/dashboard/users">
            Users
          </DashboardNavigationLink>
        </RoleBasedView>
        <DashboardNavigationLink className="py-1" href="/dashboard/settings">
          Settings
        </DashboardNavigationLink>
      </nav>
      <LogoutButton className="max-md:ml-auto md:mt-auto md:w-full" />
    </>
  );
}
