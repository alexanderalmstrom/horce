"use client";

import { ComponentProps } from "react";
import { useFormState } from "react-dom";
import createUser from "../actions/createUser";
import Form from "../ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";

export default function CreateUserForm({ ...props }: ComponentProps<"form">) {
  const [state, action] = useFormState(createUser, {
    message: "",
  });

  return (
    <Form action={action} {...props}>
      <CreateUserFormFields state={state} />
    </Form>
  );
}
