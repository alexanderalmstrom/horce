import CreateUserForm from "./components/CreateUserForm";
import SiteLogo from "./components/SiteLogo";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-lg flex-col place-content-center place-items-center gap-6 p-4 font-sans">
      <SiteLogo />
      <p className="font-medium">The one and only OMS for your business.</p>
      <CreateUserForm />
    </div>
  );
}
