import { getUser } from "~/app/_data/user";
import AccessDenied from "~/app/_components/AccessDenied";
import UsersList from "~/app/_components/UsersList";
import SmallButtonLink from "~/app/_ui/SmallButtonLink";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Users</h1>
        <SmallButtonLink href="/dashboard/users/new">New user</SmallButtonLink>
      </header>
      <UsersList />
    </>
  );
}
