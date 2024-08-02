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
    <div className="banner" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="logo-section">
        {" "}
        <h2>YN</h2>{" "}
      </div>
      <div className="nav-section">
        <nav>
          <a href="#Home">Home</a>
          <a href="#Apropos">A propos</a>
          <a href="#projects">projets</a>
          <a href="#Contact"> Me contacter</a>
        </nav>
      </div>
    </div>
  );
  function getBackgroundColor() {
    if (scrollPosition > 400) {
      return "#333 "; // Exemple de couleur de fond pour une certaine position
    } else {
      return "transparent"; // Couleur de fond par défaut
    }
  }
}

export default Banner;
