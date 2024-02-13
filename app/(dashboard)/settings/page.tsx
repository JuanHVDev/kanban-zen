
import { signOut } from "@/auth"
import Link from "next/link"

function SettingsPage()
{

  return (
    <div>SettingsPage
      <form action={async () =>
      {
        "use server";

        await signOut();
      }}>
        <button type="submit">
          Sign out
        </button>
      </form>

    </div>
  )
}

export default SettingsPage