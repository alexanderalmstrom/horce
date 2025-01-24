import { ChevronLeft } from "lucide-react";
import Link from "next/link";
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
      <Link
        href="/dashboard/users"
        className="inline-flex items-center gap-1 underline"
      >
        <ChevronLeft size={16} />
        Back
      </Link>
      <h1 className="text-2xl">{user.fullName}</h1>
      <p>ID: {user.id}</p>
    </div>
  );
}
