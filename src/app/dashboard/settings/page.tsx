import { getUser } from "~/app/_data/user";
import Button from "~/app/_ui/Button";
import Input from "~/app/_ui/Input";
import InputGroup from "~/app/_ui/InputGroup";
import Label from "~/app/_ui/Label";

export default async function Page() {
  const user = await getUser();

  return (
    <form className="flex flex-col gap-4">
      <h2 className="text-2xl">Settings</h2>
      <InputGroup>
        <Label>E-mail:</Label>
        <Input type="email" defaultValue={user.email} />
      </InputGroup>
      <InputGroup>
        <Label>New password:</Label>
        <Input type="password" />
      </InputGroup>
      <Button type="submit">Update settings</Button>
    </form>
  );
}
