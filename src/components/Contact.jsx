import React, { useRef } from "react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Illustration from "../images/Man'sDream.png";

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
    <div className="mecontacter-section" id="Contact">
      <div className="contact-form">
        <form
          name="contact-form-YN"
          id="from-container"
          ref={form}
          onSubmit={sendEmail}
        >
          <h2>Contactez moi</h2>
          {messageSent ? (
            <div className={`message-sent `}>
              {" "}
              <p>Message envoyé .</p>
            </div>
          ) : null}
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
        <div className="motivation-section">
          <span>
            En tant que Développeur Web Junior , Rigoureux , autonome et ayant
            une solide capacité d'adaptation, je recherche aujourd'hui un
            environnement professionnel dans lequel je pourrais contribuer
            activement, partager mes compétences mais aussi continuer à
            apprendre auprès de développeurs expérimentés, dans une vraie
            dynamique d’écoute et d’échange. Intégrer une entreprise , c’est
            pour moi l’occasion de découvrir le métier dans toute sa richesse
            ...{" "}
          </span>
          <img
            src={Illustration}
            alt="Man's Dream Never Die ! One Piece Ref"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mail-contact">
        <h3>
          {" "}
          Vous pouvez me contacter directement par mail aussi
          <a href="mailto:yacine.nam@outlook.fr"> ici . </a>{" "}
        </h3>
      </div>
    </div>
  );
};

export default ContactMe;
