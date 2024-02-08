import Link from "next/link";
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { MedalIcon } from "lucide-react";
import { Montserrat, Crimson_Pro } from "next/font/google";
const bodyFont = Montserrat({
  subsets: ["latin"],
})

const titleFont = Crimson_Pro({
  subsets: ["latin"]
})

export default function MarketingPage()
{
  return (
    <section className="max-w-sm mx-auto my-10 md:max-w-4xl flex flex-col justify-center items-center">
      <Badge className={cn("max-w-xl text-lg w-72 sm:w-full h-16 text-center sm:text-2xl border-indigo-500 border-4 flex justify-center items-center p-3", bodyFont.className)} variant="outline"  >
        <MedalIcon className="h-16 w-5 text-orange-300 font-bold" />
        <span className="capitalize">mejorando a tu equipo</span>
      </Badge>
      <div>
        <h1 className={cn("text-7xl my-4 italic text-indigo-500 font-semibold capitalize", titleFont.className)}>Kanban Zen</h1>
      </div>
      <div className={cn("text-2xl flex flex-col justify-center items-center p-4 text-center text-pretty", bodyFont.className)}>
        <p>Trabajo en equipo, colaborativo, ideal para aumentar tu productividad al máximo.</p>
        <div className="flex flex-col gap-3 sm:flex-row gap-x-6 mt-6">
          <Image src="/Collaborate.svg" alt="Collaborate team" width={300} height={100} className="object-cover" />
          <Image src="/Planning.svg" alt="Planning" width={300} height={100} className="object-cover" />
        </div>
      </div>
      <Button className={cn("my-10 bg-indigo-600 w-72 sm:max-w-sm sm:w-full text-2xl p-2 hover:bg-indigo-500", bodyFont.className)}>
        <Link href="/sign-up">
          Comienza
        </Link>
      </Button>
    </section>
  );
}

