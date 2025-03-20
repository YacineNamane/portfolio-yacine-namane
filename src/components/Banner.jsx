import React, { useEffect, useState } from "react";

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
      <div className="logo-section">
        <h2>YN</h2>
      </div>
      <div className="nav-section">
        <nav>
          <a
            href="#Home"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(231 171 171)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Home
          </a>
          <a
            href="#Apropos"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(231 171 171)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            A propos
          </a>
          <a
            href="#projects"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(231 171 171)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            projets
          </a>
          <a
            href="#Contact"
            style={{
              color: scrollPosition > 900 ? "#fff" : "rgb(231 171 171)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Me contacter
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
