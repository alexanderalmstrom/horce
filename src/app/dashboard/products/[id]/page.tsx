import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getProduct } from "~/app/_data/product";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/dashboard/products"
        className="inline-flex items-center gap-1 underline"
      >
        <ChevronLeft size={16} />
        Back
      </Link>
      <div>
        <h1 className="text-2xl">{product.name}</h1>
        ID: {product.id}
      </div>
    </div>
  );
}
