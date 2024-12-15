"use client";

import createUser from "../actions/createUser";
import { ComponentProps } from "react";
import Form from "../ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";
import { useFormState } from "react-dom";

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
