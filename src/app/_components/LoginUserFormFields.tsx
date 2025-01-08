import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import Button from "../_ui/Button";
import Input from "../_ui/Input";
import InputGroup from "../_ui/InputGroup";
import Label from "../_ui/Label";
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
