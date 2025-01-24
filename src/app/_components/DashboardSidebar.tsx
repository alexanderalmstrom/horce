import Link from "next/link";
import SiteLogo from "./SiteLogo";
import DashboardNavigation from "./DashboardNavigation";

export default function DashboardSidebar() {
  return (
    <header className="grid min-w-60 grid-cols-2 items-start gap-6 border-foreground/10 p-6 max-md:border-b md:flex md:flex-col md:border-r">
      <Link
        href="/dashboard"
        className="my-[1px] mr-auto flex min-h-8 items-center"
      >
        <SiteLogo className="flex max-h-6 w-auto" />
      </Link>
      <DashboardNavigation />
    </header>
  );
}
