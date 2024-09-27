import "./moreinfo.scss";
import Ex from "./../../assets/gabi.jpg";

const MoreInfo = () => {
  return (
    <div className="more">
      <h1>Saiba Mais</h1>
      <p>
        O Stem Experience reuniu alunos de diferentes turmas para criar projetos
        tecnológicos, com apoio essencial dos professores. O Professor Leonardo
        orientou os estudantes no desenvolvimento técnico, ajudando com
        programação e eletrônica, enquanto o Professor Thiago ofereceu suporte
        estratégico, trazendo insights sobre as aplicações e impacto dos
        projetos. Juntos, os professores desempenharam um papel fundamental no
        sucesso dos trabalhos, guiando os alunos desde a concepção até a
        execução final das ideias. Nós do Colégio Trvium, agradecemos a sua
        presença!
        <img className="ig" src={Ex} alt="" />
      </p>

      <div className="image"></div>
    </div>
  );
};

export default MoreInfo;
