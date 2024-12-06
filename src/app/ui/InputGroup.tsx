import type { ComponentProps } from "react";

export default function InputGroup(props: ComponentProps<"div">) {
  return <div className="grow gap-2 flex flex-col" {...props} />;
}
