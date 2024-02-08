import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export default function SocialIcons()
{
  return (
    <div className="w-full p-2">
      <Button className="flex justify-center items-center gap-3 w-full text-xl" variant="outline" size="lg">
        <FaGoogle /> <span>Google</span>
      </Button>
    </div>
  )
}