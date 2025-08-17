import React, { useEffect, useState } from "react";
import YNLogo from "../images/LogoYN.jpg";

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
        backgroundColor:
          scrollPosition < 900 ? "transparent" : "rgb(51, 51, 51)",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="logo-container">
        <img src={YNLogo} alt="Yacine Namane Logo" />
      </div>

      <div className="nav-section">
        <nav>
          <a
            href="#Home"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(77 75 75)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span>Home</span>
          </a>
          <a
            href="#Apropos"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(77 75 75)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span>About</span>
          </a>
          <a
            href="#projects"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(77 75 75)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span>Projets</span>
          </a>
          <a
            href="#Contact"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(77 75 75)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
