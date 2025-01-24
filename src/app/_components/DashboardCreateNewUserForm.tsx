"use client";

import type { ComponentProps } from "react";
import { useActionState } from "react";
import createUser from "../_actions/createUser";
import CreateUserFormFields from "./CreateUserFormFields";
import { cn } from "~/lib/utils/cn";

export default function DashboardCreateNewUserForm({
  className,
  ...props
}: ComponentProps<"form">) {
  const [state, action] = useActionState(createUser, undefined);

  return (
    <form
      action={action}
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
    >
      <CreateUserFormFields state={state} />
    </form>
  );
}
