import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UD1 from "../images/UD1.png";
import UD2 from "../images/UD2.png";
import UD3 from "../images/UD3.png";
import UD4 from "../images/UD4.png";
import UD5 from "../images/UD5.png";
import UD6 from "../images/UD6.png";
import PBG from "../images/PBG.gif";

gsap.registerPlugin(ScrollTrigger);

const ProjectsDemo = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach((slide) => {
      // Animation du texte
      gsap.fromTo(
        slide.querySelector(".text"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      // Animation des images
      gsap.fromTo(
        slide.querySelectorAll(".images img"),
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="demo-container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background GIF */}
      <img
        src={PBG}
        alt="background gif"
        className="background-gif"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Slide 1 */}
      <div
        className="slide"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <div className="text animate">
          <h2>UtopiaDreams</h2>
          <p>
            Une plateforme immersive pour découvrir des fonds d'écran uniques.
          </p>
        </div>
        <div
          className="images animate"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <img
            src={UD1}
            alt="UD 1"
            style={{ width: "200px", borderRadius: "12px" }}
          />
          <img
            src={UD2}
            alt="UD 2"
            style={{ width: "200px", borderRadius: "12px" }}
          />
          <img
            src={UD3}
            alt="UD 3"
            style={{ width: "200px", borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className="slide"
        style={{ padding: "100px 0", textAlign: "center" }}
      >
        <div className="text animate">
          <h2>Fonctionnalités</h2>
          <p>Explorez une variété de fonds d'écran classés par catégories.</p>
        </div>
        <div
          className="images animate"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <img
            src={UD4}
            alt="UD 4"
            style={{ width: "200px", borderRadius: "12px" }}
          />
          <img
            src={UD5}
            alt="UD 5"
            style={{ width: "200px", borderRadius: "12px" }}
          />
          <img
            src={UD6}
            alt="UD 6"
            style={{ width: "200px", borderRadius: "12px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDemo;
