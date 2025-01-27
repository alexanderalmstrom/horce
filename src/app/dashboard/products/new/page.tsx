import AccessDenied from "~/app/_components/AccessDenied";
import BackLink from "~/app/_components/BackLink";
import DashboardCreateProductForm from "~/app/_components/DashboardCreateProductForm";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <BackLink href="/dashboard/products">View all products</BackLink>
        <h1 className="text-2xl">New product</h1>
        <DashboardCreateProductForm />
      </div>
    </>
  );
}
