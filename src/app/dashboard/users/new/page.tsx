import AccessDenied from "~/app/_components/AccessDenied";
import BackLink from "~/app/_components/BackLink";
import DashboardCreateNewUserForm from "~/app/_components/DashboardCreateNewUserForm";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <div className="flex flex-col gap-4">
      <BackLink href="/dashboard/users">View all users</BackLink>
      <h1 className="text-2xl">New user</h1>
      <DashboardCreateNewUserForm />
    </div>
  );
}
