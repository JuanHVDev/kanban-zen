import { CardWrapper } from "@/components/CardWrapper";
import { FormRegister } from '@/components/form/formRegister';

export default function RegisterPage()
{
  return (
    <CardWrapper title="Register" labelButton="Sign in" labelHref="/sign-in" >
      <FormRegister />
    </CardWrapper>
  );
}