import Image from "next/image";
import CreateUserForm from "./components/CreateUserForm";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-screen-sm flex-col place-content-center place-items-center gap-6 p-4 font-sans">
      <Image
        className="dark:invert"
        src="/horce.svg"
        alt="Horce"
        width={150}
        height={32}
      />
      <p>The one and only OMS for your business.</p>
      <CreateUserForm />
    </div>
  );
}
