import AccessDenied from "~/app/_components/AccessDenied";
import NewUserButtonLink from "~/app/_components/NewUserButtonLink";
import UsersList from "~/app/_components/UsersList";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Users</h1>
        <NewUserButtonLink />
      </header>
      <UsersList />
    </>
  );
}
