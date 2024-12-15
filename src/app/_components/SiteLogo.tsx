import Image from "next/image";

export default function SiteLogo() {
  return (
    <Image
      className="h-8 w-40 object-contain dark:invert"
      src="/horce.svg"
      alt="Horce"
      width={300}
      height={64}
      loading="eager"
    />
  );
}
