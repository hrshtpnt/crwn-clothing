import React from "react";
import SignIn from "../../components/signIn/sign-in.component";
import SignUp from "../../components/signUp/sign-up.component";
import "./sign-in-and-signup.styles.scss";

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
