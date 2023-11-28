import React from "react";
import LogoDefault from "../../../assets/svg/LogoDefault";
import RowInput from "../RowInput/RowInput";
import "./FormSignUp.sass";
import UseHandleForm from "./UseHandleForm";

const FormSignUp = () => {
  const handleSubmit = () => {
    console.log("FormSignUp");
  };

  const { backStep, formData, nextStep, moveStep, handleForm, handleInputForm, step } = UseHandleForm(3, [
    null,
    null,
    handleSubmit,
  ]);

  return (
    <div className="sign_up_form">
      <div className="logo">
        <LogoDefault />
      </div>
      <div className="title">Sign up</div>
      <div className="subtitle">Come with us in this incredible journey.</div>
      <div className="slider">
        <div
          className={`slide ${step === 1 ? "slide_on" : ""}`}
          onClick={() => {
            moveStep(1);
          }}
        ></div>
        <div
          className={`slide ${step === 2 ? "slide_on" : ""}`}
          onClick={() => {
            moveStep(2);
          }}
        ></div>
        <div
          className={`slide ${step === 3 ? "slide_on" : ""}`}
          onClick={() => {
            moveStep(3);
          }}
        ></div>
      </div>
      <form action="" method="post" onSubmit={handleForm}>
        {step === 1 ? (
          <>
            <RowInput
              title="Your email"
              type="email"
              // required
              value={formData.email}
              id="email"
              name="email"
              fullWidth
              onChange={handleInputForm}
            />
            <RowInput
              title="Your password"
              type="password"
              required
              value={formData.password}
              id="password"
              name="password"
              fullWidth
              onChange={handleInputForm}
            />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 2 ? (
          <>
            <RowInput
              title="Hzllo world"
              type="text"
              value={formData.hello}
              id="hello"
              name="hello"
              fullWidth
              onChange={handleInputForm}
            />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="sign_up_link">
          <div className="text">Already have an account ?</div>
          <div className="link">Sign in.</div>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
