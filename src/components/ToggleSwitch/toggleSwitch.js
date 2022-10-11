import React, { useState } from "react";
import './toggleSwitch.css'

export function ToggleSwitch(callback, started, hardMode, notAllowed) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    // Toggle switch can only be used before game starts
    if(started) {
      notAllowed("Can't change after start")
    } else {
    setIsToggled(!isToggled);
    callback(!hardMode)
    }
  }
  return (
    <div>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
        <div className='hardmode'>
          <p>HARD</p>
          <p>MODE</p>
        </div>
    </div>
  );
}