import type { ComponentProps } from "react";

export default function Label(props: ComponentProps<"label">) {
  return <label className="flex text-sm" {...props} />;
}
