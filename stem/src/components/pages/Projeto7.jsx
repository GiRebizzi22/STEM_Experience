import { useEffect, useState } from "react";
import "./projeto1.scss";
import axios from "axios";

import Moinho1 from "./../../assets/moinhocapa.jpg";
import Moinho2 from "./../../assets/moinho1.jpg";
import Moinho3 from "./../../assets/moinho2.jpg";

const Projeto7 = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const getComentarios = async () => {
      try {
        const response = await axios.get(
          "http://82.112.244.100:8070/comentarios"
        );
        console.log(response.data);
        setComentarios(
          response.data.filter((item) => item.projeto === "projeto1")
        );
      } catch (error) {
        console.log(error);
      }
    };
    getComentarios();
  }, []);
  return (
    <div className="projeto1">
      <h1>Moinho Életrico</h1>
      <p className="desc">
        O projeto moinho de vento foi desenvolvido para ser uma maquete
        funcional de um moinho. Foi utilizado um motor de corrente contínua,
        paga girar as pás e um Arduino com um shield de controle de motores para
        controlar a velocidade de rotação do motor.
      </p>

      <div className="im">
        <img src={Moinho1} alt="imagem do projeto1" />
        <img src={Moinho2} alt="imagem do projeto1" />
        <img src={Moinho3} alt="imagem do projeto1" />
      </div>
      {/* <h1>Feedbacks:</h1>

      {comentarios.map((comentario) => (
        <div className="comnts" key={comentario.id}>
          <div>
            <h2 className="tl">Nome:</h2>
            <p className="tx">{comentario.nome}</p>
            <h2 className="tl">Comentário:</h2>
          </div>
          <p className="tx">{comentario.comentario}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Projeto7;
