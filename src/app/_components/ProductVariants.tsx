import { ComponentProps } from "react";
import { ProductDTO } from "../_data/product";
import { getVariants } from "../_data/variant";
import CreateVariantForm from "./CreateVariantForm";

export default async function ProductVariants({ id }: Pick<ProductDTO, "id">) {
  return (
    <>
      <VariantsList id={id} />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Add variant</h3>
        <CreateVariantForm id={id} />
      </div>
    </>
  );
}

async function VariantsList({ id }: ComponentProps<typeof ProductVariants>) {
  const variants = await getVariants(id);

  if (!variants.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl">Variants</h3>
      <div className="divide-y divide-foreground/10 rounded-md border border-foreground/10">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className="flex grow flex-col gap-1 bg-background-accent p-4 first:rounded-t-md last:rounded-b-md"
          >
            <p>Price: {variant.price}</p>
            <p>Description: {variant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
