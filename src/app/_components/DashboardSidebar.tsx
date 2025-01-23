import Link from "next/link";
import SiteLogo from "./SiteLogo";
import DashboardNavigation from "./DashboardNavigation";

export default function DashboardSidebar() {
  return (
    <header className="grid min-w-60 grid-cols-2 items-start gap-6 border-foreground/10 p-6 max-lg:border-b lg:flex lg:flex-col lg:border-r">
      <Link href="/dashboard" className="mr-auto">
        <SiteLogo className="flex max-h-6 w-auto object-left" />
      </Link>
      <DashboardNavigation />
    </header>
  );
}
