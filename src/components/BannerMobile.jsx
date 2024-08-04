import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faScreenpal } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook as farAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const MobileDropdown = () => {
  return (
    <div className="banner-mobile">
      <nav>
        <div className="nav-mobile-part">
          {" "}
          <a href="#Home" className="nav-link">
            <FontAwesomeIcon
              icon={faHome}
              style={{ color: "#fafafa", height: "35px", width: "35px" }}
            />
          </a>
        </div>
        <div className="nav-mobile-part">
          <a href="#Apropos" className="nav-link">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#fafafa", height: "35px", width: "35px" }}
            />
          </a>
        </div>
        <div className="nav-mobile-part">
          {" "}
          <h2>YN</h2>{" "}
        </div>
        <div className="nav-mobile-part">
          <a href="#projects" className="nav-link">
            <FontAwesomeIcon
              icon={faScreenpal}
              style={{ color: "#fafafa", height: "35px", width: "35px" }}
            />
          </a>
        </div>
        <div className="nav-mobile-part">
          <a href="#Contact" className="nav-link">
            <FontAwesomeIcon
              icon={farAddressBook}
              style={{ color: "#fafafa", height: "35px", width: "35px" }}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileDropdown;
