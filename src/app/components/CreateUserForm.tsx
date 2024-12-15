"use client";

import createUser from "../actions/createUser";
import { ComponentProps, useActionState } from "react";
import Form from "../ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";

export default function CreateUserForm({ ...props }: ComponentProps<"form">) {
  const [state, action] = useActionState(createUser, {
    message: "",
  });

  return (
    <Form action={action} {...props}>
      <CreateUserFormFields state={state} />
    </Form>
  );
}
