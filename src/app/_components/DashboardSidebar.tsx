import Link from "next/link";
import SiteLogo from "./SiteLogo";
import DashboardNavigation from "./DashboardNavigation";

export default function DashboardSidebar() {
  return (
    <header className="flex min-w-60 flex-col gap-6 border-foreground/10 p-6 max-lg:border-b lg:border-r">
      <Link href="/dashboard">
        <SiteLogo className="h-5 w-auto object-left" />
      </Link>
      <DashboardNavigation />
    </header>
  );
}
