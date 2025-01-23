import { Frown } from "lucide-react";
import Link from "next/link";
import { getProducts } from "~/app/_data/product";

export default async function Page() {
  const products = await getProducts();

  if (!products.length) {
    return (
      <h1 className="flex items-center gap-1">
        No products found <Frown size={16} />
      </h1>
    );
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
