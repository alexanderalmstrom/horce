import Link from "next/link";
import SiteLogo from "../_components/SiteLogo";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto flex min-h-svh flex-col place-content-center place-items-center gap-8 p-4 py-12 lg:py-24">
      <header className="flex flex-col items-center gap-4">
        <Link href="/">
          <SiteLogo />
        </Link>
      </header>
      {children}
    </main>
  );
}
