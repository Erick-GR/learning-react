import React, { useState, useEffect } from 'react';

interface Usuario {
    id: number;
    name: string;
    email: string;
}

function BuscadorUsuario() {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [id, setId] = useState("");
    const [texto, setTexto] = useState("");
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        if (!id) return; // No hacer fetch si no hay ID

        let cancelado = false; // Para evitar actualizar estado si el componente se desmonta

        const cargar = async () => {
            setCargando(true);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!res.ok) {
                    throw new Error("Usuario no encontrado");
                }
                const data = await res.json();
                if (!cancelado) {
                    setUsuario(data);
                }
            } catch (error) {
                if (!cancelado) {
                    setUsuario(null);
                    console.error(error);
                }
            } finally {
                if (!cancelado) {
                    setCargando(false);
                }
            }
        };

        cargar();
        return () => {
            cancelado = true;
        };
    }, [id]);

    return (
        <div>
            <input
                type="text"
                value={texto}
                onChange={e => setTexto(e.target.value)}
                placeholder="ID del usuario..."
            />
            <button onClick={() => setId(texto)}>Buscar</button>
            {cargando && <p>Cargando...</p>}
            {!cargando && usuario && (
                <>
                    <h2>{usuario.name}</h2>
                    <p>{usuario.email}</p>
                </>
            )}
        </div>
    );
}

export default BuscadorUsuario;