import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Label from "../ui/Label";
import createUser from "../actions/createUser";

type CreateUserState = Awaited<ReturnType<typeof createUser>>;

export default function CreateUserFormFields({
  state,
}: {
  state: CreateUserState;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <h2 className="text-lg font-medium">Create new user</h2>
      <InputGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="text" placeholder="Email" />
        {typeof state.error !== "string" && state.error?.email && (
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
        />
        {typeof state.error !== "string" && state.error?.password && (
          <p className="flex flex-col text-sm text-red-500">
            {state.error.password[0]}
          </p>
        )}
      </InputGroup>
      <Button type="submit" disabled={pending}>
        {pending ? <Loader2 size={24} className="animate-spin" /> : "Register"}
      </Button>
      {state.error && typeof state.error === "string" && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}
      {state && "message" in state && (
        <p className="text-sm">{state.message}</p>
      )}
    </>
  );
}
