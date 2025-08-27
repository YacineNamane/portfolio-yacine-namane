import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UD1 from "../images/UD1.png";
import UD3 from "../images/UD3.png";
import UD4 from "../images/UD4.png";
import UD5 from "../images/UD5.png";
import UD6 from "../images/UD6.png";
import UD7 from "../images/UD7.png";
import AP1 from "../images/AP1.png";
import AP2 from "../images/AP2.png";
import AP3 from "../images/AP3.png";
import WDL1 from "../images/WDL1.png";
import WDL2 from "../images/WDL2.png";
import WDL3 from "../images/WDL3.png";
import WDL4 from "../images/WDL4.png";
import WDL5 from "../images/WDL5.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectsDemo = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide-project");

    slides.forEach((slide) => {
      const images = slide.querySelectorAll(".image-wrapper");
      const text = slide.querySelectorAll(".text > *");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 100%",
          end: "bottom 10%",
          scrub: 1.5,
        },
      });

      // Texte (h2 + p)
      tl.fromTo(
        text,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.6,
          ease: "power2.out",
          duration: 2.5,
        }
      );

      // Images (entrées)
      tl.fromTo(
        images,
        { opacity: 0, y: "80vh" },
        {
          opacity: 0.7,
          y: 0,
          stagger: 0.6,
          ease: "power2.out",
          duration: 2.5,
        },
        "-=1.2"
      );

      // Images (sorties)
      tl.to(images, {
        opacity: 0,
        y: "-80vh",
        stagger: 0.6,
        ease: "power1.inOut",
        duration: 2,
      });
    });
  }, []);

  return (
    <div className="demo-container" style={{ position: "relative" }}>
      <div
        className="background-gif"
        style={{
          position: "fixed",
          background: "#141313",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></div>

      {/* --- SLIDE 1 --- */}
      <div
        className="slide-project"
        style={{ padding: "120px 0", textAlign: "center" }}
      >
        <div className="text">
          <h2>UtopiaDreams</h2>
          <p>
            UtopiaDreams est une plateforme de fonds d’écran mobiles que j’ai
            conçue pour offrir une expérience immersive et fluide. Le site
            permet de parcourir, filtrer et télécharger une large collection de
            visuels, combinant design créatif et développement web moderne.
          </p>
        </div>

        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "35vh",
            left: "7vw",
            maxWidth: "12vw ",
          }}
        >
          <img src={UD4} alt="UD 4" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "10vh",
            left: "17vw",
            maxWidth: "15vw ",
          }}
        >
          <img src={UD1} alt="UD 1" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "-29vh",
            right: "45vw",
            opacity: 0.4,
            filter: "brightness(0.5) grayscale(0.5)",
            maxWidth: "14vw ",
          }}
        >
          <img src={UD3} alt="UD 3" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "50vh",
            left: "28vw",
            maxWidth: "11vw ",
          }}
        >
          <img src={UD5} alt="UD 5" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "15vh",
            right: "10vw",
            maxWidth: "11vw ",
          }}
        >
          <img src={UD6} alt="UD 6" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "44vh",
            right: "22vw",
            maxWidth: "17vw ",
          }}
        >
          <img src={UD7} alt="UD 7" loading="lazy" />
        </div>
      </div>

      {/* --- SLIDE 2 --- */}
      <div
        className="slide-project"
        style={{ padding: "120px 0", textAlign: "center" }}
      >
        <div className="text">
          <h2>Anna Perla</h2>
          <p>
            Anna Perla est un projet réalisé en tant que développeur web
            freelance, consistant à concevoir et développer un site web complet
            pour un client. L’objectif principal était de créer une plateforme
            moderne et fonctionnelle, intégrant un espace administrateur
            sécurisé ainsi qu’un blog dynamique.
          </p>
        </div>

        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "20vh",
            left: "4vw",
            maxWidth: "15vw ",
          }}
        >
          <img src={AP1} alt="UD 4" loading="lazy" />
        </div>

        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "61vh",
            left: "36vw",
            maxWidth: "18vw ",
          }}
        >
          <img src={AP3} alt="UD 5" loading="lazy" />
        </div>

        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "22vh",
            right: "10vw",
            maxWidth: "14vw ",
          }}
        >
          <img src={AP2} alt="UD 7" loading="lazy" />
        </div>
      </div>

      {/* --- SLIDE 3 --- */}
      <div
        className="slide-project"
        style={{ padding: "120px 0", textAlign: "center" }}
      >
        <div className="text">
          <h2>Winlytics Draft lol</h2>
          <p>
            Winlytics Draft est un outil d’analyse de draft pour League of
            Legends qui calcule le taux de victoire moyen d’une équipe en
            fonction des champions sélectionnés. En s’appuyant sur l’API de
            Riot, il fournit des statistiques en temps réel sur les probabilités
            de victoire, aidant ainsi les joueurs à prendre de meilleures
            décisions stratégiques et à optimiser leurs compositions d’équipe.
          </p>
        </div>

        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "35vh",
            left: "7vw",
            maxWidth: "18vw ",
          }}
        >
          <img src={WDL1} alt="UD 4" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "10vh",
            left: "17vw",
            maxWidth: "15vw ",
          }}
        >
          <img src={WDL2} alt="UD 1" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "62vh",
            right: "47vw",
            opacity: 0.4,
            maxWidth: "19vw ",
          }}
        >
          <img src={WDL3} alt="UD 3" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "52vh",
            left: "70vw",
            maxWidth: "12vw ",
          }}
        >
          <img src={WDL4} alt="UD 5" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "15vh",
            right: "10vw",
            maxWidth: "11vw ",
          }}
        >
          <img src={WDL5} alt="UD 6" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDemo;
