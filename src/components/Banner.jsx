import React from "react";
import { NavLink } from "react-router-dom";
import YNLogo from "../images/LogoYN.webp";

function Banner() {
  return (
    <div className="banner" style={{ backgroundColor: "rgb(51, 51, 51)" }}>
      <div className="logo-container">
        <img src={YNLogo} alt="Yacine Namane Logo" />
      </div>

      <div className="nav-section">
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "rgb(92 92 92 / 71%)",
              transition: "all 0.3s ease-in-out",
            })}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "rgb(92 92 92 / 71%)",
              transition: "all 0.3s ease-in-out",
            })}
          >
            <span>About</span>
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "rgb(92 92 92 / 71%)",
              transition: "all 0.3s ease-in-out",
            })}
          >
            <span>Projets</span>
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "rgb(92 92 92 / 71%)",
              transition: "all 0.3s ease-in-out",
            })}
          >
            <span>Contact</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Banner;
