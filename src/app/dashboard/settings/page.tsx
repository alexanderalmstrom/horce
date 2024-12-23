import UpdateUserForm from "~/app/_components/UpdateUserForm";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  return <UpdateUserForm user={user} />;
}
