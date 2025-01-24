import { ProductDTO } from "../_data/product";
import { getVariants } from "../_data/variant";

export default async function ProductVariants({ id }: Pick<ProductDTO, "id">) {
  const variants = await getVariants(id);

  if (!variants.length) {
    return <p>No variants found.</p>;
  }

  return (
    <div>
      <h3 className="font-semibold">Variants</h3>
      {variants.map((variant) => (
        <div key={variant.id}>
          <p>ID: {variant.id}</p>
          <p>Price: {variant.price}</p>
          <p>Description: {variant.description}</p>
        </div>
      ))}
    </div>
  );
}
