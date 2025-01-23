import ProductsList from "~/app/_components/ProductsList";

export default async function Page() {
  return (
    <div>
      <h1 className="text-2xl">Products</h1>
      <ProductsList />
    </div>
  );
}
