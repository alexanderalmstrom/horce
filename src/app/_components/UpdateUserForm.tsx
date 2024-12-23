"use client";

import { useActionState } from "react";
import type { UserDTO } from "../_data/user";
import updateUser from "~/app/_actions/updateUser";
import Button from "~/app/_ui/Button";
import Input from "~/app/_ui/Input";
import InputGroup from "~/app/_ui/InputGroup";
import Label from "~/app/_ui/Label";

export default function UpdateUserForm({ user }: { user: UserDTO }) {
  const [state, action] = useActionState(updateUser, undefined);

  return (
    <form action={action} className="flex flex-col gap-4">
      <h2 className="text-2xl">Settings</h2>
      <InputGroup>
        <Label htmlFor="fullName">Full name:</Label>
        <Input
          id="fullName"
          type="text"
          name="fullName"
          defaultValue={user.fullName}
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
        <Label htmlFor="email">E-mail:</Label>
        <Input id="email" type="email" name="email" defaultValue={user.email} />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.email && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.email[0]}
            </p>
          )}
      </InputGroup>
      <Button type="submit">Update settings</Button>
      {state?.error && typeof state.error === "string" && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}
      {state && "message" in state && (
        <p className="text-sm">{state.message}</p>
      )}
    </form>
  );
}
