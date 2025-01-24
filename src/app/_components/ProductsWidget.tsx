import { getProducts } from "../_data/product";
import LinkAsButton from "../_ui/LinkAsButton";

export default async function ProductsWidget() {
  const products = await getProducts();

  return (
    <div className="flex min-w-52 max-w-96 grow flex-col gap-4 rounded-lg bg-background-accent p-6">
      <div>
        <h2 className="text-sm">Products</h2>
        <p className="text-4xl">{products.length}</p>
      </div>
      <div className="flex flex-col gap-2">
        <LinkAsButton
          href="/dashboard/products"
          className="px-3 py-1.5 text-sm"
        >
          View all products
        </LinkAsButton>
        <LinkAsButton
          href="/dashboard/products/new"
          className="bg-foreground px-3 py-1.5 text-sm text-background hover:bg-foreground/90 hover:text-background"
        >
          Create new product
        </LinkAsButton>
      </div>
    </div>
  );
}
