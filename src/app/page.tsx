import CreateUserForm from "./components/CreateUserForm";
import LoginUserForm from "./components/LoginUserForm";
import SiteLogo from "./components/SiteLogo";

export const revalidate = 86400;
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh flex-col place-content-center place-items-center gap-6 p-4 py-12 font-sans lg:py-24">
      <SiteLogo />
      <p className="font-medium">The one and only OMS for your business.</p>
      <div className="flex w-full max-w-xl flex-col items-start gap-6 lg:max-w-4xl lg:flex-row">
        <LoginUserForm />
        <CreateUserForm />
      </div>
    </div>
  );
}
