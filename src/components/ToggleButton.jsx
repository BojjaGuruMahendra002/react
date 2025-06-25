import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);         
  const [showMessage, setShowMessage] = useState(false); 

  const handleClick = () => {
    setIsOn(prev => !prev);       
    setShowMessage(true);         
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>

      {showMessage && (
        <p>The button was clicked and the state is now: <strong>{isOn ? 'ON' : 'OFF'}</strong></p>
      )}
    </div>
  );
}

export default ToggleButton;
