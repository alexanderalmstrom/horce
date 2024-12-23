import type { ComponentProps } from "react";
import { logoutUser } from "../_actions/logoutUser";
import { cn } from "~/lib/utils/cn";

export default function LogoutUserButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <form action={logoutUser}>
      <button
        className={cn("underline underline-offset-2", className)}
        type="submit"
        {...props}
      >
        Log out
      </button>
    </form>
  );
}
