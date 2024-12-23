import Image, { ImageProps } from "next/image";
import { cn } from "~/lib/utils/cn";

export default function SiteLogo({
  className,
  ...props
}: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      className={cn("h-8 w-40 object-contain dark:invert", className)}
      src="/horce.svg"
      alt="Horce"
      width={300}
      height={64}
      loading="eager"
      {...props}
    />
  );
}
