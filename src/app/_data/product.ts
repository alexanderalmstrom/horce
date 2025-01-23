import "server-only";

import { cache } from "react";
import { db } from "~/lib/db";
import { Product } from "~/lib/db/schema";

export const getProducts = cache(async () => {
  const products = await db.query.products.findMany({
    columns: {
      id: true,
      name: true,
      description: true,
    },
    orderBy: (products, { asc }) => [asc(products.id)],
  });

  return products.map(productDTO);
});

export const getProduct = cache(async (id: string) => {
  const product = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.id, Number(id)),
    columns: {
      id: true,
      name: true,
      description: true,
    },
  });

  if (!product) {
    throw new Error("PRODUCT_NOT_FOUND");
  }

  return productDTO(product);
});

function productDTO(product: Pick<Product, "id" | "name" | "description">) {
  return {
    id: product.id,
    name: product.name,
    description: product.description ?? undefined,
  };
}

export type ProductDTO = ReturnType<typeof productDTO>;
