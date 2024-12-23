import LogoutUserButton from "./LogoutUserButton";
import RoleBasedView from "./RoleBasedView";
import DashboardNavigationLink from "./DashboardNavigationLink";

export default function DashboardNavigation() {
  return (
    <nav className="flex grow flex-col gap-1">
      <DashboardNavigationLink href="/dashboard">
        Dashboard
      </DashboardNavigationLink>
      <RoleBasedView role="admin">
        <DashboardNavigationLink href="/dashboard/users">
          Users
        </DashboardNavigationLink>
      </RoleBasedView>
      <DashboardNavigationLink href="/dashboard/settings">
        Settings
      </DashboardNavigationLink>
      <LogoutUserButton className="mt-auto" />
    </nav>
  );
}
