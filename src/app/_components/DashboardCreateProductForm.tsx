"use client";

import { type ComponentProps, useActionState } from "react";
import createProduct from "../_actions/createProduct";
import { cn } from "~/lib/utils/cn";
import DashboardCreateProductFormFields from "./DashboardCreateProductFormFields";

export default function DashboardCreateProductForm({
  className,
  ...props
}: ComponentProps<"form">) {
  const [state, action] = useActionState(createProduct, undefined);

  return (
    <form
      action={action}
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
    >
      <DashboardCreateProductFormFields state={state} />
    </form>
  );
}
