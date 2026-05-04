import React, { useState, useEffect, useRef } from 'react';

interface Usuario {
    id: number;
    name: string;
    email: string;
}

function BuscadorConDebounce() {
    const [query, setQuery] = useState("");
    const [cargando, setCargando] = useState(false);
    const [escribiendo, setEscribiendo] = useState(false);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        if (query === "") return setUsuarios([]); // No hacer fetch si no hay query

        let cancelado = false;
        setEscribiendo(true);

        const cargar = async () => {
            setCargando(true);
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
                if (!res.ok) {
                    throw new Error("Base de datos no encontrada");
                }
                const data = await res.json();
                const usuariosFiltrados = data.filter((u: Usuario) => u.name.toLowerCase().includes(query.toLowerCase()));
                if (!cancelado) {
                    setUsuarios(usuariosFiltrados);
                }
            } catch (error) {
                console.error("Error al cargar base de datos:", error);
            } finally {
                if (!cancelado) {
                    setCargando(false);
                    setEscribiendo(false);
                }
            }
        };

        const timer = setTimeout(() => {
            setEscribiendo(false);
            cargar();
        }, 500);

        return () => {
            cancelado = true;
            clearTimeout(timer);
            setEscribiendo(false);
        }
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="ID del usuario..."
            />
            {cargando && <p>Cargando...</p>}
            {escribiendo && <p>Escribiendo...</p>}
            {!cargando && usuarios.length > 0 && (
                <ul>
                    {usuarios.map((u: Usuario) => (
                        <li key={u.id}>
                            <strong>{u.name}</strong> - {u.email}
                        </li>
                    ))}
                </ul>
            )}
            {!cargando && query.length > 0 && <p>No se encontraron usuarios.</p>}
        </div>
    )
}

export default BuscadorConDebounce;