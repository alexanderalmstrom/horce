import type { ComponentProps } from "react";
import { logoutUser } from "../_actions/logoutUser";

export default function LogoutUserButton(props: ComponentProps<"form">) {
  return (
    <form action={logoutUser} {...props}>
      <button type="submit">Log out</button>
    </form>
  );
}
