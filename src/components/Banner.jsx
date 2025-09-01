import React from "react";
import { NavLink } from "react-router-dom";
import YNLogo from "../images/YNLogo.svg";
import In from "../images/linkedin.svg";
import X from "../images/twitter.svg";
import Gh from "../images/github.svg";
import "../App.css";

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
            to="/project"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "rgb(92 92 92 / 71%)",
              transition: "all 0.3s ease-in-out",
            })}
          >
            <span>Projects</span>
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
      <div className="flex justify-center items-center w-full bg-[#121212] py-4 gap-6 h-17p">
        <div className="w-5 h-5 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <a
            href="https://linkedin.com/in/namane-yacine-542398252"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={In}
              alt="LinkedIn"
              className="h-full w-full object-contain"
            />
          </a>
        </div>

        <div className="w6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <a
            href="https://x.com/UtopiaDrea42952"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={X}
              alt="Twitter"
              className="h-full w-full object-contain"
            />
          </a>
        </div>

        <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <a
            href="https://github.com/YacineNamane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Gh}
              alt="GitHub"
              className="h-full w-full object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
