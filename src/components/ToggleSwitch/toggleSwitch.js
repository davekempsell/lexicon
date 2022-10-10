import React, { useState } from "react";
import './toggleSwitch.css'

export function hardModeLabel (hardMode) {
  if(hardMode) {
    return (
      <div className='hardmode'>
        <p>HARD</p>
        <p>MODE</p>
      </div>
    )
  }
}

export function ToggleSwitch(callback, started, hardMode, notAllowed) {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => {
    // Toggle switch can only be used before game starts
    if(started) {
      notAllowed("Can't change after guess")
    } else {
    setIsToggled(!isToggled);
    callback(!hardMode)
    }
  }
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}