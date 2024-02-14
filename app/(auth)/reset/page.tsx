import { CardWrapper } from "@/components/CardWrapper";
import { ResetForm } from "@/components/reset-form";
import { IoLockOpenOutline } from "react-icons/io5";

export default function ResetPage()
{
  return (
    <CardWrapper title="¿Olvidaste tu contraseña?" labelButton="Back to Login" labelHref="/sign-up" iconTitle={<IoLockOpenOutline />} showSocial={false}>
      <ResetForm />
    </CardWrapper>
  )
}