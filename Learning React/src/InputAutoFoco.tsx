import React, { use, useEffect, useRef } from 'react';

function InputAutoFoco() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return <input ref={inputRef} type="text" placeholder="Escribe algo..." />;  
}

export default InputAutoFoco;
