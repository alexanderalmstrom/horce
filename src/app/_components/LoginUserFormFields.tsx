import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputGroup from "../ui/InputGroup";
import Label from "../ui/Label";
import loginUser from "../_actions/loginUser";

type CreateUserState = Awaited<ReturnType<typeof loginUser>>;

export default function LoginUserFormFields({
  state,
}: {
  state: CreateUserState | undefined;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <h2 className="text-center text-lg font-medium">
        Log in with existing user
      </h2>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" placeholder="E-mail" />
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
        {pending ? <Loader2 size={24} className="animate-spin" /> : "Log in"}
      </Button>
      {state && typeof state.error === "string" && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}
      {state && "message" in state && (
        <p className="text-sm">{state.message}</p>
      )}
    </>
  );
}
