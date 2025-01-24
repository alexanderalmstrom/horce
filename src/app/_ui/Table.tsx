import type { PropsWithChildren } from "react";

export default function Table({ children }: PropsWithChildren) {
  return (
    <div className="mb-4 overflow-x-auto">
      <div className="table w-full py-4 text-sm">{children}</div>
    </div>
  );
}
