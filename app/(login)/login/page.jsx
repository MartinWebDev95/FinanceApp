import LoginForm from "@/app/components/login/LoginForm";
import { Suspense } from "react";

export const metadata = {
  title: 'Finance App | Login',
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}