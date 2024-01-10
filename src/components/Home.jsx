import React from "react";
import FloatingImage from "../Effects/ImageFloat";
import Type from "../Effects/Type";
function Home() {
  return (
    <div className="home-section" id="Home">
      <div className="text-en-boucle">
        <h1 className="type-container">
          <Type />
        </h1>
      </div>
      <div className="img-apropos">
        <FloatingImage />
      </div>
    </div>
  );
}

export default Home;
