import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p> Clicks: {count}</p>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <button onClick={() => setCount(count - 1)}>Subtract 1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 3)}>Add 3</button>
        </>
    )
}

export default Contador;