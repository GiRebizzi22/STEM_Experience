import "./project.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjetoX from "./../../assets/insta.png";
import { useNavigate } from "react-router-dom";
import Capa1 from "./../../assets/pietra1.jpg";
import Cubo2 from "./../../assets/cubo2.jpg";
import Piano from "./../../assets/capapiano.jpg";
import Torneira from "./../../assets/suco1.jpg";
import Dino from "./../../assets/plataforma1.jpg";
import Girassol from "./../../assets/girassolcapa.jpg";
// import Torneira from "./../../assets/torneira.jpg";

const items = [
  {
    id: 1,
    title: "Basketball Point",
    img: Capa1,
    desc: "Projeto do 2º E.M.Este é o nosso marcador de pontos automático com Arduino. Ele nos mostra como conceitos de STEM podem ser aplicados em projetos do mundo real e ajudar a tornar atividades comuns, como jogar basquete, ainda mais divertidas e tecnológicas!",
    rota: "/projeto1",
  },
  {
    id: 2,
    title: "Cubo Automático",
    img: Cubo2,
    desc: "Venha conferir o meu projeto de STEM: Um dado eletrônico feito com Arduino Uno e LEDs!",
    rota: "/projeto2",
  },
  {
    id: 3,
    title: "Teclarduino",
    img: Piano,
    desc: "Piano eletrônico feito com o Arduino Uno, botões e um buzzer. O objetivo do projeto é criar um pequeno piano que emite sons diferentes conforme apertamos os botões.",
    rota: "/projeto3",
  },
  {
    id: 4,
    title: "Suco Automático",
    img: Torneira,
    desc: "Suco automático usando um Arduino Uno, uma bomba d’água, um shield, e um sensor ultrassônico. A ideia desse projeto é simples: criar uma máquina que serve suco de forma automática, sem que a gente precise apertar nenhum botão.",
    rota: "/projeto4",
  },
  {
    id: 5,
    title: "Dino Jump Platform",
    img: Dino,
    desc: "Hoje eu vou apresentar o meu projeto de STEM usando o Arduino Uno. A ideia é fazer um botão que funciona quando você pisa em uma plataforma, e ele serve pra controlar o Dino daquele jogo famoso, o do Chrome, fazendo ele pular.",
    rota: "/projeto5",
  },
  {
    id: 6,
    title: "Seguessol",
    img: Girassol,
    desc: "Hoje vou apresentar um projeto de STEM que eu fiz usando o Arduino Uno, dois LDRs (que são sensores de luz), um servo motor e um girassol artificial. A ideia é simples, mas muito interessante: fiz com que o girassol seguisse a luz, como se fosse um girassol de verdade que sempre tenta ficar virado para o sol.",
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
