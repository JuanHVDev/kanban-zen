import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { bodyFont } from '@/lib/font'
export const Navbar = () =>
{
  return (
    <nav className={cn('w-full h-14 flex items-center p-3 justify-between text-xl', bodyFont.className)}>
      <div>
        <Logo />
      </div>
      <div>
        <Button variant="link" className='text-lg'>
          <Link href="/sign-in">
            Login
          </Link>
        </Button>
        <Button variant="link" className='text-lg'>
          <Link href="/sign-up">
            Register
          </Link>
        </Button>
      </div>

    </nav>
  )
}
