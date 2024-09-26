import { useRef } from "react";
import "./description.scss";
// import Mao from "./../../assets/hand.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Turma from "../../assets/turma1.jpg";
import Comp from "../../assets/manucomp.jpg";

function Description() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div className="descricao" ref={ref}>
      <motion.h1 style={{ x: yBg }}>O Que é STEM?</motion.h1>

      <motion.h2 style={{ x: yBg }}>
        <span> STEM </span>é uma sigla em inglês que representa{" "}
        <span>Science, Technology, Engineering, and Mathematics</span>, ou seja,{" "}
        <span>Ciência, Tecnologia, Engenharia e Matemática</span>.
        <br />
        <br />A abordagem <span>STEM</span> promove habilidades como raciocínio
        lógico, criatividade e trabalho em equipe, preparando as pessoas para
        carreiras em áreas tecnológicas e de alta demanda no mercado de trabalho
        atual.
      </motion.h2>

      {/* <img src={Mao} alt="Imagem de mão robótica" /> */}
      <motion.div style={{ x: yBg }} className="grid">
        <img src={Turma} alt="" />
        <motion.div className="grid2">
          <img src={Comp} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Description;
