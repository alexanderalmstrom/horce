"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import Button from "../_ui/Button";
import Input from "../_ui/Input";
import InputGroup from "../_ui/InputGroup";
import Label from "../_ui/Label";
import createUser from "../_actions/createUser";

type CreateUserState = Awaited<ReturnType<typeof createUser>>;

export default function CreateUserFormFields({
  state,
}: {
  state: CreateUserState | undefined;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <InputGroup>
        <Label htmlFor="fullName">Your full name</Label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Full name"
          defaultValue={state?.inputs?.fullName}
        />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.fullName && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.fullName[0]}
            </p>
          )}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          defaultValue={state?.inputs?.email}
        />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.email && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.email[0]}
            </p>
          )}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          defaultValue={state?.inputs?.password}
        />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.password && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.password[0]}
            </p>
          )}
      </InputGroup>
      <Button className="mt-2" type="submit" disabled={pending}>
        {pending ? <Loader2 size={24} className="animate-spin" /> : "Register"}
      </Button>
      {state?.error && typeof state.error === "string" && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}
      {state && "message" in state && (
        <p className="text-sm">{state.message}</p>
      )}
    </>
  );
}
