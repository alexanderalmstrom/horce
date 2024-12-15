"use client";

import { useState } from "react";
import CreateUserForm from "./CreateUserForm";
import LoginUserForm from "./LoginUserForm";
import Button from "../ui/Button";
import { cn } from "~/lib/utils/cn";

type TabState = "login" | "register";

export default function LoginOrRegisterForm() {
  const [currentTab, setCurrentTab] = useState<TabState>("login");

  return (
    <>
      <div className="flex gap-4">
        <Button
          className={cn(
            "border border-foreground/50 bg-transparent px-8 py-4 text-foreground/50 hover:border-foreground hover:text-foreground",
            currentTab === "login" && "border-foreground text-foreground",
          )}
          onClick={() => setCurrentTab("login")}
        >
          Login
        </Button>
        <Button
          className={cn(
            "border border-foreground/50 bg-transparent px-8 py-4 text-foreground/50 hover:border-foreground hover:text-foreground",
            currentTab === "register" && "border-foreground text-foreground",
          )}
          onClick={() => setCurrentTab("register")}
        >
          Register
        </Button>
      </div>
      <div className="flex w-full max-w-xl flex-col items-start gap-6 lg:flex-row">
        {currentTab === "login" && <LoginUserForm />}
        {currentTab === "register" && <CreateUserForm />}
      </div>
    </>
  );
}
