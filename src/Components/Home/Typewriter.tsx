import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Developer",
          "Java Developer",
          "Full Stack Developer",
          "Quick Learner",
          "Tech-savvy"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
