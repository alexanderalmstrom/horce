import { getProducts } from "../_data/product";

export default async function ProductsWidget() {
  const products = await getProducts();

  return (
    <div className="max-w-72 grow rounded-lg bg-background-accent p-4">
      <h2 className="text-sm">Products</h2>
      <p className="text-4xl">{products.length}</p>
    </div>
  );
}
