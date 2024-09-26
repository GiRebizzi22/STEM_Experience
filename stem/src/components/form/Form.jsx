import { useState } from "react";
import "./form.scss";
import axios from "axios";

// import Projeto1 from "../pages/Projeto1";

function Form(props) {
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");

  // Manipulador de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://82.112.244.100:8070/comentarios", {
      // eslint-disable-next-line react/prop-types
      projeto: props.projeto,
      nome: nome,
      comentario: comentario,
    });

    setComentario("");
    setNome("");
    // eslint-disable-next-line react/prop-types
    props.atualiza();
  };

  return (
    <div className="form">
      <h1>Envie o seu Feedback:</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="areatexto">
          <label htmlFor="textArea1">Digite seu nome:</label>
          <input
            type="text"
            id="textArea1"
            name="textArea1"
            rows="4"
            cols="50"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="areatexto">
          <label htmlFor="textArea2">Deixe seu comentário:</label>
          <textarea
            id="textArea2"
            name="textArea2"
            rows="4"
            cols="50"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>

        <button className="bt" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
