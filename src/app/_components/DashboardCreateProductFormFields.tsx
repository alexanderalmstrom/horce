"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import createProduct from "../_actions/createProduct";
import InputGroup from "../_ui/InputGroup";
import Label from "../_ui/Label";
import Input from "../_ui/Input";
import Button from "../_ui/Button";

type CreateProductState = Awaited<ReturnType<typeof createProduct>>;

export default function DashboardCreateProductFormFields({
  state,
}: {
  state: CreateProductState | undefined;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          defaultValue={state?.inputs?.name}
        />
        {state?.error &&
          typeof state.error !== "string" &&
          state.error.name && (
            <p className="flex flex-col text-sm text-red-500">
              {state.error.name[0]}
            </p>
          )}
      </InputGroup>
      <InputGroup>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          defaultValue={state?.inputs?.description}
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
          "Create new product"
        )}
      </Button>
      {state && typeof state.error === "string" && (
        <p className="text-sm text-red-500">{state.error}</p>
      )}
      {state && "message" in state && (
        <p className="text-sm">{state.message}</p>
      )}
    </>
  );
}
