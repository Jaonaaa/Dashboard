export const indexVariants = {
  initial: {
    opacity: 0,
    x: "-50%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: {
        delay: 0.38,
      },
      duration: 0.4,
      ease: "circOut",
    },
  },
  exit: {
    opacity: 0,
    x: "-50%",
    transition: {
      duration: 0.2,
    },
  },
};
