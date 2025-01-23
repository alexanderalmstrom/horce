import { getUsers } from "../_data/user";

export default async function UsersWidget() {
  const users = await getUsers();

  return (
    <div className="max-w-72 grow rounded-lg bg-background-accent p-4">
      <h2 className="text-sm">Users</h2>
      <p className="text-4xl">{users.length}</p>
    </div>
  );
}
