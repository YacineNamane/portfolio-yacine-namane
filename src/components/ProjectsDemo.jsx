import { useEffect } from "react";
import { NavLink } from "react-router-dom";
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

const projectData = [
  {
    title: "UtopiaDreams",
    description:
      "UtopiaDreams est une plateforme de fonds d’écran mobiles que j’ai conçue pour offrir une expérience immersive et fluide. Le site permet de parcourir, filtrer et télécharger une large collection de visuels, combinant design créatif et développement web moderne.",
    images: [
      { src: UD4, style: { top: "35vh", left: "7vw", maxWidth: "12vw" } },
      { src: UD1, style: { top: "10vh", left: "17vw", maxWidth: "15vw" } },
      {
        src: UD3,
        style: {
          top: "-29vh",
          right: "45vw",
          opacity: 0.4,
          filter: "brightness(0.5) grayscale(0.5)",
          maxWidth: "14vw",
        },
      },
      { src: UD5, style: { top: "50vh", left: "28vw", maxWidth: "11vw" } },
      { src: UD6, style: { top: "15vh", right: "10vw", maxWidth: "11vw" } },
      { src: UD7, style: { top: "44vh", right: "22vw", maxWidth: "17vw" } },
    ],
  },
  {
    title: "Anna Perla",
    description:
      "Anna Perla est un projet réalisé en tant que développeur web freelance, consistant à concevoir et développer un site web complet pour un client. L’objectif principal était de créer une plateforme moderne et fonctionnelle, intégrant un espace administrateur sécurisé ainsi qu’un blog dynamique.",
    images: [
      { src: AP1, style: { top: "20vh", left: "4vw", maxWidth: "15vw" } },
      { src: AP3, style: { top: "61vh", left: "36vw", maxWidth: "18vw" } },
      { src: AP2, style: { top: "22vh", right: "10vw", maxWidth: "14vw" } },
    ],
  },
  {
    title: "Winlytics Draft",
    description:
      "Winlytics Draft est un outil d’analyse de draft pour League of Legends qui calcule le taux de victoire moyen d’une équipe en fonction des champions sélectionnés. En s’appuyant sur l’API de Riot, il fournit des statistiques en temps réel sur les probabilités de victoire, aidant ainsi les joueurs à prendre de meilleures décisions stratégiques et à optimiser leurs compositions d’équipe",
    images: [
      { src: WDL1, style: { top: "35vh", left: "7vw", maxWidth: "18vw" } },
      { src: WDL2, style: { top: "10vh", left: "17vw", maxWidth: "15vw" } },
      {
        src: WDL3,
        style: { top: "62vh", right: "47vw", opacity: 0.4, maxWidth: "19vw" },
      },
      { src: WDL4, style: { top: "52vh", left: "70vw", maxWidth: "12vw" } },
      { src: WDL5, style: { top: "15vh", right: "10vw", maxWidth: "11vw" } },
    ],
  },
];

const ProjectsDemo = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide-project");

    slides.forEach((slide) => {
      const images = Array.from(slide.querySelectorAll(".image-wrapper"));
      const text = Array.from(slide.querySelectorAll(".text > *"));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 100%",
          end: "bottom 10%",
          scrub: 1.5,
        },
      });

      if (text.length) {
        tl.fromTo(
          text,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, stagger: 0.6, ease: "power2.out", duration: 2 }
        );
      }

      if (images.length) {
        tl.fromTo(
          images,
          { opacity: 0, y: "80vh" },
          { opacity: 0.7, y: 0, stagger: 0.6, ease: "power2.out", duration: 2 },
          "-=1"
        ).to(images, {
          opacity: 0,
          y: "-80vh",
          stagger: 0.6,
          ease: "power1.inOut",
          duration: 2,
        });
      }
    });

    // --- Rideau ---
    gsap.fromTo(
      ".slide-rideau",
      { y: "100%" },
      {
        y: "0%",
        ease: "power4.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: ".slide-rideau",
          start: "top 100%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".rideau-content > *",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".slide-rideau",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="demo-container relative">
      {/* Background */}
      <div className="background-gif fixed top-0 left-0 w-full h-screen bg-[#141313] -z-10"></div>

      {/* Slides */}
      {projectData.map((project, index) => (
        <div
          key={index}
          className="slide-project py-[120px] text-center relative"
        >
          <div className="text max-w-2xl mx-auto">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          {project.images.map((img, idx) => (
            <div key={idx} className="image-wrapper absolute" style={img.style}>
              <img src={img.src} alt={project.title} loading="lazy" />
            </div>
          ))}
        </div>
      ))}

      <div className="slide-project slide-rideau h-screen flex justify-center items-center bg-[#0f0f0f] text-white overflow-hidden relative">
        <div className="rideau-content text-center">
          <h2>Explorez Mes Projets En Détails</h2>
          <p>
            Découvrez mes réalisations en tant que développeur web junior en
            freelance / autodidacte.
          </p>
          <NavLink
            to="/Projects"
            className="mt-6 inline-block px-6 py-3 text-white font-semibold border border-white border-[0.5px] shadow-sm hover:bg-gray-200 hover:text-black transition"
          >
            Explorer Mes Projets
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDemo;
