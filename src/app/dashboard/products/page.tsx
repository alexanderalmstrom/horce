import { getUser } from "~/app/_data/user";
import ProductsList from "~/app/_components/ProductsList";
import SmallButtonLink from "~/app/_ui/SmallButtonLink";

export default async function Page() {
  const user = await getUser();
  const isAdmin = user.role === "admin";

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Products</h1>
        {isAdmin && (
          <SmallButtonLink href="/dashboard/products/new">
            New product
          </SmallButtonLink>
        )}
      </header>
      <ProductsList />
    </>
  );
}
