import Image from "next/image";
import Input from "./ui/Input";
import Label from "./ui/Label";
import InputGroup from "./ui/InputGroup";
import Button from "./ui/Button";

export default function Home() {
  return (
    <div className="grid place-content-center place-items-center w-full min-h-screen font-sans mx-auto gap-6">
      <Image
        className="dark:invert"
        src="/horce.svg"
        alt="Horce"
        width={150}
        height={32}
      />
      <p>The one and only OMS for your business.</p>
      <form className="flex flex-col gap-4 w-full grow bg-neutral-500/10 p-8 rounded-md">
        <h2 className="font-medium text-md">Create new user</h2>
        <InputGroup>
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Password" />
        </InputGroup>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}
