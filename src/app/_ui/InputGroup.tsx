import type { ComponentProps } from "react";

export default function InputGroup(props: ComponentProps<"div">) {
  return <div className="group flex grow flex-col gap-2" {...props} />;
}
