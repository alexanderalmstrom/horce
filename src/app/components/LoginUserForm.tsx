"use client";

import { ComponentProps } from "react";
import { useFormState } from "react-dom";
import loginUser from "../actions/loginUser";
import Form from "../ui/Form";
import LoginUserFormFields from "./LoginUserFormFields";

export default function LoginUserForm({ ...props }: ComponentProps<"form">) {
  const [state, action] = useFormState(loginUser, {
    message: "",
  });

  return (
    <Form action={action} {...props}>
      <LoginUserFormFields state={state} />
    </Form>
  );
}
