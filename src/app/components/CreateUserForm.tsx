"use client";

import createUser from "../actions/createUser";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Label from "../ui/Label";

export default function CreateUserForm() {
  return (
    <form
      action={createUser}
      className="flex flex-col gap-4 w-full grow bg-neutral-500/10 p-8 rounded-md"
    >
      <h2 className="font-medium text-md">Create new user</h2>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="text" placeholder="Email" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </InputGroup>
      <Button type="submit">Register</Button>
    </form>
  );
}
