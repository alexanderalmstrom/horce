import Image from "next/image";
import CreateUserForm from "./components/CreateUserForm";

export default function Home() {
  return (
    <div className="grid place-content-center place-items-center w-full min-h-screen font-sans mx-auto gap-6">
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
