import React, { useEffect, useState, useRef } from 'react';

function ContadorRenders() {
    const [nombre, setNombre] = useState("");
    const renders = useRef(0);

    useEffect(() => {
        renders.current++;
    });

    return (
        <>
            <input
                type="text"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                placeholder={`Renders: ${renders.current}`}
            />
            <p>Haz tipeado {nombre.length} caracteres. Renders: {renders.current}</p>
        </>
    );
}

export default ContadorRenders;