import React from "react";
import { UserLayout } from "@/layouts/userLayout";
import { SignInForm } from "./SignInForm";

export const SignInPage: React.FC = () => {
  return (
    <UserLayout>
      <SignInForm />
    </UserLayout>
  );
};
