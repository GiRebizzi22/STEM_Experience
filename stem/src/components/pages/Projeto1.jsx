import { useEffect, useState } from "react";
import "./projeto1.scss";
import axios from "axios";
import Ex from "./../../assets/insta.png";
import Rede1 from "./../../assets/pedrinhorede.jpg";
import Rede2 from "./../../assets/parafusadeira.jpg";
// import Rede1 from "./../../assets/pedrinhorede.jpg";
import Form from "../form/Form";

const Projeto1 = () => {
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
      <h1>Basketball Point</h1>
      <p className="desc">
        Olá, pessoal! Hoje vamos apresentar o nosso projeto de STEM, que é um
        marcador de pontos para uma mini cesta de basquete. Ele usa um Arduino
        Uno, um sensor ultrassônico e um display de 7 segmentos para contar os
        pontos automaticamente quando a bola passa pela cesta.
        <br />
        <br />
        <br />
        Como funciona:
        <br />
        A ideia é bem simples: temos uma mini tabela de basquete com uma cesta,
        e logo abaixo da cesta colocamos um sensor ultrassônico. Esse sensor
        consegue medir a distância entre ele e os objetos à sua frente, então,
        quando a bola passa pelo sensor, ele detecta a mudança de distância. A
        partir disso, o Arduino processa essa informação e manda o resultado
        para o display de 7 segmentos, onde o número de pontos é mostrado. Toda
        vez que a bola entra na cesta, o display aumenta o número de pontos em
        1. É uma forma prática e divertida de usar a tecnologia do Arduino para
        criar algo que tenha uma aplicação real, como um jogo!
        <br />
        <br />
        <br />
        Componentes Utilizados:
        <br />
        Arduino Uno: o cérebro do projeto, que processa os dados do sensor.
        <br />
        Sensor ultrassônico: responsável por detectar a bola quando ela passa
        pela cesta.
        <br />
        Display de 7 segmentos: mostra o número de pontos que você fez.
        <br />
        Fios e resistores: para fazer todas as conexões.
        <br />
        <br />
        <br />
        Explicação detalhada:
        <br />O sensor ultrassônico fica posicionado embaixo da cesta, medindo a
        distância para ver se algo (no caso, a bola) passou por ali. Quando o
        sensor detecta a bola, ele manda essa informação para o Arduino, que faz
        a contagem de pontos. O Arduino atualiza o display de 7 segmentos, que
        vai mostrar o novo número de pontos. Esse projeto é legal porque une
        programação, eletrônica e mecânica de uma maneira divertida e prática, e
        é super útil para entender como sistemas automatizados funcionam no dia
        a dia.
      </p>

      <div className="im">
        <img src={Rede1} alt="imagem do projeto1" />
        <img src={Rede2} alt="imagem do projeto1" />
        <img src={Ex} alt="imagem do projeto1" />
      </div>

      <Form projeto={"projeto1"} atualiza={getComentarios} />

      <h1>Comentários:</h1>

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

export default Projeto1;
