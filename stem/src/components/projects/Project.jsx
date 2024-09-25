import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjetoX from "./../../assets/insta.png";
import { useNavigate } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Projeto 1",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto1",
  },
  {
    id: 2,
    title: "Projeto 2",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto2",
  },
  {
    id: 3,
    title: "Projeto 3",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto3",
  },
  {
    id: 4,
    title: "Projeto 4",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto4",
  },
  {
    id: 5,
    title: "Projeto 5",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto5",
  },
  {
    id: 6,
    title: "Projeto 6",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto6",
  },
  {
    id: 7,
    title: "Projeto 7",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto7",
  },
  {
    id: 8,
    title: "Projeto 8",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto8",
  },
  {
    id: 9,
    title: "Projeto 9",
    img: ProjetoX,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    rota: "/projeto9",
  },
];

// eslint-disable-next-line react/prop-types
const Single = ({ item }) => {
  const ref = useRef();

  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            {/* eslint-disable-next-line react/prop-types */}
            <h2>{item.title}</h2>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{item.desc}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <button onClick={() => navigate(`${item.rota}`)}>
              Acesse o Projeto
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Confira os projetos dos alunos:</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
