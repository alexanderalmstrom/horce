import AccessDenied from "~/app/_components/AccessDenied";
import { getUser } from "~/app/_data/user";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return null;
}
