import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faScreenpal } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook as farAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
          <a href="#Home">
            <FontAwesomeIcon icon={faHome} style={{ color: "#fafafa" }} />
            Home
          </a>
          <a href="#Apropos">
            <FontAwesomeIcon icon={faUser} style={{ color: "#fafafa" }} /> A
            propos
          </a>
          <a href="#projects">
            <FontAwesomeIcon icon={faScreenpal} style={{ color: "#fafafa" }} />{" "}
            projet
          </a>
          <a href="#Contact">
            {" "}
            <FontAwesomeIcon
              icon={farAddressBook}
              style={{ color: "#fafafa" }}
            />
            Me contacter
          </a>
        </nav>
      </div>
    </div>
  );
  function getBackgroundColor() {
    if (scrollPosition > 400) {
      return "#333"; // Exemple de couleur de fond pour une certaine position
    } else {
      return "transparent"; // Couleur de fond par défaut
    }
  }
}

export default Banner;
