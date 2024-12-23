"use client";

import type { ComponentPropsWithoutRef } from "react";
import { useFormState } from "react-dom";
import loginUser from "../_actions/loginUser";
import Form from "../ui/Form";
import LoginUserFormFields from "./LoginUserFormFields";
import Link from "next/link";

export default function LoginUserForm(props: ComponentPropsWithoutRef<"form">) {
  const [state, action] = useFormState(loginUser, undefined);

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
