import Astronauta from "../../assets/astronauta.svg";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Colégio Trivium apresenta:
          </motion.h2>
          <motion.h1 variants={textVariants}>STEM Experience</motion.h1>
          <div className="buttons">
            <motion.button variants={textVariants}>
              <a
                href="https://www.instagram.com/colegiotrivium/"
                target="blank"
              >
                {" "}
                Acesse o Instagram do Colégio
              </a>
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        The Future is Here!
      </motion.div> */}
      <motion.div
        className="imageContainer"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <img
          src={Astronauta}
          alt=" Imagem de um
        Astronauta"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
