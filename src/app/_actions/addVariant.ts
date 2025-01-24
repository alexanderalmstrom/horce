"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "~/lib/db";
import { variantsTable } from "~/lib/db/schema";

type VariantInsert = typeof variantsTable.$inferInsert;

type VariantFieldErrors = z.inferFlattenedErrors<
  typeof variantSchema
>["fieldErrors"];

type VariantFieldInputs = z.infer<typeof variantSchema>;

type FormState = {
  message?: string;
  error?: VariantFieldErrors | string;
  inputs?: VariantFieldInputs;
};

const variantSchema = z.object({
  productId: z.string().min(1, "VARIANT_PRODUCT_ID_REQUIRED"),
  price: z.string().min(1, "VARIANT_PRICE_REQUIRED"),
  description: z.string().optional(),
});

export default async function createVariant(
  state: FormState | undefined,
  formData: FormData,
) {
  const validation = variantSchema.safeParse({
    productId: formData.get("productId"),
    price: formData.get("price"),
    description: formData.get("description"),
  });

  if (!validation.success) {
    return {
      error: validation.error.flatten().fieldErrors,
      inputs: {
        productId: formData.get("productId") as string,
        price: formData.get("price") as string,
        description: formData.get("description") as string,
      },
    };
  }

  const newVariant = {
    productId: Number(validation.data.productId),
    price: Number(validation.data.price),
    description: validation.data.description,
  } satisfies VariantInsert;

  const createdVariant = await db
    .insert(variantsTable)
    .values(newVariant)
    .returning()
    .catch((error) => {
      console.error("Error creating variant", error);

      if (error.code === "23505") {
        return {
          error: "VARIANT_ALREADY_EXISTS",
          inputs: validation.data,
        };
      }

      return {
        error: "VARIANT_CREATE_ERROR",
        inputs: validation.data,
      };
    });

  if (createdVariant && "error" in createdVariant) {
    return createdVariant;
  }

  revalidatePath("/dashboard/products/[id]");

  return {
    message: "VARIANT_CREATED",
  };
}
