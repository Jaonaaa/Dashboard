import React from "react";
import FormSignIn from "./FormSignIn/FormSignIn";
import FormSignUp from "./FormSignUp/FormSignUp";
import { motion } from "framer-motion";
import "./Login.sass";

const loginVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: {
        delay: 0.18,
      },
      duration: 0.18,
      delayChildren: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
  },
};

const Login = () => {
  return (
    <motion.div id="login_container" variants={loginVariants} initial="initial" animate="animate" exit="exit">
      {/* <FormSignIn /> */}
      <FormSignUp />
    </motion.div>
  );
};

export default Login;
