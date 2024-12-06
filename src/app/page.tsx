import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center place-content-center min-h-screen font-sans">
      <Image
        className="dark:invert"
        src="/horce.svg"
        alt="Horce"
        width={150}
        height={32}
      />
    </div>
  );
}
