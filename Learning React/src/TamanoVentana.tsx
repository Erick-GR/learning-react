import React, { useState, useEffect } from 'react';

function TamanoVentana() {
    const [ancho, setAncho] = useState(window.innerWidth);

    useEffect(() => {
        const handler = () => setAncho(window.innerWidth);
        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    return (
        <div>
            <h1>Tamaño de la ventana</h1>
            <p>Ancho: {ancho}px</p>
        </div>
    );
}

export default TamanoVentana;