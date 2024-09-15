import "./moreinfo.scss";
import Ex from "./../../assets/insta.png";

const MoreInfo = () => {
  return (
    <div className="more">
      <p>
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
        interdum. Pellentesque quis enim lobortis, luctus sem id, lacinia urna.
        In hac habitasse platea dictumst. Nunc eget erat in libero feugiat
        faucibus. Nulla pharetra odio a tellus ullamcorper, ut venenatis lorem
        tincidunt. Donec auctor laoreet nisi vel semper. Proin tincidunt
        venenatis vehicula. Duis tincidunt, eros ac iaculis porta, sem massa
        imperdiet purus, non ultrices ipsum lacus nec diam. Maecenas convallis
        rhoncus placerat. Cras eleifend risus lectus. Etiam pretium placerat
        urna, vitae vestibulum turpis vestibulum non. Nam nulla ipsum, lobortis
        in lorem eget, vestibulum faucibus est.
      </p>
      <div className="iMages">
        <img src={Ex} alt="" />
      </div>

      <div className="image"></div>
    </div>
  );
};

export default MoreInfo;
