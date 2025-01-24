import Link from "next/link";
import { Frown } from "lucide-react";
import { getProducts, ProductDTO } from "../_data/product";
import Table from "../_ui/Table";

export default async function ProductsList() {
  const products = await getProducts();

  if (!products.length) {
    return (
      <h1 className="my-4 flex items-center gap-1">
        No products found <Frown size={16} />
      </h1>
    );
  }

  return (
    <Table>
      <ProductTableHeader />
      {products.map((product) => (
        <ProductLink key={product.id} {...product} />
      ))}
    </Table>
  );
}

function ProductTableHeader() {
  return (
    <div className="table-header-group">
      <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-4 font-semibold">
        ID
      </p>
      <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-4 font-semibold">
        Name
      </p>
      <p className="table-cell whitespace-nowrap border-b border-foreground/10 px-1 py-4 font-semibold">
        Description
      </p>
    </div>
  );
}

function ProductLink({ id, name, description }: ProductDTO) {
  return (
    <Link
      href={`/dashboard/products/${id}`}
      className="table-row bg-transparent transition-[background-color] duration-1000 hover:bg-background-accent hover:duration-0"
    >
      <div className="table-cell whitespace-nowrap px-1 py-4">{id}</div>
      <div className="table-cell whitespace-nowrap px-1 py-4">{name}</div>
      <div className="table-cell whitespace-nowrap px-1 py-4">
        {description}
      </div>
    </Link>
  );
}
