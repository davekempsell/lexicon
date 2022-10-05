import React, { useState } from "react";
import './toggleSwitch.css'

function ToggleSwitch(callback, state) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    setIsToggled(!isToggled);
    callback(!state)
  }
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;