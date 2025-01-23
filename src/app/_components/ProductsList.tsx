import Link from "next/link";
import { Frown } from "lucide-react";
import { getProducts } from "../_data/product";

export default async function ProductsList() {
  const products = await getProducts();

  if (!products.length) {
    return (
      <h1 className="flex items-center gap-1">
        No products found <Frown size={16} />
      </h1>
    );
  }

  return (
    <div className="mb-4 overflow-x-auto">
      <div className="table w-full py-4 text-sm">
        <div className="table-header-group">
          <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-2 font-semibold">
            ID
          </p>
          <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-2 font-semibold">
            Name
          </p>
          <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-2 font-semibold">
            Description
          </p>
        </div>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/dashboard/products/${product.id}`}
            className="table-row bg-transparent transition-[background-color] duration-1000 hover:bg-background-accent hover:duration-100"
          >
            <div className="table-cell whitespace-nowrap px-1 py-2">
              {product.id}
            </div>
            <div className="table-cell whitespace-nowrap px-1 py-2">
              {product.name}
            </div>
            <div className="table-cell whitespace-nowrap px-1 py-2">
              {product.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
