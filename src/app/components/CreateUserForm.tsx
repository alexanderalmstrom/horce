"use client";

import { useFormState } from "react-dom";
import createUser from "../actions/createUser";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Label from "../ui/Label";

const initialState = {
  status: 200,
  error: undefined,
};

export default function CreateUserForm() {
  const [state, formAction] = useFormState(createUser, initialState);

  console.log("state", state);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 w-full grow bg-neutral-500/10 p-8 rounded-md"
    >
      <h2 className="font-medium text-md">Create new user</h2>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="text" placeholder="Email" />
        {state.error?.email && (
          <p className="text-red-500 text-sm">{state.error.email}</p>
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
        {state.error?.password && (
          <p className="text-red-500 text-sm">{state.error.password}</p>
        )}
      </InputGroup>
      <Button type="submit">Register</Button>
    </form>
  );
}
