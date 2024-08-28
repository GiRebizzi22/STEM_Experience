import Astronauta from "../../assets/astronauta.svg";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Colégio Trivium apresenta:</h2>
          <h1>STEM Experience</h1>
          <div className="buttons">
            <button>Acesse o instagram do Colégio</button>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img
          src={Astronauta}
          alt=" Imagem de um
        Astronauta"
        />
      </div>
    </div>
  );
};

export default Hero;
