import { useState } from "react";
import "./form.scss";
// import Projeto1 from "../pages/Projeto1";

function Form() {
  const [formData, setFormData] = useState({
    textArea1: "",
    textArea2: "",
  });

  // Manipulador de mudanças nos campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manipulador de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
  };

  return (
    <div className="form">
      <h1>Envie o seu Feedback:</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <div className="areatexto">
          <label htmlFor="textArea1">Digite seu nome:</label>
          <textarea
            id="textArea1"
            name="textArea1"
            rows="2"
            cols="50"
            value={formData.textArea1}
            onChange={handleInputChange}
          />
        </div>

        <div className="areatexto">
          <label htmlFor="textArea2">Deixe seu comentário:</label>
          <textarea
            id="textArea2"
            name="textArea2"
            rows="5"
            cols="50"
            value={formData.textArea2}
            onChange={handleInputChange}
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
