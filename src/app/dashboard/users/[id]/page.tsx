import BackLink from "~/app/_components/BackLink";
import { getUser } from "~/app/_data/user";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pageParams = await params;
  const user = await getUser(pageParams.id);

  return (
    <div className="flex flex-col gap-6">
      <BackLink href="/dashboard/users">View all users</BackLink>
      <div>
        <h1 className="text-2xl">{user.fullName}</h1>
        <p>ID: {user.id}</p>
      </div>
    </div>
  );
}
