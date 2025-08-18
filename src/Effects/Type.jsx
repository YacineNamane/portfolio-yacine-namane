import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  // Variants pour orchestrer les animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // délai entre chaque enfant
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60, scale: 1.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      },
    },
  };

  return (
    <div className="welcome-section">
      <div className="welcome-section-title">
        <span>Hello,</span> <br />
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="title-wrapper"
        >
          <motion.h1 variants={item}>Je Suis Yacine</motion.h1>
          <motion.h1 variants={item}>Développeur Web</motion.h1>
        </motion.div>
      </div>

      <Typewriter
        options={{
          autoStart: true,
          delay: 150,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<br/><span class="typewriter-text">Front End Developer -</span>'
            )
            .pauseFor(900)
            .typeString('<br/><span class="typewriter-text">React JS</span>')
            .pauseFor(900)
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText;
