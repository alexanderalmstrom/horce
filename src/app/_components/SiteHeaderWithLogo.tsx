import Link from "next/link";
import SiteLogo from "./SiteLogo";

export default function SiteHeaderWithLogo() {
  return (
    <header className="flex flex-col items-center gap-4">
      <Link href="/">
        <SiteLogo />
      </Link>
    </header>
  );
}
