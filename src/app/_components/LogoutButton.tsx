import type { ComponentProps } from "react";
import { logoutUser } from "../_actions/logoutUser";
import Button from "../_ui/Button";

export default function LogoutButton(props: ComponentProps<"form">) {
  return (
    <form action={logoutUser} {...props}>
      <Button
        type="submit"
        className="max-md:px-3 max-md:py-1.5 max-md:text-sm md:w-full"
      >
        Sign out
      </Button>
    </form>
  );
}
