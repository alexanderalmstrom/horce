import { getUsers } from "../_data/user";
import LinkAsButton from "../_ui/LinkAsButton";

export default async function UsersWidget({ isAdmin }: { isAdmin: boolean }) {
  const users = await getUsers();

  return (
    <div className="flex min-w-52 max-w-96 grow flex-col gap-4 rounded-lg bg-background-accent p-6">
      <div>
        <h2 className="text-sm">Users</h2>
        <p className="text-4xl">{users.length}</p>
      </div>
      <div className="flex flex-col gap-2">
        {isAdmin && (
          <LinkAsButton href="/dashboard/users" className="px-3 py-1.5 text-sm">
            View all users
          </LinkAsButton>
        )}
        {isAdmin && (
          <LinkAsButton
            href="/dashboard/users/new"
            className="bg-foreground px-3 py-1.5 text-sm text-background hover:bg-foreground/90 hover:text-background"
          >
            Create new user
          </LinkAsButton>
        )}
      </div>
    </div>
  );
}
