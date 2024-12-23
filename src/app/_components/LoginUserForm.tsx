"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useActionState } from "react";
import Link from "next/link";
import loginUser from "../_actions/loginUser";
import Form from "../_ui/Form";
import LoginUserFormFields from "./LoginUserFormFields";

export default function LoginUserForm(props: ComponentPropsWithoutRef<"form">) {
  const [state, action] = useActionState(loginUser, undefined);

  return (
    <Form action={action} {...props}>
      <LoginUserFormFields state={state} />
      <nav className="flex w-full place-content-center gap-4 text-sm font-medium">
        <Link className="underline underline-offset-4" href="/register">
          Register new user
        </Link>
      </nav>
    </Form>
  );
}
