import React from "react";
import { useEffect, useState } from "react";

function Banner() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundColor: getBackgroundColor(),
      }}
    >
      <div className="logo-section">
        <h2>YN</h2>
      </div>
      <div className="nav-section">
        <nav>
          <a href="#Home" style={{ color: getFontColor() }}>
            Home
          </a>
          <a href="#Apropos" style={{ color: getFontColor() }}>
            A propos
          </a>
          <a href="#projects" style={{ color: getFontColor() }}>
            projets
          </a>
          <a href="#Contact" style={{ color: getFontColor() }}>
            Me contacter
          </a>
        </nav>
      </div>
    </div>
  );

  function getBackgroundColor() {
    return scrollPosition > 900 ? "rgb(51, 51, 51)" : "#fff";
  }

  function getFontColor() {
    return scrollPosition > 900 ? "#fff" : "rgb(51, 51, 51)";
  }
}

export default Banner;
