import "./project.scss";
import ProjetoX from "./../../assets/insta.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "Projeto 1",
    img: ProjetoX,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Projeto 2",
    img: ProjetoX,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Projeto 3",
    img: ProjetoX,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Projeto 4",
    img: ProjetoX,
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
];

// eslint-disable-next-line react/prop-types
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          {/* eslint-disable-next-line react/prop-types */}
          <img src={item.img} alt="Imagem do Projeto 1" />
          <motion.div className="textContainer" style={{ y }}>
            {/* eslint-disable-next-line react/prop-types */}
            <h2>{item.title}</h2>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{item.description}</p>
            <button>Acessar Projeto</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Confira os Projetos dos Alunos:</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
