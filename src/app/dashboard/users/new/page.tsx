import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import AccessDenied from "~/app/_components/AccessDenied";
import DashboardCreateNewUserForm from "~/app/_components/DashboardCreateNewUserForm";
import { getUser } from "~/app/_data/user";
import LinkAsButton from "~/app/_ui/LinkAsButton";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/dashboard/users"
        className="inline-flex items-center gap-1 underline"
      >
        <ChevronLeft size={16} />
        Back
      </Link>
      <h2 className="text-2xl">Create new user</h2>
      <DashboardCreateNewUserForm />
      <LinkAsButton href="/dashboard/users">Cancel</LinkAsButton>
    </div>
  );
}
