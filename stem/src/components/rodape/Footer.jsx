import "./footer.scss";
// import Logo from "../../assets/stemlogo.svg";

const Footer = () => {
  return (
    <div className="rodape">
      <div className="flex">
        <h2>
          Made by{" "}
          <a
            href="https://www.instagram.com/gi_rebizzi/"
            className="link"
            target="blank"
          >
            Giovanna Miguel Rebizzi
          </a>
        </h2>
      </div>
      <div className="flex2">
        <h1>Colégio Trivium 2024</h1>
      </div>
    </div>
  );
};

export default Footer;
