"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "~/lib/db";
import { productsTable } from "~/lib/db/schema";

const productSchema = z.object({
  name: z.string().min(1, "PRODUCT_NAME_REQUIRED"),
  description: z.string().min(1, "PRODUCT_DESCRIPTION_REQUIRED"),
});

type ProductInsert = typeof productsTable.$inferInsert;

type ProductFieldErrors = z.inferFlattenedErrors<
  typeof productSchema
>["fieldErrors"];

type ProductFieldInputs = z.infer<typeof productSchema>;

type FormState = {
  message?: string;
  error?: ProductFieldErrors | string;
  inputs?: ProductFieldInputs;
};

export default async function createProduct(
  state: FormState | undefined,
  formData: FormData,
) {
  const validation = productSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!validation.success) {
    return {
      error: validation.error.flatten().fieldErrors,
      inputs: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
      },
    };
  }

  const newProduct = {
    name: validation.data.name,
    description: validation.data.description,
  } satisfies ProductInsert;

  const createdProduct = await db
    .insert(productsTable)
    .values(newProduct)
    .returning()
    .catch((error) => {
      console.error("Error creating product:", error);

      if (error.code === "23505") {
        return {
          error: "PRODUCT_ALREADY_EXISTS",
          inputs: validation.data,
        };
      }

      return { error: "PRODUCT_CREATE_ERROR", inputs: validation.data };
    });

  if (createdProduct && "error" in createdProduct) {
    return createdProduct;
  }

  revalidatePath("/dashboard/products");

  return {
    message: "PRODUCT_CREATED",
  };
}
