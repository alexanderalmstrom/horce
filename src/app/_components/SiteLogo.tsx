import Image from "next/image";

export default function SiteLogo() {
  return (
    <Image
      className="dark:invert"
      src="/horce.svg"
      alt="Horce"
      width={150}
      height={32}
    />
  );
}
