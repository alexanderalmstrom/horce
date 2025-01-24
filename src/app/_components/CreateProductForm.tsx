"use client";

import { useActionState } from "react";
import createProduct from "../_actions/createProduct";

export default function CreateProductForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, action] = useActionState(createProduct, undefined);

  return (
    <form action={action}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="description" placeholder="Description" />
      <button type="submit">Create product</button>
    </form>
  );
}
