import { CardWrapper } from "@/components/CardWrapper";
import { FormLogin } from "@/components/form/formLogin";
import { IoLockOpenOutline } from "react-icons/io5";

export default function LoginPage()
{
  return (
    <CardWrapper title="Login" labelButton="Sign up" labelHref="/sign-up" iconTitle={<IoLockOpenOutline />}>
      <FormLogin />
    </CardWrapper>
  );
}