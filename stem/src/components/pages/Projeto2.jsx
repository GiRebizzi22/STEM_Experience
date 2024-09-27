import { useEffect, useState } from "react";
import "./projeto1.scss";
import axios from "axios";
// import Ex from "./../../assets/insta.png";
import Cubo1 from "./../../assets/cubo1.jpg";
import Cubo2 from "./../../assets/cubo2.jpg";
import Cubo3 from "./../../assets/cubo3.jpg";
import Form from "../form/Form";

const Projeto2 = () => {
  const [comentarios, setComentarios] = useState([]);
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
  useEffect(() => {
    getComentarios();
  }, []);
  return (
    <div className="projeto1">
      <h1>Cubo Automático</h1>
      <p className="desc">
        A ideia é bem simples: criei um dado eletrônico que, ao apertar um
        botão, gera um número aleatório de 1 a 6, igual a um dado tradicional.
        Os números aparecem através dos LEDs, que estão organizados como as
        bolinhas de um dado comum.
        <br />
        <br />
        O funcionamento é assim: o Arduino usa uma função para gerar números
        aleatórios. Quando eu aperto o botão, o código do Arduino gera o número
        e acende os LEDs correspondentes. Por exemplo, se o número gerado for 4,
        acendem quatro LEDs na posição correta, imitando o que um dado normal
        faria.
        <br />
        <br />
        Esse projeto é super legal porque aprendemos várias coisas ao mesmo
        tempo, como programação e eletrônica básica. É bem interessante ver como
        um dado eletrônico pode funcionar na prática, e a parte mais divertida
        foi montar o circuito e testar os LEDs!
        <br />
        <br />
        Espero que tenham gostado do projeto!
      </p>

      <div className="im">
        <img src={Cubo1} alt="imagem do projeto1" />
        <img src={Cubo2} alt="imagem do projeto1" />
        <img src={Cubo3} alt="imagem do projeto1" />
      </div>

      <Form projeto={"projeto1"} atualiza={getComentarios} />

      <h1 className="fb">Feedbacks:</h1>

      {comentarios.map((comentario) => (
        <div className="comnts" key={comentario.id}>
          <div>
            <h2 className="tl">Nome:</h2>
            <p className="tx">{comentario.nome}</p>
            <h2 className="tl">Comentário:</h2>
          </div>
          <p className="tx">{comentario.comentario}</p>
        </div>
      ))}
    </div>
  );
};

export default Projeto2;
