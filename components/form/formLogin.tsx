"use client"
import { useState, useTransition } from "react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { LoginSchema } from "@/schemas/LoginSchema"
import { login } from "@/actions/login"
import { FormError } from "./FormError"
import { FormSuccess } from "./FormSuccess"
export const FormLogin = () =>
{
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function onSubmit(values: z.infer<typeof LoginSchema>)
  {
    setError("")
    setSuccess("")
    startTransition(() =>
    {
      login(values).then((data) =>
      {
        if (data?.error)
        {
          form.reset()
          setError(data.error)
        }
        if (data?.success)
        {
          form.reset()
          setSuccess(data.success)
        }
      }).catch(() => setError("Ha ocurrido un error"))
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="john@mail.com" type="email" disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="******" disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button className="mt-5 w-full text-xl" disabled={isPending} type="submit">Login</Button>
      </form>
    </Form>
  )
}
