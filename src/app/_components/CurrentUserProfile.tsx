import { getUser } from "../_data/user";
import LogoutUserButton from "./LogoutUserButton";

export default async function CurrentUserProfile() {
  const user = await getUser();

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>E-mail: {user.email}</p>
      <LogoutUserButton />
    </div>
  );
}
