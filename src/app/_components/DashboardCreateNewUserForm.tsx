"use client";

import type { ComponentProps } from "react";
import { useActionState } from "react";
import createUser from "../_actions/createUser";
import CreateUserFormFields from "./CreateUserFormFields";

export default function DashboardCreateNewUserForm(
  props: ComponentProps<"form">,
) {
  const [state, action] = useActionState(createUser, undefined);

  return (
    <form action={action} className="flex w-full flex-col gap-4" {...props}>
      <CreateUserFormFields state={state} />
    </form>
  );
}
