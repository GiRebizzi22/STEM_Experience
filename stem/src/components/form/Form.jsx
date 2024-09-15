import { useState } from "react";
import "./form.scss";
import Footer from "../rodape/Footer";

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
          <label htmlFor="textArea1">Área de Texto 1:</label>
          <input
            type="text"
            id="textArea1"
            name="textArea1"
            rows="4"
            cols="50"
            value={formData.textArea1}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="textArea2">Área de Texto 2:</label>
          <textarea
            id="textArea2"
            name="textArea2"
            rows="4"
            cols="50"
            value={formData.textArea2}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
      {/* <Footer /> */}
    </div>
  );
}

export default Form;
