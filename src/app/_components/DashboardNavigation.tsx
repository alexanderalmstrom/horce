import LogoutButton from "./LogoutButton";
import RoleBasedView from "./RoleBasedView";
import DashboardNavigationLink from "./DashboardNavigationLink";

export default function DashboardNavigation() {
  return (
    <>
      <nav className="flex grow flex-col gap-1">
        <DashboardNavigationLink className="py-1" href="/dashboard">
          Dashboard
        </DashboardNavigationLink>
        <RoleBasedView role="admin">
          <DashboardNavigationLink className="py-1" href="/dashboard/users">
            Users
          </DashboardNavigationLink>
        </RoleBasedView>
        <DashboardNavigationLink className="py-1" href="/dashboard/settings">
          Settings
        </DashboardNavigationLink>
      </nav>
      <LogoutButton className="mt-auto" />
    </>
  );
}
