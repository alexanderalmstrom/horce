import Link from "next/link";
import SiteLogo from "../_components/SiteLogo";
import LogoutUserButton from "../_components/LogoutUserButton";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex grow flex-col lg:flex-row">
      <header className="flex min-w-60 flex-col gap-6 border-foreground/10 p-6 max-lg:border-b lg:border-r">
        <Link href="/dashboard">
          <SiteLogo className="h-5 w-auto object-left" />
        </Link>
        <nav className="flex grow flex-col gap-1">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/settings">Settings</Link>
          <LogoutUserButton className="mt-auto" />
        </nav>
      </header>
      <article className="grow p-6">{children}</article>
    </main>
  );
}
