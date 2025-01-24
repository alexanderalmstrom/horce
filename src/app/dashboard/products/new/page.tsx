import BackLink from "~/app/_components/BackLink";
import DashboardCreateProductForm from "~/app/_components/DashboardCreateProductForm";

export default function Page() {
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
