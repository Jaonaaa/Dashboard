import React from "react";
import FormSignIn from "./FormSignIn/FormSignIn";
import "./Login.sass";
import FormSignUp from "./FormSignUp/FormSignUp";

const Login = () => {
  return (
    <div id="login_container">
      {/* <FormSignIn /> */}
      <FormSignUp />
    </div>
  );
};

export default Login;
