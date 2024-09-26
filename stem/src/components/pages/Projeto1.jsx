import { useEffect, useState } from "react";
import "./projeto1.scss";
import axios from "axios";
import Ex from "./../../assets/insta.png";
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
      <h1>Projeto 1</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis
        pharetra purus ac venenatis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec posuere, lectus sed
        bibendum lacinia, sapien ipsum consectetur purus, nec varius velit lorem
        sed quam. Aenean pharetra vulputate faucibus. Nullam quis nunc id purus
        finibus tincidunt. Vivamus sed ligula nec odio feugiat faucibus.
        Phasellus imperdiet pharetra dolor, vel rutrum sem. Vestibulum sed sem
        sed leo imperdiet malesuada. Aliquam et sapien erat. Integer eleifend
        tellus a tellus egestas vulputate. Curabitur quis ligula in est
        vulputate interdum id vitae urna. Quisque ut turpis quis nisi mollis
        interdum.
      </p>

      <div className="im">
        <img src={Ex} alt="imagem do projeto1" />
        <img src={Ex} alt="imagem do projeto1" />
        <img src={Ex} alt="imagem do projeto1" />
      </div>

      <Form />

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
      <Form projeto={"projeto1"} atualiza={getComentarios} />
    </div>
  );
};

export default Projeto1;
