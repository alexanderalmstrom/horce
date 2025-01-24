import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import AccessDenied from "~/app/_components/AccessDenied";
import DashboardCreateNewUserForm from "~/app/_components/DashboardCreateNewUserForm";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Link href="/dashboard/users" className="inline-flex items-center gap-1">
        <ChevronLeft size={16} />
        Back
      </Link>
      <h1 className="text-2xl">New user</h1>
      <DashboardCreateNewUserForm />
    </div>
  );
}
