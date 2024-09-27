/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./projeto1.scss";
import axios from "axios";
import Grs from "./../../assets/girassol1.jpg";

const Projeto6 = () => {
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
      <h1>Seguessol</h1>
      <p className="desc">
        Primeiro, a gente usa os LDRs para detectar a quantidade de luz em dois
        pontos diferentes. Eles são basicamente resistores que mudam sua
        resistência de acordo com a quantidade de luz que recebem. Coloquei um
        LDR de cada lado do girassol, para que o Arduino possa comparar a luz
        que está chegando de cada direção.
        <br />
        <br />
        O Arduino, que é o "cérebro" do projeto, vai receber os dados desses
        dois LDRs e, se a luz em um lado for mais forte que no outro, ele envia
        um comando para o servo motor girar o vaso na direção da luz mais forte.
        É como se ele estivesse "ajustando" o girassol para apontar na direção
        do sol.
        <br />
        <br />
        O servo motor é a parte que faz o vaso se mover. Como ele gira em
        ângulos específicos, é possível controlar exatamente para onde o
        girassol vai virar. Então, quando um dos LDRs detecta mais luz, o servo
        gira o girassol até que ambos os LDRs estejam recebendo a mesma
        quantidade de luz.
        <br />
        <br />
        No final, o resultado é um girassol artificial que se move como se
        estivesse vivo, sempre procurando a melhor posição para receber luz!
        Além de ser super legal, esse projeto ensina conceitos de eletrônica
        básica, programação e até biologia, já que estamos imitando o
        comportamento natural de uma planta.
      </p>

      <div className="im">
        <img src={Grs} alt="imagem do projeto1" />
      </div>
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

export default Projeto6;
