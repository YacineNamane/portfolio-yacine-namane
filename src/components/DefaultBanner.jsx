import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
import YNLogo from "../images/LogoYN.png";

function DefaultHeader() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1itnfs",
        "template_tyft991",
        form.current,
        "5VlwFfvCFtx0vh5UE"
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className="default-header flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 text-white relative gap-2">
      {/* Logo */}
      <div className="dbl-secction flex-shrink-0">
        <img src={YNLogo} alt="Yacine Logo" className="h-8 sm:h-9 md:h-10" />
      </div>

      {/* Formulaire intégré */}
      <div className="idea-section flex-1 mx-2 sm:mx-4 md:mx-6">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex items-center w-full"
        >
          <input
            type="text"
            name="message"
            placeholder="Vous avez un projet ? Décrivez-le ici.."
            className="flex-1 px-2 sm:px-3 md:px-4 py-2 rounded-l-full bg-gray-800 text-gray-300 placeholder-gray-500 text-xs sm:text-sm md:text-base focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 sm:px-4 md:px-6 py-2 rounded-r-full bg-white text-black font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-200 transition"
          >
            Envoyer
          </button>
        </form>
        {messageSent && (
          <p className="text-green-400 text-xs sm:text-sm mt-1">
            Message envoyé ✅
          </p>
        )}
      </div>

      {/* Wrapper du Menu Burger */}
      <div className="relative flex-shrink-0">
        <div
          className="menu-section flex items-center gap-1 sm:gap-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-white font-medium hidden sm:block">Menu</span>
          {menuOpen ? (
            <svg
              className="w-6 h-6 text-white transition-transform duration-300 rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6H6m12 4H6m12 4H6m12 4H6"
              />
            </svg>
          )}
        </div>

        {/* Menu déroulant */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-5 w-36 sm:w-40 flex flex-col border border-white p-2 bg-black bg-opacity-80 z-50">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/project" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default DefaultHeader;
