import CurrentUserProfile from "../_components/CurrentUserProfile";
import ProductsWidget from "../_components/ProductsWidget";
import UsersWidget from "../_components/UsersWidget";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <CurrentUserProfile />
        <div className="flex flex-wrap gap-3">
          <ProductsWidget />
          <UsersWidget />
        </div>
      </div>
    </>
  );
}
