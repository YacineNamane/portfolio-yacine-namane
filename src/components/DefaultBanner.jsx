import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import YNLogo from "../images/LogoYN.webp";

function DefaultHeader() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1itnfs", // ton service ID
        "template_tyft991", // ton template ID
        form.current,
        "5VlwFfvCFtx0vh5UE" // ton user/public key
      )
      .then(
        (result) => {
          console.log(result.text);
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
    <div className="default-header flex items-center justify-between px-6 py-4 bg-black text-white">
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
            Send
          </button>
        </form>
        {messageSent && (
          <p className="text-green-400 text-sm mt-2">Message envoyé ✅</p>
        )}
      </div>

      {/* Menu section */}
      <div className="menu-section flex items-center gap-2 cursor-pointer">
        <span>Menu</span>
        <div className="space-y-1">
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
      </div>
    </div>
  );
}

export default DefaultHeader;
