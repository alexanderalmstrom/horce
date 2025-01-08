"use client";

import type { ComponentProps } from "react";
import { useActionState } from "react";
import createUser from "../_actions/createUser";
import Form from "../_ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";
import LinkAsButton from "../_ui/LinkAsButton";

export default function CreateUserForm(props: ComponentProps<"form">) {
  const [state, action] = useActionState(createUser, undefined);

  return (
    <Form action={action} {...props}>
      <h2 className="text-center text-lg font-medium">Register new user</h2>
      <CreateUserFormFields state={state} />
      <LinkAsButton href="/login">Back to login</LinkAsButton>
    </Form>
  );
}
