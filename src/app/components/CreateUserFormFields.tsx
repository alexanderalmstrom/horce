import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Label from "../ui/Label";
import createUser from "../actions/createUser";
import { useFormStatus } from "react-dom";

type CreateUserState = Awaited<ReturnType<typeof createUser>>;

export default function CreateUserFormFields({
  state,
}: {
  state: CreateUserState;
}) {
  const { pending } = useFormStatus();

  return (
    <>
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
      <Button type="submit" disabled={pending}>
        {pending ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          "Register"
        )}
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
