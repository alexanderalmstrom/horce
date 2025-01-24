import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getProduct } from "~/app/_data/product";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pageParams = await params;
  const product = await getProduct(pageParams.id);

  return (
    <div className="flex flex-col gap-6">
      <Link
        href="/dashboard/products"
        className="inline-flex items-center gap-1"
      >
        <ChevronLeft size={16} />
        Back
      </Link>
      <div>
        <h1 className="text-2xl">{product.name}</h1>
        <p>ID: {product.id}</p>
      </div>
    </div>
  );
}
