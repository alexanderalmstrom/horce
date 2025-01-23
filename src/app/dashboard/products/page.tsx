import Link from "next/link";
import { getProducts } from "~/app/_data/product";

export default async function Page() {
  const products = await getProducts();

  if (!products) {
    return <div>No products found :(</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl">Products</h1>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/dashboard/products/${product.id}`}
          className="underline"
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
}
