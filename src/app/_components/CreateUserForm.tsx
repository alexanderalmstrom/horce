"use client";

import type { ComponentProps } from "react";
import { useActionState } from "react";
import Link from "next/link";
import createUser from "../_actions/createUser";
import Form from "../_ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";

export default function CreateUserForm(props: ComponentProps<"form">) {
  const [state, action] = useActionState(createUser, undefined);

  return (
    <Form action={action} {...props}>
      <CreateUserFormFields state={state} />
      <nav className="flex w-full place-content-center gap-4 text-sm font-medium">
        <Link className="underline underline-offset-4" href="/login">
          Back to login
        </Link>
      </nav>
    </Form>
  );
}
