import React, { useRef } from "react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

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
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // Si le message a été envoyé, configurez un délai pour le faire disparaître après 3 secondes
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 3000);

      // Retournez une fonction de nettoyage pour annuler le délai si le composant est démonté avant la fin du délai
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <div className="mecontacter-section" id="Contact">
      <div className="contact-form">
        <h2>
          Contactez | <span> moi</span>
        </h2>
        {messageSent ? (
          <div className={`message-sent `}>
            {" "}
            <p>Message envoyé avec succès !</p>
          </div>
        ) : null}
        <form name="contact-form-YN" ref={form} onSubmit={sendEmail}>
          <div>
            <label>
              Nom
              <input type="text" name="name" />
            </label>
          </div>
          <br />
          <div>
            <label>
              Email
              <input type="email" name="email" />
            </label>
          </div>
          <br />
          <div>
            <label>
              Message
              <textarea name="message" />
            </label>
          </div>
          <br />
          <div>
            <button type="submit" value="Send">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="mail-contact">
        <h2>
          {" "}
          Vous pouvez me contacter directement par mail aussi
          <a href="mailto:yacine.nam@outlook.fr"> ici. </a>{" "}
        </h2>
      </div>
    </div>
  );
};

export default ContactMe;
