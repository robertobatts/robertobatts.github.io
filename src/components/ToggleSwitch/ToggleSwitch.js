import React, {useState, useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span className="slider round">
        <span className="fas fa-moon moon-icon"/>
        <span className="fas fa-sun sun-icon"/>
      </span>
    </label>
  );
};
export default ToggleSwitch;
