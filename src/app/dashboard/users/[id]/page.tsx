import { getUser } from "~/app/_data/user";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pageParams = await params;
  const user = await getUser(pageParams.id);

  return (
    <div>
      <h1 className="text-2xl">{user.fullName}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}
