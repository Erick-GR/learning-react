import React, { useState, useEffect } from 'react';

function RelojDigital() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const actualizarHora = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(actualizarHora); // Limpieza del intervalo al desmontar
    }, []); // El efecto se ejecuta solo al montar

    return (
        <div>
            <h1>Reloj Digital</h1>
            <p>{hora}</p>
        </div>
    );
}   

export default RelojDigital;