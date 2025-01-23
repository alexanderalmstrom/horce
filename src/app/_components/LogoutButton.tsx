import type { ComponentProps } from "react";
import { logoutUser } from "../_actions/logoutUser";
import Button from "../_ui/Button";

export default function LogoutButton(props: ComponentProps<"form">) {
  return (
    <form action={logoutUser} {...props}>
      <Button
        type="submit"
        className="max-lg:px-3 max-lg:py-1.5 max-lg:text-sm lg:w-full"
      >
        Sign out
      </Button>
    </form>
  );
}
