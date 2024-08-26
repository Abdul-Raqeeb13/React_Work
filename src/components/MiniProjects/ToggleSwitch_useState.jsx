import React, { useState } from 'react';
import './ToggleSwitch.css';

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
    <>
    <h1>Toggle Switch project</h1>
    <div className="SwitchContainer" onClick={handleToggle}>
            <div className="Switch">
                <span className={`SwitchValue ${isOn ? 'on' : 'off'}`}>
                    {isOn ? 'ON' : 'OFF'}
                </span>
            </div>
        </div>
    </>
      
    );
}
