"use client"
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function SocialIcons()
{
  const onClick = (provider: "google" | "github") =>
  {
    signIn(provider, {
      redirectTo: DEFAULT_LOGIN_REDIRECT
    });
  }
  return (
    <div className="w-full p-2">
      <Button onClick={() => onClick("google")} className="flex justify-center items-center gap-3 w-full text-xl" variant="outline" size="lg">
        <FaGoogle /> <span>Google</span>
      </Button>
    </div>
  )
}