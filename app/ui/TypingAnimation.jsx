"use client";
import { ReactTyped } from "react-typed";

const TypingAnimation = () => {
  return (
    <ReactTyped
      strings={[
        "I' M WEB DEVELOPER",
        "I' M DREAMER :)",
        "Let's Build Something Amazing",
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop
    ></ReactTyped>
  );
};

export default TypingAnimation;
