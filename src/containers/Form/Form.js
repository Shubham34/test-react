import React, { useContext } from "react";
import SignInForm from "./SignIn";
import SignOutForm from "./contactForm";
import ForgotPassForm from "./ForgotPass";
import OTPverify from "./OTPverify";
import ResetPassForm from "./ResetPass";
import VerifyLink from "./VerifyLink";
import { AuthContext } from "../../contexts/auth/auth.context";
import NotYetVerified from "./NotVerifiedYet";

export default function AuthenticationForm() {
  const { authState } = useContext(AuthContext);
  let RenderForm;

  if (authState.currentForm === "signIn") {
    RenderForm = SignInForm;
  }

  if (authState.currentForm === "signUp") {
    RenderForm = SignOutForm;
  }

  if (authState.currentForm === "forgotPass") {
    RenderForm = ForgotPassForm;
  }
  if (authState.currentForm === "OTPverify") {
    RenderForm = OTPverify;
  }
  if (authState.currentForm === "RESETPASS") {
    RenderForm = ResetPassForm;
  }
  if (authState.currentForm === "VerifyLink") {
    RenderForm = VerifyLink;
  }
  if (authState.currentForm === "NotYetVerified") {
    RenderForm = NotYetVerified;
  }
  return <RenderForm />;
}
