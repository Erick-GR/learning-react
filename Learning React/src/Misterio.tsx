import React, { useState, useEffect, useRef } from 'react';

function Misterio() {
    const [count, setCount] = useState(0);
    const ref = useRef(0);
    
    const handleClick = () => {
        setCount(count + 1);
        ref.current = ref.current + 1;
        console.log("count:", count, "ref:", ref.current);
    };
    
    return <button onClick={handleClick}>Click ({count} / {ref.current})</button>;
}

export default Misterio;