import { logoutUser } from "../_actions/logoutUser";

export default function LogoutUserButton() {
  return (
    <form action={logoutUser}>
      <button className="underline underline-offset-2" type="submit">
        Log out
      </button>
    </form>
  );
}
