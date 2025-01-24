"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import createVariant from "../_actions/addVariant";
import InputGroup from "../_ui/InputGroup";
import Label from "../_ui/Label";
import Input from "../_ui/Input";
import Button from "../_ui/Button";
import { ProductDTO } from "../_data/product";

export default function CreateVariantForm({
  id: productId,
}: Pick<ProductDTO, "id">) {
  const [state, action] = useActionState(createVariant, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="flex w-full flex-col gap-4">
      <InputGroup>
        <Label htmlFor="price">Price</Label>
        <Input id="price" name="price" placeholder="Price" type="number" />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.price && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.price[0]}
            </p>
          )}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          placeholder="Description"
          type="text"
        />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.description && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.description[0]}
            </p>
          )}
      </InputGroup>
      <Button className="mt-2" type="submit" disabled={pending}>
        {pending ? (
          <Loader2 size={24} className="animate-spin" />
        ) : (
          "Add variant"
        )}
      </Button>
      <input type="hidden" name="productId" value={productId} />
    </form>
  );
}
