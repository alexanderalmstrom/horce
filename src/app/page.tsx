import Link from "next/link";
import LoginUserForm from "./_components/LoginUserForm";
import SiteLogo from "./_components/SiteLogo";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh flex-col place-content-center place-items-center gap-8 p-4 py-12 font-sans lg:py-24">
      <header className="flex flex-col items-center gap-4">
        <Link href="/">
          <SiteLogo />
        </Link>
      </header>
      <LoginUserForm className="max-w-lg" />
    </main>
  );
}
