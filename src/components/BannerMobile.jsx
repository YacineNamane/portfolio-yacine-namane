import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faScreenpal } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook as farAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const MobileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const content = (
    <nav>
      <a href="#Home">
        <FontAwesomeIcon icon={faHome} style={{ color: "#fafafa" }} />
        Home
      </a>
      <a href="#Apropos">
        <FontAwesomeIcon icon={faUser} style={{ color: "#fafafa" }} /> A propos
      </a>
      <a href="#projects">
        <FontAwesomeIcon icon={faScreenpal} style={{ color: "#fafafa" }} />{" "}
        projet
      </a>
      <a href="#Contact">
        <FontAwesomeIcon icon={farAddressBook} style={{ color: "#fafafa" }} />
        Me contacter
      </a>
    </nav>
  );

  return (
    <div className={`banner-mobile ${isDropdownOpen ? "expanded" : ""}`}>
      <div className="content-mobile">
        <div className="logo-section">
          <h2>YN</h2>
        </div>
        <div className="icone-content">
          {isDropdownOpen ? (
            <FontAwesomeIcon
              onClick={handleToggleDropdown}
              icon={faTimes}
              style={{
                color: "#5c6ac4",
                fontSize: "2.4em",
                cursor: "pointer",
                position: "absolute",
                top: "25px",
                right: "15px",
                paddingRight: "25px",
              }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleToggleDropdown}
              icon={faBars}
              style={{
                color: "#5c6ac4",
                fontSize: "2.4em",
                cursor: "pointer",
                position: "absolute",
                top: "25px",
                right: "15px",
                paddingRight: "25px",
              }}
            />
          )}

          {isDropdownOpen && <div className="content-mobile">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default MobileDropdown;
