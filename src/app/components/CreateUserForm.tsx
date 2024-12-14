"use client";

import createUser from "../actions/createUser";
import { ComponentProps, useActionState } from "react";
import Form from "../ui/Form";
import CreateUserFormFields from "./CreateUserFormFields";

const initialState = {
  message: "",
};

export default function CreateUserForm({ ...props }: ComponentProps<"form">) {
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <Form action={formAction} {...props}>
      <CreateUserFormFields state={state} />
    </Form>
  );
}
