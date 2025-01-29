import AccessDenied from "~/app/_components/AccessDenied";
import BackLink from "~/app/_components/BackLink";
import { getUser } from "~/app/_data/user";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pageParams = await params;
  const currentUser = await getUser();
  const pageUser = await getUser(pageParams.id);

  if (currentUser.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <div className="flex flex-col gap-6">
      <BackLink href="/dashboard/users">View all users</BackLink>
      <div>
        <h1 className="text-2xl">{pageUser.fullName}</h1>
        <p>ID: {pageUser.id}</p>
      </div>
    </div>
  );
}
