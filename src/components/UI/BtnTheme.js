import "./BtnTheme.scss";
import { useContext } from "react";
import { Context } from "../../context";

const BtnTheme = () => {
  const [value, setValue] = useContext(Context);
  const imageNight = process.env.PUBLIC_URL + "/img/night.png";
  const imageLight = process.env.PUBLIC_URL + "/img/sun.png";

  const OnClickHandler = () => {
    value === "Dark" ? setValue(() => "Light") : setValue(() => "Dark");
  };

  return (
    <button className="change-theme-btn" onClick={OnClickHandler}>
      <img
        className="theme-btn"
        src={value === "Dark" ? imageNight : imageLight}
        alt="Icon"
      />
    </button>
  );
};

export default BtnTheme;
