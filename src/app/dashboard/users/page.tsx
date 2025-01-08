import AccessDenied from "~/app/_components/AccessDenied";
import { getUser } from "~/app/_data/user";
import LinkAsButton from "~/app/_ui/LinkAsButton";

export default async function Page() {
  const user = await getUser();

  if (user.role !== "admin") {
    return <AccessDenied />;
  }

  return (
    <>
      <LinkAsButton
        className="bg-foreground text-background hover:bg-foreground/90 hover:text-background"
        href="/dashboard/users/new"
      >
        New user
      </LinkAsButton>
    </>
  );
}
