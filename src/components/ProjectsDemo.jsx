import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UD1 from "../images/UD1.png";
import UD2 from "../images/UD2.png";
import UD3 from "../images/UD3.png";
import UD4 from "../images/UD4.png";
import UD5 from "../images/UD5.png";
import UD6 from "../images/UD6.png";
import UD7 from "../images/UD7.png";

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
          end: "bottom 5%",
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
            top: "350px",
            left: "70px",
            maxWidth: "250px ",
          }}
        >
          <img src={UD4} alt="UD 4" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "40px",
            left: "320px",
            maxWidth: "280px ",
          }}
        >
          <img src={UD1} alt="UD 1" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "-30vh",
            right: "45vw",
            opacity: 0.4,
            filter: "brightness(0.5) grayscale(0.5)",
            maxWidth: "250px ",
          }}
        >
          <img src={UD3} alt="UD 3" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "505px",
            left: "515px",
            maxWidth: "180px ",
          }}
        >
          <img src={UD5} alt="UD 5" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "55px",
            right: "110px",
            maxWidth: "225px ",
          }}
        >
          <img src={UD6} alt="UD 6" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "405px",
            right: "250px",
            maxWidth: "340px ",
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
            top: "350px",
            left: "70px",
            maxWidth: "250px ",
          }}
        >
          <img src={UD4} alt="UD 4" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "40px",
            left: "320px",
            maxWidth: "280px ",
          }}
        >
          <img src={UD1} alt="UD 1" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "-30vh",
            right: "50vw",
            opacity: 0.05,
            filter: "brightness(0.5) grayscale(0.5)",
            maxWidth: "250px ",
          }}
        >
          <img src={UD3} alt="UD 3" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "505px",
            left: "515px",
            maxWidth: "180px ",
          }}
        >
          <img src={UD5} alt="UD 5" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "55px",
            right: "110px",
            maxWidth: "225px ",
          }}
        >
          <img src={UD6} alt="UD 6" loading="lazy" />
        </div>
        <div
          className="image-wrapper"
          style={{
            position: "absolute",
            top: "405px",
            right: "250px",
            maxWidth: "340px ",
          }}
        >
          <img src={UD7} alt="UD 7" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDemo;
