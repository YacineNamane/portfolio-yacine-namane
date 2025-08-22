import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";
import YNLogo from "../images/LogoYN.webp";

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
    <div className="default-header flex items-center justify-between px-6 py-4  text-white relative">
      {/* Logo */}
      <div className="dbl-secction flex items-center gap-2">
        <img src={YNLogo} alt="Yacine Logo" className="h-10" />
      </div>

      {/* Formulaire intégré */}
      <div className="idea-section flex-1 max-w-xl mx-6">
        <form ref={form} onSubmit={sendEmail} className="flex items-center">
          <input
            type="text"
            name="message"
            placeholder="Vous avez un projet ? Décrivez-le ici..."
            className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-r-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Envoyer
          </button>
        </form>
        {messageSent && (
          <p className="text-green-400 text-sm mt-2">Message envoyé ✅</p>
        )}
      </div>

      {/* Wrapper du Menu Burger */}
      <div className="relative">
        <div
          className="menu-section flex items-center gap-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-white font-medium">Menu</span>
          {menuOpen ? (
            // SVG Close
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white transition-transform duration-300 rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          ) : (
            // SVG Menu
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white transition-transform duration-300 rotate-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
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
          <div className="absolute top-full mt-2 w-40 flex flex-col border border-white  p-2 bg-transparent z-50">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
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
