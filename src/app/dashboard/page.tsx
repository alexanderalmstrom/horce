import CurrentUserProfile from "../_components/CurrentUserProfile";
import ProductsWidget from "../_components/ProductsWidget";
import UsersWidget from "../_components/UsersWidget";
import { getUser } from "../_data/user";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const pageParams = await params;
  const user = await getUser(pageParams.id);
  const isAdmin = user.role === "admin";

  return (
    <>
      <div className="flex flex-col gap-6">
        <CurrentUserProfile />
        <div className="flex flex-wrap gap-3">
          <ProductsWidget isAdmin={isAdmin} />
          <UsersWidget isAdmin={isAdmin} />
        </div>
      </div>
    </>
  );
}
