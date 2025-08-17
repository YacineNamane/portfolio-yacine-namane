import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-section-title">
        {" "}
        <span> Hello,</span> <br />{" "}
        <h1>
          {" "}
          Je Suis Yacine <br />
          Developpeur Web
        </h1>
      </div>
      <Typewriter
        options={{
          autoStart: true,
          delay: 150,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<br/><span class="typewriter-text">Front End Developer -</span>'
            )
            .pauseFor(900)
            .typeString('<br/><span class="typewriter-text">React JS</span>')
            .pauseFor(900)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText;
