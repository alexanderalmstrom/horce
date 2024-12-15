import LoginOrRegisterForm from "./components/LoginOrRegisterForm";
import SiteLogo from "./components/SiteLogo";

export const revalidate = 86400;
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh flex-col place-content-center place-items-center gap-8 p-4 py-12 font-sans lg:py-24">
      <header className="flex flex-col items-center gap-4">
        <SiteLogo />
      </header>
      <LoginOrRegisterForm />
    </div>
  );
}
