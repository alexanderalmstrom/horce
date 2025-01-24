import { ComponentProps } from "react";
import { ProductDTO } from "../_data/product";
import { getVariants } from "../_data/variant";
import AddVariantForm from "./AddVariantForm";

export default async function ProductVariants({ id }: Pick<ProductDTO, "id">) {
  return (
    <>
      <VariantsList id={id} />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">Add variant</h3>
        <AddVariantForm id={id} />
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
    <>
      <h3 className="text-2xl">Variants</h3>
      <div className="flex flex-col gap-3">
        {variants.map((variant) => (
          <div
            key={variant.id}
            className="flex grow flex-col gap-2 rounded-lg bg-background-accent p-4"
          >
            <p>Price: {variant.price}</p>
            <p>Description: {variant.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
