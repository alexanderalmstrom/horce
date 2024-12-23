"use server";

import { deleteSession } from "~/lib/session";

export async function logoutUser() {
  await deleteSession();
}
