import React, { useState } from 'react';

function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <p>El toggle está {isOn ? "ON" : "OFF"}</p>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </>
    );
}

export default Toggle;