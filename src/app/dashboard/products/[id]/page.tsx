import { Suspense } from "react";
import BackLink from "~/app/_components/BackLink";
import ProductVariants from "~/app/_components/ProductVariants";
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
      <BackLink href="/dashboard/products">View all products</BackLink>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">{product.name}</h1>
        <p>{product.description}</p>
      </div>
      <Suspense fallback={<p>Loading product variants...</p>}>
        <ProductVariants id={product.id} />
      </Suspense>
    </div>
  );
}
