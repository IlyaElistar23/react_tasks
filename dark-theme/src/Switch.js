import React, { useState } from "react";
import "./Switch.css";

function Switch({switchTheme}) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    switchTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;
