import NewProductButtonLink from "~/app/_components/NewProductButtonLink";
import ProductsList from "~/app/_components/ProductsList";

export default async function Page() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Products</h1>
        <NewProductButtonLink />
      </header>
      <ProductsList />
    </div>
  );
}
