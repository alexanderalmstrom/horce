import { getUser } from "~/app/_data/user";
import AccessDenied from "~/app/_components/AccessDenied";
import ProductsList from "~/app/_components/ProductsList";
import SmallButtonLink from "~/app/_ui/SmallButtonLink";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Products</h1>
        <SmallButtonLink href="/dashboard/products/new">
          New product
        </SmallButtonLink>
      </header>
      <ProductsList />
    </>
  );
}
