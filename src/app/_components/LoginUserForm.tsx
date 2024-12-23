"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useActionState } from "react";
import loginUser from "../_actions/loginUser";
import Form from "../_ui/Form";
import LoginUserFormFields from "./LoginUserFormFields";
import LinkAsButton from "../_ui/LinkAsButton";

export default function LoginUserForm(props: ComponentPropsWithoutRef<"form">) {
  const [state, action] = useActionState(loginUser, undefined);

  return (
    <Form action={action} {...props}>
      <LoginUserFormFields state={state} />
      <LinkAsButton href="/register">Register new user</LinkAsButton>
    </Form>
  );
}
