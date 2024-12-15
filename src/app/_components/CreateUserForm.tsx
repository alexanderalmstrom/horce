"use client";

import { ComponentProps } from "react";
import { useFormState } from "react-dom";
import createUser from "../_actions/createUser";
import Form from "../ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";
import Link from "next/link";

export default function CreateUserForm({ ...props }: ComponentProps<"form">) {
  const [state, action] = useFormState(createUser, undefined);

  return (
    <Form action={action} {...props}>
      <CreateUserFormFields state={state} />
      <nav className="flex w-full place-content-center gap-4 font-medium">
        <Link className="underline underline-offset-2" href="/login">
          Back to login
        </Link>
      </nav>
    </Form>
  );
}
