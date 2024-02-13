"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form/FormError";
import { FormSuccess } from "@/components/form/FormSuccess";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export const NewVerificationForm = () =>
{
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() =>
  {
    if (success || error) return;

    if (!token)
    {
      setError("Missing token!");
      return;
    }

    newVerification(token)
      .then((data) =>
      {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() =>
      {
        setError("Something went wrong!");
      })
  }, [token, success, error]);

  useEffect(() =>
  {
    onSubmit();
  }, [onSubmit]);

  return (
    <Card className="max-w-lg mx-auto my-20 text-center">
      <CardHeader>
        <CardTitle>
          Confirmando tu verificación
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center w-full justify-center">
          {!success && !error && (
            <BeatLoader />
          )}
          <FormSuccess message={success} />
          {!success && (
            <FormError message={error} />
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full text-xl p-0.5 max-w-sm mx-auto" size="lg" variant="secondary" >
          <Link href="/sign-in">
            Back to Login
          </Link>
        </Button>
      </CardFooter>
    </Card >
  )
}