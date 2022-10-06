import React, { useState } from "react";
import './toggleSwitch.css'

function ToggleSwitch(callback, started, hardMode, notAllowed) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    // Toggle switch can only be toggled on
    if(started) {
      notAllowed('Must be on from start')
    } else if(!isToggled) {
      setIsToggled(true);
      callback(true)
    }
    // Settings to toggle on and off
    // setIsToggled(!isToggled);
    // callback(!hardMode)
  }
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;