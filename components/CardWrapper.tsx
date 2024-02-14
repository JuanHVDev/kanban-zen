import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { Button } from './ui/button'
import { titleFont, bodyFont } from "@/lib/font"
import { cn } from "@/lib/utils"
import SocialIcons from "./form/SocialIcons"
interface CardProps
{
  title: string,
  children: React.ReactNode,
  labelButton: string,
  labelHref: string
  iconTitle?: React.ReactNode
  showSocial?: boolean
}
export const CardWrapper = ({ children, labelButton, labelHref, title, iconTitle, showSocial }: CardProps) =>
{
  return (
    <Card className={cn('rounded-xl max-w-sm w-full sm:max-w-xl flex flex-col mx-auto my-8 text-2xl border-none shadow-xl mt-20', titleFont.className)}>
      <CardHeader>
        <CardTitle className="text-4xl mx-auto flex justify-center items-center gap-3">
          {iconTitle}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn(bodyFont.className, "text-2xl")}>
        {children}
      </CardContent>
      <CardFooter className={cn(bodyFont.className, "text-lg flex flex-col")}>
        <div className='max-w-lg'>
          {
            showSocial && <SocialIcons />
          }
        </div>
        <div className="flex flex-row justify-center items-center">
          {
            labelButton === "Sign in" ? (
              <p>
                Already have an account?
              </p>
            ) : (<p>
              Don't you have an account?{" "}
            </p>)
          }
          <Button variant="link">
            <Link href={labelHref} className=""  >
              {labelButton}
            </Link>
          </Button>
        </div>

      </CardFooter>
    </Card>
  )
}
