import BackLink from "~/app/_components/BackLink";
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
      <div>
        <h1 className="text-2xl">{product.name}</h1>
        <p>ID: {product.id}</p>
      </div>
    </div>
  );
}
