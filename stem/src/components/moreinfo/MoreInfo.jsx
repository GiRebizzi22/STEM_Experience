import "./moreinfo.scss";
import Ex from "./../../assets/insta.png";

const MoreInfo = () => {
  return (
    <div className="more">
      <h1>Saiba Mais</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis
        pharetra purus ac venenatis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Donec posuere, lectus sed
        bibendum lacinia, sapien ipsum consectetur purus, nec varius velit lorem
        sed quam. Aenean pharetra vulputate faucibus. Nullam quis nunc id purus
        finibus tincidunt. Vivamus sed ligula nec odio feugiat faucibus.
        Phasellus imperdiet pharetra dolor, vel rutrum sem. Vestibulum sed sem
        sed leo imperdiet malesuada.
        <img className="ig" src={Ex} alt="" />
      </p>
      {/* <div className="imGs"> */}

      {/* </div> */}
      <div className="image"></div>
    </div>
  );
};

export default MoreInfo;
