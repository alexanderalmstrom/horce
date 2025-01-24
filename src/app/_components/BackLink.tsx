import type { ComponentProps } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BackLink({
  children,
  href,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link href={href} className="inline-flex items-center gap-1" {...props}>
      <ChevronLeft size={16} />
      {children}
    </Link>
  );
}
