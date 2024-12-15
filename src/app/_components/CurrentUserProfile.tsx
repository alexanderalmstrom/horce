import { getUser } from "../_data/user";
import LogoutUserButton from "./LogoutUserButton";

export default async function CurrentUserProfile() {
  const user = await getUser();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>E-mail: {user.email}</p>
      <p>Role: {user.role}</p>
      <LogoutUserButton />
    </div>
  );
}
