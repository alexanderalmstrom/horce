import "server-only";

import { cache } from "react";
import { db } from "~/lib/db";
import type { Variant } from "~/lib/db/schema";

export const getVariants = cache(async (productId: number) => {
  const variants = await db.query.variants.findMany({
    where: (variants, { eq }) => eq(variants.productId, productId),
    columns: {
      id: true,
      price: true,
      description: true,
    },
    orderBy: (variants, { asc }) => [asc(variants.id)],
  });

  return variants.map(variantDTO);
});

export const getVariant = cache(async (id: string) => {
  const variant = await db.query.variants.findFirst({
    where: (variants, { eq }) => eq(variants.id, Number(id)),
    columns: {
      id: true,
      price: true,
      description: true,
    },
  });

  if (!variant) {
    throw new Error("VARIANT_NOT_FOUND");
  }

  return variantDTO(variant);
});

function variantDTO(variant: Pick<Variant, "id" | "price" | "description">) {
  return {
    id: variant.id,
    price: variant.price,
    description: variant.description ?? undefined,
  };
}

export type VariantDTO = ReturnType<typeof variantDTO>;
