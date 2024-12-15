"use client";

import { ComponentProps } from "react";
import { useFormState } from "react-dom";
import loginUser from "../actions/loginUser";
import Form from "../ui/Form";
import LoginUserFormFields from "./LoginUserFormFields";
import Link from "next/link";

export default function LoginUserForm({ ...props }: ComponentProps<"form">) {
  const [state, action] = useFormState(loginUser, {
    message: "",
  });

  return (
    <Form action={action} {...props}>
      <LoginUserFormFields state={state} />
      <nav className="flex w-full place-content-center gap-4 text-sm font-medium">
        <Link className="underline underline-offset-2" href="/register">
          Register new user
        </Link>
      </nav>
    </Form>
  );
}
