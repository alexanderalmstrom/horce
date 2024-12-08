"use client";

import { useFormState } from "react-dom";
import createUser from "../actions/createUser";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Label from "../ui/Label";
import { ComponentProps } from "react";
import { cn } from "~/lib/utils/cn";

const initialState = {
  status: 200,
  error: undefined,
  message: "",
};

export default function CreateUserForm({
  className,
  ...props
}: ComponentProps<"form">) {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <form
      action={formAction}
      className={cn(
        "flex w-full flex-col gap-4 rounded-md bg-neutral-500/5 p-8",
        className,
      )}
      {...props}
    >
      <h2 className="text-md font-medium">Create new user</h2>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="text" placeholder="Email" />
        {typeof state.error !== "string" && state.error?.email && (
          <p className="text-sm text-red-500">{state.error.email}</p>
        )}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        {typeof state.error !== "string" && state.error?.password && (
          <p className="text-sm text-red-500">{state.error.password}</p>
        )}
      </InputGroup>
      <Button type="submit">Register</Button>
      {state.error && typeof state.error === "string" && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}
      {state && "message" in state && (
        <p className="text-sm">{state.message}</p>
      )}
    </form>
  );
}
