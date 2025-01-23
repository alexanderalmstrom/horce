import { getUser } from "../_data/user";

export default async function CurrentUserProfile() {
  const user = await getUser();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <h1 className="text-2xl">Welcome {user.fullName ?? "#" + user.id}!</h1>
  );
}
